import type { VLAModel } from './types';

export const vlaModels: VLAModel[] = [
  {
    id: 'helix_02',
    name: 'Helix 02',
    developer: 'Figure',
    country: 'US',
    relationshipType: 'proprietary',
    description: 'Figure\'s latest Helix model for high-rate, full-upper-body control and long-horizon object handling on its humanoid platform.',
    release: '2026',
    focus: 'Whole-body humanoid manipulation',
    availability: 'Internal / Figure-only',
    sources: [
      { label: 'Figure: Helix 02', url: 'https://www.figure.ai/news/helix-02' },
      { label: 'Figure: Helix', url: 'https://www.figure.ai/news/helix' },
    ],
    companyLinks: [
      {
        companyId: 'figure',
        relationship: 'proprietary',
        sources: [
          { label: 'Figure: Helix 02', url: 'https://www.figure.ai/news/helix-02' },
        ],
      },
    ],
  },
  {
    id: 'redwood_ai',
    name: 'Redwood AI',
    developer: '1X',
    country: 'US',
    relationshipType: 'proprietary',
    description: '1X\'s Redwood AI is its in-house robot intelligence stack for NEO, aimed at end-to-end mobile manipulation in home environments.',
    release: '2025',
    focus: 'End-to-end mobile manipulation',
    availability: 'Internal / 1X-only',
    sources: [
      { label: '1X: Redwood AI', url: 'https://www.1x.tech/discover/redwood-ai' },
    ],
    companyLinks: [
      {
        companyId: '1x',
        relationship: 'proprietary',
        sources: [
          { label: '1X: Redwood AI', url: 'https://www.1x.tech/discover/redwood-ai' },
        ],
      },
    ],
  },
  {
    id: 'gemini_robotics',
    name: 'Gemini Robotics',
    developer: 'Google DeepMind',
    country: 'US',
    relationshipType: 'partner',
    description: 'Google DeepMind\'s robotics model family that extends Gemini into embodied reasoning and robot action.',
    release: '2025',
    focus: 'Embodied reasoning + robot action',
    availability: 'Partner access',
    sources: [
      { label: 'DeepMind: Gemini Robotics', url: 'https://deepmind.google/models/gemini-robotics/' },
      { label: 'Apptronik + Google DeepMind', url: 'https://apptronik.com/news-collection/apptronik-partners-with-google-deepmind-robotics' },
    ],
    companyLinks: [
      {
        companyId: 'apptronik',
        relationship: 'partner',
        sources: [
          { label: 'DeepMind: Gemini Robotics', url: 'https://deepmind.google/models/gemini-robotics/' },
          { label: 'Apptronik + Google DeepMind', url: 'https://apptronik.com/news-collection/apptronik-partners-with-google-deepmind-robotics' },
        ],
      },
    ],
  },
  {
    id: 'groot_n1',
    name: 'GR00T N1',
    developer: 'NVIDIA',
    country: 'US',
    relationshipType: 'open',
    description: 'NVIDIA\'s open humanoid foundation model and post-training stack for customizable humanoid reasoning and skills.',
    release: '2025',
    focus: 'Open humanoid foundation model',
    availability: 'Open / customizable',
    sources: [
      { label: 'NVIDIA News: GR00T N1', url: 'https://nvidianews.nvidia.com/news/nvidia-isaac-gr00t-n1-open-humanoid-robot-foundation-model-simulation-frameworks' },
      { label: 'NVIDIA Research: GR00T N1', url: 'https://research.nvidia.com/publication/2025-03_nvidia-isaac-gr00t-n1-open-foundation-model-humanoid-robots' },
    ],
    companyLinks: [],
  },
  {
    id: 'skild_brain',
    name: 'Skild Brain',
    developer: 'Skild AI',
    country: 'US',
    relationshipType: 'ecosystem',
    description: 'Skild AI\'s omni-bodied robotics foundation model designed to generalize across robot types and tasks.',
    release: '2024',
    focus: 'General-purpose robotics intelligence',
    availability: 'Platform / enterprise access',
    sources: [
      { label: 'Skild AI: Homepage', url: 'https://www.skild.ai/' },
      { label: 'Skild AI: Robotic Brain', url: 'https://www.skild.ai/blogs/building-the-general-purpose-robotic-brain' },
    ],
    companyLinks: [],
  },
  {
    id: 'pi0',
    name: 'pi0',
    developer: 'Physical Intelligence',
    country: 'US',
    relationshipType: 'ecosystem',
    description: 'Physical Intelligence\'s first generalist robotic policy for broad task execution, now available through the openpi release.',
    release: '2024',
    focus: 'Generalist robot policy',
    availability: 'Open weights / code',
    sources: [
      { label: 'Physical Intelligence: openpi', url: 'https://www.physicalintelligence.company/blog/openpi' },
    ],
    companyLinks: [],
  },
];
