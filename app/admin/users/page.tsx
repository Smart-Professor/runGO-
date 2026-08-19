"use client"

import { useEffect, useState } from "react"

interface User {
  id: string
  email: string
  created_at: string
  email_confirmed_at: string | null
  last_sign_in_at: string | null
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/admin/users")
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch users")
      }

      setUsers(data.users)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch users")
    } finally {
      setLoading(false)
    }
  }

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold tx-foreground">Users</h1>
          <p className="mt-1 text-sm tx-muted">Manage your users and their roles</p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users by email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2.5 rounded-lg border ln-line bg-card text-sm tx-foreground placeholder:tx-soft focus:outline-none focus:border-[#0a0a0a]"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="card p-8 text-center">
          <div className="tx-muted">Loading users...</div>
        </div>
      ) : (
        <>
          {/* Table */}
          <div className="card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b ln-line bg-soft">
                  <th className="text-left px-6 py-3 text-xs font-medium tx-soft uppercase tracking-wider">User</th>
                  <th className="text-left px-6 py-3 text-xs font-medium tx-soft uppercase tracking-wider">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-medium tx-soft uppercase tracking-wider">Joined</th>
                  <th className="text-left px-6 py-3 text-xs font-medium tx-soft uppercase tracking-wider">Last Sign In</th>
                </tr>
              </thead>
              <tbody className="divide-y ln-line">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center tx-muted">
                      {searchQuery ? "No users found matching your search" : "No users registered yet"}
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-soft transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            {user.email.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="text-sm font-medium tx-foreground">{user.email}</div>
                            <div className="text-xs tx-soft truncate max-w-[200px]">{user.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-2 text-sm">
                          <span className={`w-2 h-2 rounded-full ${
                            user.email_confirmed_at ? "bg-green-500" : "bg-yellow-500"
                          }`} />
                          <span className="tx-muted">
                            {user.email_confirmed_at ? "Confirmed" : "Pending"}
                          </span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm tx-muted">{formatDate(user.created_at)}</td>
                      <td className="px-6 py-4 text-sm tx-muted">
                        {user.last_sign_in_at ? formatDate(user.last_sign_in_at) : "Never"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Info */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm tx-muted">
              Showing {filteredUsers.length} of {users.length} users
            </div>
          </div>
        </>
      )}
    </div>
  )
}
