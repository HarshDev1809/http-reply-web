import * as React from "react"
import { Badge } from "@/components/ui/badge"

const options = [
  { option: "includeTimestamp", type: "Boolean", default: "false", description: "Include a timestamp in the response." },
  { option: "includeCode", type: "Boolean", default: "true", description: "Include the status code in the response body." },
  { option: "includeMessage", type: "Boolean", default: "true", description: "Include the message in the response body." },
  { option: "includeError", type: "Boolean", default: "true", description: "Include error details in the response body." },
  { option: "includeMetaData", type: "Boolean", default: "true", description: "Include metadata in the response body." },
  { option: "enableLogging", type: "Boolean", default: "true", description: "Enable error logging for invalid configurations." },
  { option: "stringify", type: "Boolean", default: "false", description: "Stringify the response body before sending." },
  { option: "customFields", type: "Object", default: "{}", description: "Additional fields to include in every response." },
  { option: "dateFormat", type: "String", default: "'unix'", description: "Format for timestamps ('iso' or 'unix')." },
  { option: "adapter", type: "Function", default: "null", description: "Custom adapter for non-Express/Fastify frameworks." },
]

export function ConfigTable() {
  return (
    <section id="config" className="py-16 md:py-24">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Configuration Options</h2>
          <p className="mt-4 text-muted-foreground">Customize HttpReply to fit your needs.</p>
        </div>
        <div className="relative w-full overflow-auto rounded-lg border">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b bg-muted/50">
              <tr className="border-b transition-colors hover:bg-muted/50">
                <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Option</th>
                <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Type</th>
                <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Default</th>
                <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Description</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {options.map((opt, index) => (
                <tr
                  key={opt.option}
                  className={`border-b transition-colors hover:bg-muted/30 ${
                    index % 2 === 0 ? "bg-transparent" : "bg-muted/20"
                  }`}
                >
                  <td className="p-4 align-middle">
                    <code className="font-mono font-semibold">{opt.option}</code>
                  </td>
                  <td className="p-4 align-middle text-muted-foreground">{opt.type}</td>
                  <td className="p-4 align-middle">
                    <Badge variant="secondary" className="font-mono text-[10px]">
                      {opt.default}
                    </Badge>
                  </td>
                  <td className="p-4 align-middle text-muted-foreground">{opt.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
