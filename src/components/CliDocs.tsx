import { useState, useCallback } from 'react';

const PKG = '@kingjulio8238/atlas-cli';

/* ── Markdown generator ── */
const SUB_TAB_FILENAMES: Record<string, string> = {
  cli_install: 'CLI-INSTALL',
  cli_commands: 'CLI-COMMANDS',
  cli_examples: 'CLI-EXAMPLES',
};

function generateCliMarkdown(tabId: string): string {
  const lines: string[] = [];

  if (tabId === 'cli_install') {
    lines.push('# Humanoid Atlas CLI – Install');
    lines.push('');
    lines.push('## Install globally');
    lines.push('```bash');
    lines.push(`npm install -g ${PKG}`);
    lines.push('```');
    lines.push('');
    lines.push('## Or run directly with npx');
    lines.push('```bash');
    lines.push(`npx ${PKG} companies --type=oem`);
    lines.push('```');
    lines.push('');
    lines.push('## Verify installation');
    lines.push('```bash');
    lines.push('atlas health');
    lines.push('```');
    lines.push('');
    lines.push('## Global Flags');
    lines.push('');
    lines.push('| Flag | Description |');
    lines.push('|------|-------------|');
    lines.push('| `--json` | Output raw JSON (default is formatted tables) |');
    lines.push('| `--base-url <url>` | Override API base URL |');
    lines.push('| `--api-key <key>` | Pass API key for authentication |');
    lines.push('');
  }

  if (tabId === 'cli_commands') {
    lines.push('# Humanoid Atlas CLI – Command Reference');
    lines.push('');
    for (const cmd of COMMANDS) {
      lines.push(`## \`${cmd.syntax}\``);
      lines.push('');
      lines.push(cmd.description);
      lines.push('');
      if (cmd.flags && cmd.flags.length > 0) {
        lines.push('### Flags');
        lines.push('');
        lines.push('| Flag | Description |');
        lines.push('|------|-------------|');
        for (const f of cmd.flags) {
          lines.push(`| \`${f.flag}\` | ${f.description} |`);
        }
        lines.push('');
      }
      lines.push('### Example');
      lines.push('```bash');
      lines.push(cmd.example);
      lines.push('```');
      lines.push('');
      if (cmd.exampleOutput) {
        lines.push('### Example Output');
        lines.push('```');
        lines.push(cmd.exampleOutput);
        lines.push('```');
        lines.push('');
      }
      lines.push('---');
      lines.push('');
    }
  }

  if (tabId === 'cli_examples') {
    lines.push('# Humanoid Atlas CLI – Example Workflows');
    lines.push('');
    for (const wf of WORKFLOWS) {
      lines.push(`## ${wf.title}`);
      lines.push('');
      lines.push(wf.description);
      lines.push('');
      for (let i = 0; i < wf.steps.length; i++) {
        lines.push(`### Step ${i + 1}`);
        lines.push('```bash');
        lines.push(wf.steps[i]);
        lines.push('```');
        lines.push('');
      }
      lines.push('---');
      lines.push('');
    }
  }

  return lines.join('\n');
}

