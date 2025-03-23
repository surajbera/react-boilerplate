import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>
      <p className="mb-4">This is a sample home page for your React application with routing.</p>
      <Button>Get Started</Button>
    </div>
  );
}
