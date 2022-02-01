import { useState } from "react";
import Button from "@mui/material/Button";
import { Test } from "./components/Test";
import { ThemeProvider } from "./ThemeProvider";
import "./App.css";

export function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <p>Hello Vite + React!</p>
          <p>
            <Button data-testid="btn" variant="outlined" onClick={() => setCount(_ => _ + 1)}>
              count is: {count}
            </Button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <Test />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
