export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-12 px-4">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-serif text-lg text-background">
          Mahira Holdings
        </p>
        <p className="mt-2 text-sm text-background/70">
          Long-term business building over capital deployment.
        </p>
        <p className="mt-6 text-xs text-background/50">
          © {new Date().getFullYear()} Mahira Holdings. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
