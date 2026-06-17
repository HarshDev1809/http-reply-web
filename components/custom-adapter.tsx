import * as React from "react"
import { CodeBlock } from "@/components/code-block"

const adapterCode = `import { HttpReply } from 'http-reply';

const reply = new HttpReply({
  adapter: (res, statusCode, payload) => {
    res.setStatusCode(statusCode);
    res.setBody(payload);
    return res;
  },
});

reply.success(res, {
  message: 'Custom adapter response',
  data: { key: 'value' },
});`

export function CustomAdapter() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Custom Adapter</h2>
          <p className="mt-4 text-muted-foreground mx-auto max-w-2xl">
            For non-Express/Fastify frameworks, provide a custom adapter to bridge HttpReply with your server's response object.
          </p>
        </div>
        <CodeBlock code={adapterCode} />
      </div>
    </section>
  )
}
