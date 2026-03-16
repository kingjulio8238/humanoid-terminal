import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const {
    name, country, type, description, marketShare, ticker,
    componentLabel, isBottleneck, oemCount, totalOems,
    alternatives, customers,
  } = req.body;

  if (!name) return res.status(400).json({ error: 'Missing supplier name' });

  const altText = alternatives?.length > 0
    ? `Alternatives: ${alternatives.map((a: { name: string; country: string }) => `${a.name} (${a.country})`).join(', ')}`
    : 'No tracked alternatives — sole supplier in this category.';

  const customerText = customers?.length > 0
    ? `OEM customers (${oemCount}/${totalOems}): ${customers.map((c: { name: string; country: string }) => `${c.name} (${c.country})`).join(', ')}`
    : 'No direct OEM customers (upstream supplier).';

  const prompt = `You are a supply chain investment analyst specializing in the humanoid robotics industry. Write a 2-3 paragraph investment thesis for the following supplier. Be specific, analytical, and direct. Reference concrete numbers from the data. Cover:

1. Revenue exposure to humanoid robotics — how dependent is this company on the humanoid market, and how large is the opportunity?
2. Competitive moat — what makes this supplier hard to replace? Or easy to replace?
3. Geopolitical risk — how does this company's country of origin and customer base create risk or advantage?

SUPPLIER DATA:
- Name: ${name}
- Country: ${country}
- Type: ${type}
- Description: ${description || 'N/A'}
- Market share: ${marketShare || 'Not disclosed'}
- Ticker: ${ticker || 'Private'}
- Component category: ${componentLabel || 'N/A'}
- Bottleneck component: ${isBottleneck ? 'YES' : 'No'}
- ${customerText}
- ${altText}

Write the thesis now (200 words max, 2-3 short paragraphs, no headers, no bullet points):`;

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.3,
        max_tokens: 280,
      }),
    });

    if (!groqRes.ok) {
      const err = await groqRes.text();
      return res.status(502).json({ error: 'Groq API error', details: err });
    }

    const data = await groqRes.json();
    const thesis = data.choices?.[0]?.message?.content?.trim() || 'Unable to generate thesis.';

    return res.json({ thesis });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to generate thesis', details: String(err) });
  }
}
