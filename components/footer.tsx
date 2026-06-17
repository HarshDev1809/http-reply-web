import { ExternalLink } from "lucide-react";
import Link from "next/link";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto max-w-3xl px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-mono tracking-tight">http-reply</h3>
            <p className="text-sm text-muted-foreground">
              A lightweight, flexible Node.js utility for standardizing HTTP responses across your API.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/HarshDev1809/http-reply" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:underline text-foreground/80"
                >
                  Source Code <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link href="#features" className="hover:underline text-foreground/80">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#usage" className="hover:underline text-foreground/80">
                  Usage
                </Link>
              </li>
              <li>
                <Link href="#methods" className="hover:underline text-foreground/80">
                  Methods
                </Link>
              </li>
              <li>
                <Link href="#config" className="hover:underline text-foreground/80">
                  Configuration
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/HarshDev1809" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full bg-background border hover:bg-muted transition-colors"
                title="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/harshdev1809/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full bg-background border hover:bg-muted transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} http-reply. Released under the{" "}
            <a 
              href="https://github.com/HarshDev1809/http-reply/blob/main/LICENSE" 
              target="_blank" 
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              MIT License
            </a>. Built by Harsh Dev.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
