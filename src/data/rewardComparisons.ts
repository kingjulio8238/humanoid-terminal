/**
 * Pre-computed reward model scores for demo trajectories.
 * Each demo has scores from multiple models at uniformly-spaced time points.
 * scores[i] maps to normalized_time = i / (numFrames - 1).
 */

export interface RewardModelScores {
  id: string;        // matches rewardModels.ts id where applicable
  name: string;
  color: string;
  dashPattern: number[];  // [] = solid, [8,3] = dashed, etc.
  scores: number[];       // progress 0-1, one per frame
  voc: number;
}

export interface RewardComparison {
  id: string;
  instruction: string;
  videoUrl: string;
  numFrames: number;
  models: RewardModelScores[];
}

export const rewardComparisons: RewardComparison[] = [
  {
    id: 'sweater_inversion',
    instruction: 'Retrieve the collar and correctly invert the plain sweater',
    videoUrl: '/demos/sweater_inversion.mp4',
    numFrames: 10,
    models: [
      {
        id: 'topreward',
        name: 'TOPReward',
        color: '#DC2828',
        dashPattern: [],
        scores: [0.0, 0.287, 0.487, 0.713, 0.554, 0.573, 0.629, 0.873, 1.0, 0.888],
        voc: 0.92,
      },
      {
        id: 'roboreward',
        name: 'RoboReward',
        color: '#F5761A',
        dashPattern: [5, 3],
        scores: [0.25, 0.25, 0.25, 0.5, 0.5, 1.0, 0.75, 1.0, 0.75, 0.75],
        voc: 0.81,
      },
      {
        id: 'robometer',
        name: 'Robometer',
        color: '#A064DC',
        dashPattern: [8, 3],
        scores: [0.383, 0.437, 0.589, 0.595, 0.570, 0.434, 0.787, 0.702, 0.520, 0.605],
        voc: 0.55,
      },
      {
        id: 'gvl',
        name: 'GVL',
        color: '#4A90D9',
        dashPattern: [6, 3],
        scores: [0.0, 0.7, 0.5, 0.4, 0.9, 0.3, 0.2, 0.8, 0.6, 0.1],
        voc: -0.72,
      },
      {
        id: 'bruteforce_vlm',
        name: 'BruteforceVLM',
        color: '#4AC48A',
        dashPattern: [3, 3],
        scores: [0.5, 0.5, 0.5, 0.5, 0.6, 0.5, 0.6, 0.6, 0.6, 0.6],
        voc: 0.62,
      },
    ],
  },
  {
    id: 'gpu_rail_insert',
    instruction: 'Insert the rail into the gpu',
    videoUrl: '/demos/gpu_rail_insert.mp4',
    numFrames: 10,
    models: [
      {
        id: 'topreward',
        name: 'TOPReward',
        color: '#DC2828',
        dashPattern: [],
        scores: [0.284, 0.0, 0.284, 0.561, 0.648, 0.685, 0.955, 1.0, 0.974, 0.985],
        voc: 0.95,
      },
      {
        id: 'roboreward',
        name: 'RoboReward',
        color: '#F5761A',
        dashPattern: [5, 3],
        scores: [0.25, 0.0, 0.25, 0.0, 0.25, 0.25, 0.75, 0.75, 1.0, 1.0],
        voc: 0.85,
      },
      {
        id: 'robometer',
        name: 'Robometer',
        color: '#A064DC',
        dashPattern: [8, 3],
        scores: [0.221, 0.231, 0.331, 0.533, 0.662, 0.733, 0.803, 0.847, 0.827, 0.880],
        voc: 0.99,
      },
      {
        id: 'gvl',
        name: 'GVL',
        color: '#4A90D9',
        dashPattern: [6, 3],
        scores: [0.8, 0.6, 0.5, 0.1, 0.9, 0.5, 0.4, 0.2, 0.3, 0.7],
        voc: -0.30,
      },
      {
        id: 'bruteforce_vlm',
        name: 'BruteforceVLM',
        color: '#4AC48A',
        dashPattern: [3, 3],
        scores: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.6],
        voc: 0.87,
      },
    ],
  },
  {
    id: 'tshirt_fold',
    instruction: 'Fold the t-shirt',
    videoUrl: '/demos/tshirt_fold.mp4',
    numFrames: 10,
    models: [
      {
        id: 'topreward',
        name: 'TOPReward',
        color: '#DC2828',
        dashPattern: [],
        scores: [0.0, 0.910, 0.988, 0.992, 0.989, 0.995, 0.992, 0.995, 0.993, 1.0],
        voc: 0.90,
      },
      {
        id: 'roboreward',
        name: 'RoboReward',
        color: '#F5761A',
        dashPattern: [5, 3],
        scores: [0.0, 0.25, 0.25, 0.5, 0.75, 0.75, 0.75, 0.75, 0.75, 1.0],
        voc: 0.93,
      },
      {
        id: 'robometer',
        name: 'Robometer',
        color: '#A064DC',
        dashPattern: [8, 3],
        scores: [0.131, 0.240, 0.342, 0.429, 0.474, 0.660, 0.691, 0.683, 0.813, 0.914],
        voc: 0.99,
      },
      {
        id: 'gvl',
        name: 'GVL',
        color: '#4A90D9',
        dashPattern: [6, 3],
        scores: [0.6, 0.3, 0.0, 0.2, 0.4, 0.7, 0.8, 0.5, 0.9, 0.1],
        voc: 0.26,
      },
      {
        id: 'bruteforce_vlm',
        name: 'BruteforceVLM',
        color: '#4AC48A',
        dashPattern: [3, 3],
        scores: [0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 0.5, 0.6, 0.8],
        voc: 0.98,
      },
    ],
  },
];
