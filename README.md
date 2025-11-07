# Accenture CES Next + Agentic AI Modernization Portal

A fully static Next.js website showcasing the transformation from Dialogflow to Google CES Next with Agentic AI for enterprise contact center operations.

## 🚀 Features

- **Static Export**: Fully static site that can be deployed on Vercel, Netlify, or any static host
- **Interactive Demo**: Compare legacy Dialogflow vs modern CES Next responses
- **Voice Interaction**: Web Speech API integration for voice demos
- **Agentic Architecture**: Interactive visualization of orchestrators, agents, and tools
- **ROI Calculator**: Real-time savings calculation based on KPI improvements
- **Responsible AI**: Guardrails, policies, and compliance metrics
- **Brand Compliant**: Accenture purple (#A100FF) color scheme and official branding

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Chart.js (react-chartjs-2)
- **Icons**: Lucide React
- **Output**: Static HTML/CSS/JS (no backend required)

## 📦 Installation

```bash
# Install dependencies
pnpm install

# or
npm install

# or
yarn install
```

## 🏃 Development

```bash
# Start development server
pnpm dev

# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Build & Export

```bash
# Build for production
pnpm build

# or
npm run build
```

The static site will be exported to the `/out` directory, ready for deployment.

## 📁 Project Structure

```
├── app/                        # Next.js app directory
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   ├── approach/              # Approach page
│   ├── demo/                  # Interactive demo
│   ├── agentic/               # Agentic architecture
│   ├── metrics/               # KPIs and ROI
│   ├── responsible-ai/        # Responsible AI
│   ├── about/                 # About page
│   └── contact/               # Contact form
├── components/                 # React components
│   ├── NavBar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── TransformationJourney.tsx
│   ├── ChatSimulator.tsx
│   ├── DebugConsole.tsx
│   ├── VoiceDemo.tsx
│   ├── AgentMap.tsx
│   ├── AgentTelemetry.tsx
│   ├── KPICharts.tsx
│   ├── ROIForm.tsx
│   └── YAMLPolicy.tsx
├── data/                      # JSON data files
│   ├── kpis.json
│   ├── responsible_ai.json
│   ├── dialogflow_export.json
│   ├── ces_next_goals.json
│   ├── test_scenarios.json
│   └── agentic/
│       ├── orchestrators.json
│       ├── agents.json
│       ├── tools.json
│       ├── policies.json
│       ├── scenarios.json
│       └── telemetry.json
└── public/                    # Static assets
    ├── brand/
    │   └── accenture-logo.svg
    ├── imgs/journey/
    └── downloads/
        └── Accenture_Verizon_Agentic_Modernization_OnePager.pdf
```

## 🎨 Brand Guidelines

- **Primary Purple**: `#A100FF`
- **Black**: `#000000`
- **Background**: `#0b0b10`
- **Surface**: `#111827`
- **Border**: `#1f2937`
- **Muted Text**: `#9ca3af`

All colors are defined in `tailwind.config.ts` and `app/globals.css`.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will automatically detect Next.js and deploy
4. The static export will be served from the `/out` directory

### Other Static Hosts

1. Run `pnpm build`
2. Upload the contents of `/out` directory to your host
3. Configure your host to serve `index.html` for all routes

## ♿ Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigation support
- Focus indicators with purple accent
- Semantic HTML
- ARIA labels where needed

## 📄 License

© Accenture. Accenture and the > device are trademarks of Accenture.

## 📞 Contact

For questions or support, contact: contact@accenture.com


