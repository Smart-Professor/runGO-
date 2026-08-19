import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — Aurora Admin",
  description: "Aurora administration dashboard",
};

const stats = [
  { label: "Total Users", value: "1,234", change: "+12%", changeType: "positive" },
  { label: "Active Sessions", value: "89", change: "+5%", changeType: "positive" },
  { label: "Revenue", value: "$48,290", change: "+18%", changeType: "positive" },
  { label: "Uptime", value: "99.99%", change: "0%", changeType: "neutral" },
];

const recentActivity = [
  { user: "Sarah Chen", action: "Signed up", time: "2 minutes ago" },
  { user: "Marcus Webb", action: "Upgraded to Pro", time: "15 minutes ago" },
  { user: "Priya Patel", action: "Created dashboard", time: "1 hour ago" },
  { user: "Alex Kim", action: "Connected data source", time: "2 hours ago" },
  { user: "Jordan Lee", action: "Invited team member", time: "3 hours ago" },
];

export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tx-foreground">Dashboard</h1>
        <p className="mt-1 text-sm tx-muted">Welcome back. Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-6">
            <div className="text-sm tx-muted">{stat.label}</div>
            <div className="mt-2 text-2xl font-semibold tx-foreground">{stat.value}</div>
            <div className={`mt-1 text-xs font-medium ${
              stat.changeType === "positive" ? "text-green-600" :
              stat.changeType === "negative" ? "text-red-600" : "tx-soft"
            }`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="p-6 border-b ln-line">
          <h2 className="text-lg font-semibold tx-foreground">Recent Activity</h2>
        </div>
        <div className="divide-y ln-line">
          {recentActivity.map((activity, i) => (
            <div key={i} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  {activity.user.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium tx-foreground">{activity.user}</div>
                  <div className="text-xs tx-soft">{activity.action}</div>
                </div>
              </div>
              <div className="text-xs tx-soft">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
