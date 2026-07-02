# SmartBearing

**Dual-modal edge intelligence system for predictive bearing failure monitoring in textile MSME factories.**

SmartBearing is a corporate-grade IoT dashboard that monitors spindle bearing health in power loom factories. It collects vibration + acoustic signals from edge sensor nodes, runs anomaly detection on-device, and sends WhatsApp alerts before failure occurs.

---

## Features

- **9-page full dashboard** — Landing, Login, Register, Fleet Overview, Machine Detail, Predictions, Alert Center, Analytics & ROI, Settings
- **Live sensor feed** — simulated real-time vibration & temperature updates every 3.5 s
- **FFT analysis** — BPFO/BPFI frequency spike visualization per machine
- **Remaining Useful Life (RUL)** prediction curves
- **ROI calculator** — interactive sliders, estimates monthly cost savings
- **PDF report export** — full fleet analytics report opens print dialog
- **CSV export** — download alert log as `.csv`
- **Command palette** — press `Cmd+K` / `Ctrl+K` to search machines and navigate
- **WhatsApp alert simulation** — realistic notification slides in from bottom-right
- **Alert acknowledge flow** — Acknowledge → Resolve with toast feedback
- **Dark navy theme** — Space Grotesk + Inter + JetBrains Mono type system

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 18 or higher (20+ recommended) |
| pnpm | 9 or higher |

Install pnpm if you don't have it:

```bash
npm install -g pnpm
```

---

## Getting Started

### 1. Clone the project

```bash
git clone https://github.com/Vaishnav-Hub9/smartbearing.git
cd smartbearing
```

### 2. Install dependencies

```bash
pnpm install
```

> This installs all workspace packages in one shot (root + frontend + API server).

### 3. Run the frontend

```bash
pnpm --filter @workspace/smartbearing run dev
```

Open **http://localhost:5173** in your browser.

### 4. (Optional) Run the API server

The frontend is fully self-contained with mock data — no API calls are made. The API server is scaffolded for future backend integration.

```bash
pnpm --filter @workspace/api-server run dev
```

API server starts on **http://localhost:5000**.

---

## Login

The app uses a local demo login. On the Login page, enter **any email + any password** and press Sign In — it sets a `localStorage` flag and redirects to the dashboard.

---

## Project Structure

```
smartbearing/
├── artifacts/
│   ├── smartbearing/          # React + Vite frontend
│   │   ├── src/
│   │   │   ├── pages/         # All 9 pages
│   │   │   ├── components/    # Layout, UI, dashboard widgets
│   │   │   ├── data/          # mockData.ts — all sensor/machine data
│   │   │   ├── hooks/         # useCountUp, useLiveSensors
│   │   │   └── utils/         # printReport.ts (PDF + CSV export)
│   │   ├── index.html
│   │   └── vite.config.ts
│   └── api-server/            # Express 5 API server (scaffolded)
├── lib/                       # Shared TypeScript libraries
├── package.json               # Root workspace config
├── pnpm-workspace.yaml        # Workspace + catalog pins
└── tsconfig.base.json         # Shared TypeScript config
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm --filter @workspace/smartbearing run dev` | Start frontend dev server |
| `pnpm --filter @workspace/api-server run dev` | Start API server |
| `pnpm run typecheck` | Full TypeScript check across all packages |
| `pnpm run build` | Build all packages |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend framework | React 18 + Vite |
| Routing | wouter |
| Charts | Recharts |
| 3D / CSS bearing | @react-three/fiber + CSS fallback |
| Animation | Framer Motion |
| UI components | shadcn/ui + Radix UI |
| Icons | Lucide React |
| Styling | Tailwind CSS v4 |
| Command palette | cmdk |
| Package manager | pnpm workspaces |

---

## Notes

- All sensor data is **mock/simulated** — no real hardware required.
- Authentication is **localStorage-based** — demo only, not production-safe.
- The 3D bearing component auto-detects WebGL availability and falls back to a CSS animation if WebGL is unavailable.
- PDF export uses the browser's built-in print dialog — choose "Save as PDF" when the dialog appears.

---

## Screenshots

| Page | Description |
|------|-------------|
| Landing | Hero with animated CSS bearing + FFT overlay |
| Dashboard | Fleet KPIs, live sensor feed, vibration trend chart |
| Machine Detail | Per-machine FFT, waveform, RUL curve |
| Predictions | RUL projections for all at-risk machines |
| Alert Center | Acknowledge/resolve flow, CSV export |
| Analytics | 30-day trends, heatmap, ROI calculator, PDF export |
