import * as React from "react"

const methods = [
  { name: "success", status: 200, description: "Successful request" },
  { name: "created", status: 201, description: "Resource created successfully" },
  { name: "accepted", status: 202, description: "Request accepted for processing" },
  { name: "noContent", status: 204, description: "No content to return" },
  { name: "badRequest", status: 400, description: "Invalid request" },
  { name: "unauthorized", status: 401, description: "Authentication required" },
  { name: "forbidden", status: 403, description: "Access denied" },
  { name: "notFound", status: 404, description: "Resource not found" },
  { name: "conflict", status: 409, description: "Resource conflict" },
  { name: "tooManyRequests", status: 429, description: "Rate limit exceeded" },
  { name: "error", status: 500, description: "Internal server error" },
  { name: "notImplemented", status: 501, description: "Feature not implemented" },
  { name: "serviceUnavailable", status: 503, description: "Service temporarily unavailable" },
  { name: "response", status: "Custom", description: "Generic response with custom status code" },
]

export function MethodsTable() {
  return (
    <section id="methods" className="py-16 md:py-24">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Supported Methods</h2>
          <p className="mt-4 text-muted-foreground">Built-in helpers for common HTTP status codes.</p>
        </div>
        <div className="relative w-full overflow-auto rounded-lg border">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b bg-muted/50">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Method</th>
                <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Status Code</th>
                <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Description</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {methods.map((method, index) => (
                <tr
                  key={method.name}
                  className={`border-b transition-colors hover:bg-muted/30 ${
                    index % 2 === 0 ? "bg-transparent" : "bg-muted/20"
                  }`}
                >
                  <td className="p-4 align-middle">
                    <code className="font-mono font-semibold text-primary">{method.name}</code>
                  </td>
                  <td className="p-4 align-middle font-mono">{method.status}</td>
                  <td className="p-4 align-middle text-muted-foreground">{method.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
