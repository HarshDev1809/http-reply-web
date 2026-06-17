import * as React from "react"
import { buttonVariants } from "@/components/ui/button"
import { CodeBlock } from "@/components/code-block"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Standardized HTTP responses for Node.js
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A lightweight, flexible utility to format and send consistent HTTP responses in Express, Fastify, or any Node.js framework.
          </p>
        </div>

        <div className="w-full max-w-sm">
          <CodeBlock 
            code="npm install http-reply" 
            language="bash" 
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#usage" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </a>
          <a
            href="https://github.com/shivam-sharma7/http-reply"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
