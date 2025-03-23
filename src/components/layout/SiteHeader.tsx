import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">My App</h1>
        <nav className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/sample">Sample</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
