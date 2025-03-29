import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">My App</h1>
        <div className="flex items-center gap-4">
          <nav className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/sample">Sample</Link>
            </Button>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
