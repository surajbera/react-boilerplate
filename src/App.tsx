import { Router } from "@/routes";
import { ThemeProvider } from "@/contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;