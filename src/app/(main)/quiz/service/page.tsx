import type { Metadata } from "next";
import ServiceQuiz from "@/components/ServiceQuiz";

export const metadata: Metadata = {
  title: "Which Service Is Right for You? | Free Quiz",
  description:
    "Take our free 60-second quiz to find out which impact window or door service is right for your South Florida home. Get a personalized recommendation instantly.",
  alternates: {
    canonical: "/quiz/service/",
  },
  openGraph: {
    title: "Which Service Is Right for You? | Florida Impact Windows & Doors",
    description:
      "Answer 6 quick questions and get a personalized recommendation for your home's impact window and door needs.",
    url: "https://floridaimpactwindowsdoors.com/quiz/service/",
  },
};

export default function ServiceQuizPage() {
  return <ServiceQuiz />;
}
