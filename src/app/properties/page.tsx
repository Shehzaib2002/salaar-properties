import type { Metadata } from "next";
import { PropertiesView } from "@/components/properties-view";

export const metadata: Metadata = {
  title: "Exclusive Properties",
  description: "Browse verified luxury apartments, penthouses, villas, and commercial real estate across DHA, Gulberg, and Bahria Town with Salaar Properties.",
  keywords: [
    "Lahore properties for sale",
    "Lahore properties for rent",
    "DHA Lahore villas",
    "Gulberg luxury apartments",
    "Bahria Town homes",
    "Salaar Properties inventory"
  ],
};

export default function PropertiesPage() {
  return <PropertiesView />;
}
