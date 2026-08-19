import type { Metadata } from "next";
import SettingsPageClient from "./SettingsPageClient";

export const metadata: Metadata = {
  title: "Settings — Aurora Admin",
  description: "Manage your Aurora settings",
};

export default function SettingsPage() {
  return <SettingsPageClient />;
}
