import type { Metadata } from "next";
import TroubleshootingWizard from "@/components/TroubleshootingWizard";

export const metadata: Metadata = {
  title: "What\u2019s Wrong With My Window or Door? | Free Diagnostic Tool",
  description:
    "Use our free diagnostic wizard to identify what\u2019s wrong with your window or door. Get an instant diagnosis with recommended repairs or replacements for your South Florida home.",
  alternates: {
    canonical: "/quiz/troubleshooting/",
  },
  openGraph: {
    title:
      "Window & Door Diagnostic Tool | Florida Impact Windows & Doors",
    description:
      "Answer 4 quick questions to diagnose your window or door issue and get a personalized repair-or-replace recommendation.",
    url: "https://floridaimpactwindowsdoors.com/quiz/troubleshooting/",
  },
};

export default function TroubleshootingPage() {
  return <TroubleshootingWizard />;
}
