import type { Metadata } from "next";
import DgccLanding from "@/components/dgcc-landing";

export const metadata: Metadata = {
  title: "Our services",
  description:
    "Explore DGCC Tech services including website development, IT support, branding, cyber security, printing and tech training.",
};

export default function ServicesPage() {
  return <DgccLanding key="services" page="services" />;
}
