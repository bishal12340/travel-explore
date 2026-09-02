# Travel Explorer

A production-quality travel web application built with React and Vite. Travel Explorer allows users to discover destinations, view real-time weather, and use an AI-powered travel assistant to generate day-by-day itineraries.

## Features

- **Destination Explorer**: Browse, search, and filter destinations.
- **Dynamic Imagery**: High-quality images sourced via Unsplash API (with fallbacks).
- **Real-Time Weather**: Current weather conditions for destinations using OpenWeather API.
- **AI Itinerary Planner**: Generate detailed, tailored day-by-day itineraries using Google Gemini AI.
- **Premium Design**: Modern UI with Framer Motion animations, Tailwind CSS styling, and accessible components.
- **Responsive Layout**: Designed mobile-first to look great on all device sizes.

## Tech Stack

- **Framework**: React 19 + Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **APIs Used**: 
  - Unsplash API (Images)
  - OpenWeather API (Weather)
  - Google Gemini API (AI Itineraries)

## Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, Footer, Cards)
├── data/             # Local structured data (destinations)
├── pages/            # Main route pages (Home, Explore, DestinationDetails, Planner)
├── services/         # External API integrations
├── App.jsx           # Application routing and layout
└── index.css         # Global styles and Tailwind configuration
```

## Environment Setup

1. Copy the `.env.example` file to a new `.env.local` file:
   ```bash
   cp .env.example .env.local
   ```
2. Populate the environment variables with your API keys:
   ```env
   VITE_OPENWEATHER_API_KEY=your_openweather_key
   VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
   VITE_GEMINI_API_KEY=your_gemini_api_key
   ```
   *Note: If API keys are omitted, the application will gracefully degrade and use built-in mock data for development purposes.*

## Installation & Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`.

## Production Build

To build the application for production:
```bash
npm run build
```
This will generate optimized static assets in the `dist/` directory.

## Deployment

This project is configured and ready to be deployed on platforms like **Vercel** or **Netlify**. 
Ensure that you configure the environment variables (`VITE_OPENWEATHER_API_KEY`, etc.) in your hosting provider's dashboard before deploying.

## Security Notes
The API keys for Unsplash, OpenWeather, and Gemini are currently stored in environment variables and are exposed to the client bundle via Vite's `import.meta.env`. For a true production deployment, it is strongly recommended to proxy these requests through a secure backend server to prevent exposing your API keys to the public.

## Known Limitations
- The destination catalog currently uses a local mocked dataset for the foundation. In a larger iteration, this would be connected to a full backend database.
