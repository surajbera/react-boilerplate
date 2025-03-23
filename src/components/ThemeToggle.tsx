import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

interface ThemeToggleProps extends ButtonProps {}

export function ThemeToggle({ className, ...props }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={cn("rounded-full", className)}
      {...props}
    >
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
