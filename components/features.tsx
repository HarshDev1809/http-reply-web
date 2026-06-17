import * as React from "react"
import { 
  Box, 
  CheckCircle2, 
  Settings, 
  Zap, 
  FileJson, 
  Layers 
} from "lucide-react"
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"

const features = [
  {
    title: "Framework Agnostic",
    description: "Compatible with Express, Fastify, or custom frameworks via adapters.",
    icon: Layers,
  },
  {
    title: "Standardized Responses",
    description: "Ensures consistent response structure across your entire API.",
    icon: CheckCircle2,
  },
  {
    title: "Configurable Options",
    description: "Customize response fields, timestamps, logging, and more.",
    icon: Settings,
  },
  {
    title: "Static Methods",
    description: "Send responses quickly without instantiating the class.",
    icon: Zap,
  },
  {
    title: "TypeScript Support",
    description: "Fully typed with included TypeScript declarations for a better DX.",
    icon: FileJson,
  },
  {
    title: "ESM + CJS Support",
    description: "Native support for both ES6 modules and CommonJS without hacks.",
    icon: Box,
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Features</h2>
          <p className="mt-4 text-muted-foreground">Everything you need for clean API responses.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-transparent hover:bg-muted/50 transition-colors">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
