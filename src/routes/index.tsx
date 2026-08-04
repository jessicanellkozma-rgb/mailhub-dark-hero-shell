import { createFileRoute } from "@tanstack/react-router";
import HeroShell from "@/components/HeroShell";
import dashboardWebp from "@/assets/hero-dashboard.webp";
import dashboardJpg from "@/assets/hero-dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mailhub — Shipping Software for Ecommerce" },
      {
        name: "description",
        content:
          "AI-powered rate comparison, label printing and tracking, without the subscription. Integrate via the Mailhub Shipping API, MCP-ready for AI agents.",
      },
      { property: "og:title", content: "Mailhub — Shipping Software for Ecommerce" },
      {
        property: "og:description",
        content:
          "Compare carrier rates, print labels and track shipments. No subscription. MCP-ready Shipping API for AI agents.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-carbon">
      <HeroShell
        h1="Shipping Software for Ecommerce"
        subline="AI-powered rate comparison, label printing and tracking, without the subscription. Or integrate via our Shipping API, MCP-ready for AI agents."
        primaryCta={{ label: "Start Shipping Free", action: () => {} }}
        secondaryCta={{ label: "How It Works", action: () => {} }}
        visualType="screenshot"
        visualContent={{
          src: dashboardWebp,
          fallbackSrc: dashboardJpg,
          alt: "Mailhub dashboard showing an order table with live carrier rates",
          width: 1280,
          height: 960,
        }}
      />
    </main>
  );
}
