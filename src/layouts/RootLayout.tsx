import { Outlet, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
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
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      <footer className="bg-background border-t py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} React Boilerplate.
        </div>
      </footer>
    </div>
  );
}
