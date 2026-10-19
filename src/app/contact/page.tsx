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
    "Website Design and Development",
    "Cyber security",
    "Computer Engineering and IT support",
    "Branding and Graphic designing",
    "General Printing",
    "Tech training",
    "Desktop and Laptop Sales",
    "Computer Accessories",
    "IT consultancy",
    "Online Registrations",
    "Something else",
  ];
  const initialService =
    serviceOptions.find((option) => option === service) ??
    "Website Design and Development";

  return (
    <DgccLanding
      key={`contact:${initialService}`}
      page="contact"
      initialService={initialService}
    />
  );
}