function downloadCliMarkdown(tabId: string) {
  const md = generateCliMarkdown(tabId);
  const blob = new Blob([md], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${SUB_TAB_FILENAMES[tabId] || 'CLI'}.md`;
  a.click();
  URL.revokeObjectURL(url);
}

/* ── Copy button (reuse pattern from ApiDocs) ── */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [text]);
  return (
    <button className="api-copy-btn" onClick={copy}>
      {copied ? 'COPIED' : 'COPY'}
    </button>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="api-code-block">
      <CopyButton text={code} />
      <pre><code>{code}</code></pre>
    </div>
  );
}

/* ── Command card ── */
interface CmdDef {
  name: string;
  syntax: string;
  description: string;
  flags?: { flag: string; description: string }[];
  example: string;
  exampleOutput?: string;
}

function CommandCard({ cmd }: { cmd: CmdDef }) {
  const [showOutput, setShowOutput] = useState(false);

  return (
    <div className="api-endpoint-card">
      <div className="api-endpoint-header">
        <code className="api-path">{cmd.syntax}</code>
      </div>
      <p className="api-endpoint-desc">{cmd.description}</p>

      {cmd.flags && cmd.flags.length > 0 && (
        <div className="api-params-section">
          <h4 className="api-section-label">Flags</h4>
          <table className="api-params-table">
            <thead>
              <tr><th>Flag</th><th>Description</th></tr>
            </thead>
            <tbody>
              {cmd.flags.map((f) => (
                <tr key={f.flag}>
                  <td><code>{f.flag}</code></td>
                  <td>{f.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="api-params-section">
        <h4 className="api-section-label">Example</h4>
        <CodeBlock code={cmd.example} />
      </div>

      {cmd.exampleOutput && (
        <div className="api-params-section">
          <button className="api-response-toggle" onClick={() => setShowOutput(!showOutput)}>
            <h4 className="api-section-label">
              Example Output
              <span className="api-toggle-icon">{showOutput ? '−' : '+'}</span>
            </h4>
          </button>
          {showOutput && (
            <div className="api-code-block">
              <pre><code>{cmd.exampleOutput}</code></pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ── Command data ── */
const COMMANDS: CmdDef[] = [
  {
    name: 'health',
    syntax: 'atlas health',
    description: 'Check if the API is reachable.',
    example: 'atlas health',
    exampleOutput: '  Status: ok\n  Time:   2026-03-21T21:54:52.196Z',
  },
  {
    name: 'companies',
    syntax: 'atlas companies [flags]',
    description: 'List and search companies. Returns a formatted table by default.',
    flags: [
      { flag: '--type <type>', description: 'Filter by entity type (oem, component_maker)' },
      { flag: '--country <code>', description: 'Filter by country code (US, CN, JP)' },
      { flag: '--status <status>', description: 'Filter by robotSpecs status' },
      { flag: '-q, --query <text>', description: 'Search name and description' },
      { flag: '--has-specs', description: 'Only companies with robotSpecs' },
      { flag: '--limit <n>', description: 'Max results (default 200)' },
      { flag: '--offset <n>', description: 'Pagination offset' },
    ],
    example: 'atlas companies --type=oem --country=US --limit=5',
    exampleOutput: '  ID         NAME                TYPE  COUNTRY\n  ─────────  ──────────────────  ────  ───────\n  apptronik  Apptronik           oem   US\n  tesla      Tesla (Optimus)     oem   US\n  figure     Figure (Figure 03)  oem   US\n  agility    Agility Robotics    oem   US\n  1x         1X (Neo)            oem   US\n\n  10 total',
  },
  {
    name: 'company',
    syntax: 'atlas company <id>',
    description: 'Get a detailed company profile with specs, suppliers, funding, and production data.',
    example: 'atlas company tesla',
  },
  {
    name: 'relationships',
    syntax: 'atlas relationships [flags]',
    description: 'List supply chain relationships between companies.',
    flags: [
      { flag: '--from <id>', description: 'Filter by source company' },
      { flag: '--to <id>', description: 'Filter by destination company' },
      { flag: '--component <name>', description: 'Filter by component name' },
      { flag: '--category <cat>', description: 'Filter by component category' },
      { flag: '--limit <n>', description: 'Max results (default 500)' },
    ],
    example: 'atlas relationships --to=tesla --category=motors',
  },
  {
    name: 'supply-chain',
    syntax: 'atlas supply-chain <id> [flags]',
    description: 'Graph traversal from a company. Walk upstream (suppliers), downstream (customers), or both.',
    flags: [
      { flag: '--direction <dir>', description: 'upstream, downstream, or both (default both)' },
      { flag: '--depth <n>', description: 'Max traversal depth 1-10 (default 3)' },
    ],
    example: 'atlas supply-chain tesla --direction=upstream --depth=2',
  },
  {
    name: 'bottlenecks',
    syntax: 'atlas bottlenecks [flags]',
    description: 'Identify supply chain bottlenecks where few suppliers serve many OEMs.',
    flags: [
      { flag: '--country <code>', description: 'Filter by supplier country' },
    ],
    example: 'atlas bottlenecks',
  },
  {
    name: 'scenario',
    syntax: 'atlas scenario [flags]',
    description: 'What-if scenario analysis. Simulate supplier loss, country ban, or component shortage.',
    flags: [
      { flag: '--mode <mode>', description: 'supplier-loss, country-ban, or component-shortage (required)' },
      { flag: '--offline <ids>', description: 'Comma-separated company IDs (for supplier-loss)' },
      { flag: '--countries <codes>', description: 'Comma-separated country codes (for country-ban)' },
      { flag: '--categories <cats>', description: 'Comma-separated categories (for component-shortage)' },
    ],
    example: 'atlas scenario --mode=supplier-loss --offline=nvidia',
  },
  {
    name: 'query',
    syntax: 'atlas query "<text>"',
    description: 'LLM-powered natural language search across the entire dataset.',
    flags: [
      { flag: '--max-results <n>', description: 'Max company results to return' },
    ],
    example: 'atlas query "Which OEMs use NVIDIA compute?"',
    exampleOutput: '  Several OEMs integrate NVIDIA compute modules...\n\n  Companies: tesla, figure, apptronik\n  Intent: list',
  },
  {
    name: 'compare',
    syntax: 'atlas compare <id1> <id2> [...]',
    description: 'Side-by-side comparison of 2-5 OEMs.',
    example: 'atlas compare tesla figure',
  },
  {
    name: 'stats',
    syntax: 'atlas stats',
    description: 'Aggregate statistics across all resources.',
    example: 'atlas stats',
  },
  {
    name: 'funding',
    syntax: 'atlas funding [flags]',
    description: 'List company funding records.',
    flags: [
      { flag: '--sort <field>', description: 'Sort by "valuation" or "raised"' },
    ],
    example: 'atlas funding --sort=valuation',
  },
  {
    name: 'components',
    syntax: 'atlas components [flags]',
    description: 'List component categories.',
    flags: [
      { flag: '--bottleneck', description: 'Only bottleneck components' },
    ],
    example: 'atlas components --bottleneck',
  },
  {
    name: 'factories',
    syntax: 'atlas factories [flags]',
    description: 'List factory directory.',
    flags: [
      { flag: '--country <code>', description: 'Filter by country' },
      { flag: '--status <status>', description: 'Filter by factory status' },
    ],
    example: 'atlas factories --country=US',
  },
  {
    name: 'vla-models',
    syntax: 'atlas vla-models',
    description: 'List Vision-Language-Action models.',
    example: 'atlas vla-models',
  },
  {
    name: 'safety-standards',
    syntax: 'atlas safety-standards',
    description: 'List safety standards relevant to humanoid robots.',
    example: 'atlas safety-standards',
  },
];

/* ── Example workflows ── */
interface Workflow {
  title: string;
  description: string;
  steps: string[];
}

const WORKFLOWS: Workflow[] = [
  {
    title: 'Find all US OEMs and their motor suppliers',
    description: 'List US OEMs, then query the supply chain for motor relationships.',
    steps: [
      'atlas companies --type=oem --country=US',
      'atlas relationships --to=tesla --category=motors',
      'atlas supply-chain tesla --direction=upstream --depth=2',
    ],
  },
  {
    title: 'Analyze what happens if NVIDIA goes offline',
    description: 'Run a supplier-loss scenario to see which OEMs are impacted.',
    steps: [
      'atlas scenario --mode=supplier-loss --offline=nvidia',
      'atlas bottlenecks',
    ],
  },
  {
    title: 'Compare two OEMs side by side',
    description: 'Get detailed specs comparison in your terminal.',
    steps: [
      'atlas compare tesla figure',
      'atlas compare tesla figure --json | jq .data.companies',
    ],
  },
  {
    title: 'Use with coding agents',
    description: 'Pipe JSON output into your agent workflow.',
    steps: [
      'atlas companies --type=oem --json > oems.json',
      'atlas company tesla --json | jq .company.robotSpecs',
      'atlas query "cheapest humanoid robot" --json',
    ],
  },
];

/* ── Sub-tab content ── */
const SUB_TABS: Record<string, { title: string; description: string }> = {
  cli_install: { title: 'Install', description: 'Get started with the Humanoid Atlas CLI.' },
  cli_commands: { title: 'Commands', description: 'Full command reference with flags and examples.' },
  cli_examples: { title: 'Examples', description: 'Real-world workflows and usage patterns.' },
};

/* ── Main component ── */
export default function CliDocs({ activeSubTab }: { activeSubTab: string }) {
  const content = SUB_TABS[activeSubTab];
  const [mdDownloaded, setMdDownloaded] = useState(false);
  if (!content) return null;

  return (
    <div className="api-docs">
      <div className="api-docs-header">
        <div className="api-docs-header-top">
          <div>
            <div className="api-docs-title-row">
              <h2 className="api-docs-title">{content.title}</h2>
              <button className="api-md-btn" onClick={() => {
                downloadCliMarkdown(activeSubTab);
                setMdDownloaded(true);
                setTimeout(() => setMdDownloaded(false), 3000);
              }}>
                {mdDownloaded ? 'Downloaded!' : '.md file for agents'}
              </button>
            </div>
            <p className="api-docs-desc">{content.description}</p>
          </div>
        </div>
      </div>

      {activeSubTab === 'cli_install' && <InstallContent />}
      {activeSubTab === 'cli_commands' && <CommandsContent />}
      {activeSubTab === 'cli_examples' && <ExamplesContent />}
    </div>
  );
}

/* ── Install sub-tab ── */
function InstallContent() {
  return (
    <>
      <div className="api-base-url-card">
        <h4 className="api-preamble-label">Install globally via npm</h4>
        <CodeBlock code={`npm install -g ${PKG}`} />
      </div>

      <div className="api-base-url-card">
        <h4 className="api-preamble-label">Or run directly with npx</h4>
        <CodeBlock code={`npx ${PKG} companies --type=oem`} />
      </div>

      <div className="api-base-url-card">
        <h4 className="api-preamble-label">Verify installation</h4>
        <CodeBlock code="atlas health" />
      </div>

      <div className="api-preamble api-preamble-grid">
        <div className="api-preamble-item api-preamble-item--full">
          <h4 className="api-preamble-label">Global Flags</h4>
          <table className="api-params-table">
            <thead>
              <tr><th>Flag</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><code>--json</code></td><td>Output raw JSON (default is formatted tables)</td></tr>
              <tr><td><code>--base-url &lt;url&gt;</code></td><td>Override API base URL</td></tr>
              <tr><td><code>--api-key &lt;key&gt;</code></td><td>Pass API key for authentication</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

/* ── Commands sub-tab ── */
function CommandsContent() {
  return (
    <>
      {COMMANDS.map((cmd) => (
        <CommandCard key={cmd.name} cmd={cmd} />
      ))}
    </>
  );
}

/* ── Examples sub-tab ── */
function ExamplesContent() {
  return (
    <>
      {WORKFLOWS.map((wf) => (
        <div key={wf.title} className="api-endpoint-card">
          <h3 className="api-path" style={{ marginBottom: 8 }}>{wf.title}</h3>
          <p className="api-endpoint-desc">{wf.description}</p>
          {wf.steps.map((step, i) => (
            <div key={i} className="api-params-section">
              <h4 className="api-section-label">Step {i + 1}</h4>
              <CodeBlock code={step} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
