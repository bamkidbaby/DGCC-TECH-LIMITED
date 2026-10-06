import type { Metadata } from "next";
import DgccLanding from "@/components/dgcc-landing";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about DGCC Tech Limited, a technology company connecting people, businesses and schools to technology that works.",
};

export default function AboutPage() {
  return <DgccLanding key="about" page="about" />;
}
