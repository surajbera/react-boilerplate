import { Outlet } from "react-router-dom";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-background border-t py-4">
        <div className="flex-1 container mx-auto px-4 py-8">
          © {new Date().getFullYear()} React Boilerplate.
        </div>
      </footer>
    </div>
  );
}
