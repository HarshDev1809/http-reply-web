import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Usage } from "@/components/usage"
import { MethodsTable } from "@/components/methods-table"
import { ConfigTable } from "@/components/config-table"
import { CustomAdapter } from "@/components/custom-adapter"
import { ResponseOutput } from "@/components/response-output"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-4">
          <Hero />
          <Separator />
          <Features />
          <Separator />
          <Usage />
          <Separator />
          <MethodsTable />
          <Separator />
          <ConfigTable />
          <Separator />
          <CustomAdapter />
          <Separator />
          <ResponseOutput />
        </div>
      </main>
      <Footer />
    </div>
  )
}
