import type { Metadata } from "next";
import DgccLanding from "@/components/dgcc-landing";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DGCC Tech Limited for technology services, support, training, printing, and business enquiries.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const serviceOptions = [
    "Website design and development",
    "Computer engineering and IT support",
    "Graphic designing and branding",
    "Cyber security",
    "General printing and merchandising",
    "Tech training",
    "Desktop and laptop sales",
    "Computer accessories sales",
    "Online registrations",
    "IT consultancy",
    "Something else",
  ];
  const initialService =
    serviceOptions.find((option) => option === service) ??
    "Website design and development";

  return (
    <DgccLanding
      key={`contact:${initialService}`}
      page="contact"
      initialService={initialService}
    />
  );
}
