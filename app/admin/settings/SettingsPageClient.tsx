"use client";

import { useState } from "react";

export default function SettingsPageClient() {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General" },
    { id: "security", label: "Security" },
    { id: "notifications", label: "Notifications" },
    { id: "billing", label: "Billing" },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tx-foreground">Settings</h1>
        <p className="mt-1 text-sm tx-muted">Manage your account and application settings</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 border-b ln-line">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition ${
              activeTab === tab.id
                ? "border-foreground tx-foreground"
                : "border-transparent tx-muted hover:tx-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* General Settings */}
      {activeTab === "general" && (
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold tx-foreground mb-4">Organization</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium tx-foreground mb-2">Organization Name</label>
                <input
                  type="text"
                  defaultValue="Aurora"
                  className="w-full max-w-md px-4 py-2.5 rounded-lg border ln-line bg-card text-sm tx-foreground focus:outline-none focus:border-[#0a0a0a]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium tx-foreground mb-2">Website</label>
                <input
                  type="url"
                  defaultValue="https://aurora.dev"
                  className="w-full max-w-md px-4 py-2.5 rounded-lg border ln-line bg-card text-sm tx-foreground focus:outline-none focus:border-[#0a0a0a]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium tx-foreground mb-2">Timezone</label>
                <select className="w-full max-w-md px-4 py-2.5 rounded-lg border ln-line bg-card text-sm tx-foreground focus:outline-none focus:border-[#0a0a0a]">
                  <option>UTC</option>
                  <option>Asia/Shanghai</option>
                  <option>America/New_York</option>
                  <option>Europe/London</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="btn-primary px-6 py-2.5 text-sm font-medium">
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* Security Settings */}
      {activeTab === "security" && (
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold tx-foreground mb-4">Authentication</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b ln-line">
                <div>
                  <div className="text-sm font-medium tx-foreground">Email & Password</div>
                  <div className="text-xs tx-soft">Allow users to sign in with email and password</div>
                </div>
                <div className="w-11 h-6 bg-foreground rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-background rounded-full transition" />
                </div>
              </div>
              <div className="flex items-center justify-between py-3 border-b ln-line">
                <div>
                  <div className="text-sm font-medium tx-foreground">Google Sign-in</div>
                  <div className="text-xs tx-soft">Allow users to sign in with Google</div>
                </div>
                <div className="w-11 h-6 bg-foreground rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-background rounded-full transition" />
                </div>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm font-medium tx-foreground">Two-Factor Authentication</div>
                  <div className="text-xs tx-soft">Require 2FA for all admin users</div>
                </div>
                <div className="w-11 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-background rounded-full transition" />
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-semibold tx-foreground mb-4">API Keys</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b ln-line">
                <div>
                  <div className="text-sm font-medium tx-foreground">Publishable Key</div>
                  <div className="text-xs font-mono tx-soft">pk_••••••••••••••••</div>
                </div>
                <button className="text-sm tx-muted hover:tx-foreground transition">Copy</button>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm font-medium tx-foreground">Secret Key</div>
                  <div className="text-xs font-mono tx-soft">sk_••••••••••••••••</div>
                </div>
                <button className="text-sm tx-muted hover:tx-foreground transition">Regenerate</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Settings */}
      {activeTab === "notifications" && (
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold tx-foreground mb-4">Email Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b ln-line">
                <div>
                  <div className="text-sm font-medium tx-foreground">New User Signups</div>
                  <div className="text-xs tx-soft">Get notified when a new user signs up</div>
                </div>
                <div className="w-11 h-6 bg-foreground rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-background rounded-full transition" />
                </div>
              </div>
              <div className="flex items-center justify-between py-3 border-b ln-line">
                <div>
                  <div className="text-sm font-medium tx-foreground">Weekly Reports</div>
                  <div className="text-xs tx-soft">Receive weekly analytics reports</div>
                </div>
                <div className="w-11 h-6 bg-foreground rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-background rounded-full transition" />
                </div>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm font-medium tx-foreground">Security Alerts</div>
                  <div className="text-xs tx-soft">Get notified about security events</div>
                </div>
                <div className="w-11 h-6 bg-foreground rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-background rounded-full transition" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Billing Settings */}
      {activeTab === "billing" && (
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold tx-foreground mb-4">Current Plan</h3>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-semibold tx-foreground">Pro</div>
                <div className="text-sm tx-muted">$49/month · Renews on Sep 1, 2026</div>
              </div>
              <button className="btn-outline px-5 py-2.5 text-sm font-medium">
                Manage Subscription
              </button>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-semibold tx-foreground mb-4">Payment Method</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 bg-soft rounded flex items-center justify-center">
                  <span className="text-xs font-bold tx-foreground">VISA</span>
                </div>
                <div>
                  <div className="text-sm font-medium tx-foreground">•••• •••• •••• 4242</div>
                  <div className="text-xs tx-soft">Expires 12/2027</div>
                </div>
              </div>
              <button className="text-sm tx-muted hover:tx-foreground transition">
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
