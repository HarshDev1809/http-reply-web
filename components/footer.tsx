import * as React from "react"

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto max-w-3xl px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} http-reply. MIT License.</p>
        <div className="flex gap-6">
          <a href="https://github.com/shivam-sharma7/http-reply" target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href="https://github.com/shivam-sharma7/http-reply/issues" target="_blank" rel="noreferrer" className="hover:text-foreground">
            Issues
          </a>
          <a href="mailto:dev182000@gmail.com" className="hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
