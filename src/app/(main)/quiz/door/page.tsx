import type { Metadata } from "next";
import DoorQuiz from "@/components/DoorQuiz";

export const metadata: Metadata = {
  title: "Which Door Is Right for You? | Free Quiz",
  description:
    "Take our free 60-second quiz to find out which impact door is right for your South Florida home. Get a personalized recommendation for entry, French, sliding glass, patio, or storm doors.",
  alternates: {
    canonical: "/quiz/door/",
  },
  openGraph: {
    title: "Which Door Is Right for You? | Florida Impact Windows & Doors",
    description:
      "Answer 6 quick questions and get a personalized door recommendation for your home\u2019s hurricane protection, style, and budget needs.",
    url: "https://floridaimpactwindowsdoors.com/quiz/door/",
  },
};

export default function DoorQuizPage() {
  return <DoorQuiz />;
}
