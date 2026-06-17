import * as React from "react"
import { CodeBlock } from "@/components/code-block"

const outputs = {
  default: `{
  "message": "User fetched",
  "data": { "id": 1, "name": "John" },
  "metaData": { "total": 1 },
  "code": 200
}`,
  timestamp: `{
  "message": "User fetched",
  "data": { "id": 1, "name": "John" },
  "metaData": { "total": 1 },
  "code": 200,
  "timestamp": "2025-06-13T17:25:00.000Z"
}`
}

export function ResponseOutput() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Response Shape</h2>
          <p className="mt-4 text-muted-foreground">Standardized JSON output structure.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Default Output</span>
            <CodeBlock code={outputs.default} language="json" />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">With Timestamp</span>
            <CodeBlock code={outputs.timestamp} language="json" />
          </div>
        </div>
      </div>
    </section>
  )
}
