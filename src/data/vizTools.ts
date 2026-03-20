import type { VizTool } from './types';

export const vizTools: VizTool[] = [
  // ===================== PLATFORM =====================
  {
    id: 'foxglove',
    name: 'Foxglove',
    developer: 'Foxglove Technologies',
    country: 'US',
    toolType: 'platform',
    description:
      'Multimodal data visualization and observability platform purpose-built for robotics. 20+ panel types for 3D scenes, point clouds, images, time series, and logs on a unified timeline. Created the MCAP container format (now default ROS 2 bag format). Edge-to-cloud pipeline via on-robot Foxglove Agent for selective upload and offline queuing. Founded by ex-Cruise engineers who built similar internal tooling. $58M raised (Series B led by Bessemer).',
    language: 'TypeScript',
    frameworks: 'ROS 1/2, MCAP, Protobuf, FlatBuffers, JSON, CDR',
    deployment: 'Desktop + Web + Self-hosted',
    license: 'Commercial (free tier available)',
    release: '2021',
    focus: 'Fleet-scale robot observability and debugging',
    sources: [
      { label: 'Foxglove', url: 'https://foxglove.dev' },
      { label: 'MCAP GitHub', url: 'https://github.com/foxglove/mcap' },
    ],
  },
  {
    id: 'rerun',
    name: 'Rerun',
    developer: 'Rerun',
    country: 'SE',
    toolType: 'platform',
    description:
      'Open-source multimodal data visualization platform built in Rust for high performance on large datasets. SDK-first approach with Python, Rust, and C++ bindings. Native Apache Arrow data representation enables zero-copy integration with Pandas, Polars, and DuckDB. Integrated into Hugging Face LeRobot for manipulation policy debugging. CTO Emil Ernerfeldt created egui (largest Rust GUI framework). $20M raised.',
    language: 'Rust / Python / C++',
    frameworks: 'ROS 2, MCAP, Apache Arrow, LeRobot, Polars',
    deployment: 'Desktop + Web + Jupyter',
    license: 'MIT + Apache 2.0',
    release: '2023',
    focus: 'Code-first multimodal data visualization for physical AI',
    sources: [
      { label: 'Rerun', url: 'https://rerun.io' },
      { label: 'GitHub', url: 'https://github.com/rerun-io/rerun' },
    ],
  },
  {
    id: 'formant',
    name: 'Formant',
    developer: 'Formant',
    country: 'US',
    toolType: 'platform',
    description:
      'Cloud-based robot fleet observability platform. Ingests 3D visualization data (LiDAR, URDF, transforms), video, GPS, and numeric telemetry into a single dashboard. Provides remote teleoperation, fleet-wide analytics, and business reporting. Vendor-agnostic \u2014 supports heterogeneous robot types (AMRs, humanoids, drones, delivery robots) in a single pane of glass.',
    language: 'TypeScript / Python',
    frameworks: 'ROS 1/2, gRPC, custom adapters',
    deployment: 'Cloud (SaaS)',
    license: 'Commercial',
    release: '2017',
    focus: 'Fleet management and remote robot operations',
    sources: [
      { label: 'Formant', url: 'https://formant.io' },
    ],
  },
  // ===================== 3D VIEWER =====================
  {
    id: 'rviz2',
    name: 'RViz2',
    developer: 'Open Robotics',
    country: 'US',
    toolType: '3d-viewer',
    description:
      'The canonical 3D visualization tool for ROS. Displays sensor data, robot state, TF trees, point clouds, occupancy grids, and interactive markers in real time. Deeply integrated with the ROS topic/service ecosystem. Ships as part of the core ROS 2 distribution \u2014 the first tool most robotics engineers reach for.',
    language: 'C++',
    frameworks: 'ROS 2 (native)',
    deployment: 'Desktop (Linux/macOS/Windows)',
    license: 'BSD',
    release: '2010',
    focus: 'ROS-native 3D sensor and state visualization',
    sources: [
      { label: 'GitHub', url: 'https://github.com/ros2/rviz' },
    ],
  },
  {
    id: 'meshcat',
    name: 'MeshCat',
    developer: 'MIT / meshcat-dev',
    country: 'US',
    toolType: '3d-viewer',
    description:
      'Lightweight remotely-controllable 3D viewer built on three.js. Python and Julia bindings. The standard web viewer for robotics research \u2014 deeply integrated with Drake and Pinocchio dynamics libraries. Runs entirely in the browser with zero external dependencies on the viewing side, making it ideal for SSH workflows.',
    language: 'Python / Julia / JavaScript',
    frameworks: 'Drake, Pinocchio, three.js',
    deployment: 'Web (browser-based)',
    license: 'MIT',
    release: '2018',
    focus: 'Lightweight web-based robot model visualization',
    sources: [
      { label: 'GitHub', url: 'https://github.com/meshcat-dev/meshcat-python' },
    ],
  },
  {
    id: 'viser',
    name: 'Viser',
    developer: 'Nerfstudio',
    country: 'US',
    toolType: '3d-viewer',
    description:
      'Web-based 3D visualization library for Python. Displays point clouds, meshes, images, Gaussian splats, and geometric primitives in the browser. Includes built-in GUI widgets (sliders, buttons, checkboxes) for interactive parameter tuning. Imperative Python API with automatic state synchronization to web clients. Designed for SSH workflows \u2014 no X11 forwarding required.',
    language: 'Python / TypeScript',
    frameworks: 'Nerfstudio, three.js',
    deployment: 'Web (browser-based)',
    license: 'MIT',
    release: '2023',
    focus: 'Interactive 3D research visualization over SSH',
    sources: [
      { label: 'GitHub', url: 'https://github.com/nerfstudio-project/viser' },
      { label: 'Viser Studio', url: 'https://viser.studio' },
    ],
  },
  {
    id: 'vuer',
    name: 'Vuer',
    developer: 'MIT / UCSD',
    country: 'US',
    toolType: '3d-viewer',
    description:
      'Python 3D visualization toolkit designed for robotics and VR/AR teleoperation. Loads URDFs, renders scenes in the browser via WebSockets. VR/AR-ready out of the box \u2014 used as the visualization backend for Open-TeleVision (CoRL 2024), enabling remote humanoid teleoperation across the internet. Declarative, event-driven API that runs on mobile devices.',
    language: 'Python / JavaScript',
    frameworks: 'WebSockets, URDF, WebXR',
    deployment: 'Web + VR/AR (browser-based)',
    license: 'Apache 2.0',
    release: '2024',
    focus: 'Immersive VR/AR teleoperation visualization',
    sources: [
      { label: 'GitHub', url: 'https://github.com/vuer-ai/vuer' },
    ],
  },
  // ===================== TIME SERIES / LOGGING =====================
  {
    id: 'plotjuggler',
    name: 'PlotJuggler',
    developer: 'PickNik Robotics',
    country: 'US',
    toolType: 'time-series',
    description:
      'Fast drag-and-drop time series visualization tool. Streams live ROS topics or replays rosbag data with synchronized playback. Supports custom data transforms, reactive scripting, and republishing rosbag data at specific timestamps for consumption by other tools (like RViz). Not ROS-specific despite deep ROS plugin support \u2014 works with any CSV, ULog, or MCAP data.',
    language: 'C++ / Qt',
    frameworks: 'ROS 1/2, MCAP, ULog, CSV',
    deployment: 'Desktop (Linux/macOS/Windows)',
    license: 'LGPL-3.0',
    release: '2017',
    focus: 'Time series debugging and rosbag analysis',
    sources: [
      { label: 'GitHub', url: 'https://github.com/facontidavide/PlotJuggler' },
    ],
  },
  {
    id: 'datatamer',
    name: 'DataTamer',
    developer: 'PickNik Robotics',
    country: 'US',
    toolType: 'time-series',
    description:
      'High-performance C++ logging library that records thousands of numerical variables at up to 1 KHz with minimal CPU overhead. Designed for introspecting internal robot state beyond what is published on ROS topics \u2014 captures algorithm internals that would otherwise be invisible. Feeds into PlotJuggler or Foxglove for visualization.',
    language: 'C++',
    frameworks: 'ROS 2, PlotJuggler, Foxglove',
    deployment: 'Library (on-robot)',
    license: 'MIT',
    release: '2023',
    focus: 'High-frequency internal state logging',
    sources: [
      { label: 'GitHub', url: 'https://github.com/PickNikRobotics/data_tamer' },
      { label: 'PickNik Blog', url: 'https://picknik.ai/debugging/real-time/ros/2023/12/20/DataTamer-an-OSS-library-to-improve-debuggability-and-observability-in-ROS.html' },
    ],
  },
  // ===================== DATA & ANALYTICS =====================
  {
    id: 'roboto_ai',
    name: 'Roboto AI',
    developer: 'Roboto AI',
    country: 'US',
    toolType: 'data-analytics',
    description:
      'AI-powered analytics engine for robotics and physical AI data. Models summarize logs, surface anomalies, and highlight key events across robot fleets. Supports ROS 2 and PX4 data formats with built-in visualization panels (plots, video, maps, tables). Multimodal search makes robotics data queryable, not just viewable. Founded by ex-Amazon Robotics and AWS leaders.',
    language: 'Python',
    frameworks: 'ROS 2, PX4, MCAP',
    deployment: 'Cloud (SaaS)',
    license: 'Commercial',
    release: '2023',
    focus: 'AI-powered robot log triage and anomaly detection',
    sources: [
      { label: 'Roboto AI', url: 'https://www.roboto.ai' },
    ],
  },
];
