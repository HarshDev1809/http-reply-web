import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

const examples = {
  express: `import { HttpReply } from 'http-reply';
import express from 'express';

const app = express();

app.get('/example', (req, res) => {
  HttpReply.success(res, {
    message: 'Operation successful',
    data: { user: 'John Doe' },
    metaData: { requestId: '12345' },
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));`,
  config: `import { HttpReply } from 'http-reply';

const reply = new HttpReply({
  includeTimestamp: true,
  dateFormat: 'iso',
  enableLogging: true,
  customFields: { apiVersion: '1.0.0' },
});

// Use it in your routes
app.get('/example', (req, res) => {
  reply.success(res, {
    message: 'Custom response',
    data: { id: 1 },
  });
});`,
  static: `import { HttpReply } from 'http-reply';

// Send a 201 Created response
HttpReply.created(res, {
  message: 'User created',
  data: { id: 123, name: 'Jane Doe' },
});

// Send a 404 Not Found response
HttpReply.notFound(res, {
  message: 'Resource not found',
  error: 'Invalid ID',
});`
}

export function Usage() {
  return (
    <section id="usage" className="py-16 md:py-24">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Usage</h2>
          <p className="mt-4 text-muted-foreground">Quick Start with common patterns.</p>
        </div>
        <Tabs defaultValue="express" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="express">Express</TabsTrigger>
            <TabsTrigger value="config">Centralized Config</TabsTrigger>
            <TabsTrigger value="static">Static Methods</TabsTrigger>
          </TabsList>
          <TabsContent value="express" className="mt-4">
            <CodeBlock code={examples.express} language="javascript" />
          </TabsContent>
          <TabsContent value="config" className="mt-4">
            <CodeBlock code={examples.config} language="javascript" />
          </TabsContent>
          <TabsContent value="static" className="mt-4">
            <CodeBlock code={examples.static} language="javascript" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
