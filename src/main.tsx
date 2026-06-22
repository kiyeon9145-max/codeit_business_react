import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GreetingComponent } from "./components/greeting";
import { MemoScreen } from "./screens/memo-screen";
import CounterScreen from "./screens/counter-screen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterScreen></CounterScreen>
  </StrictMode>,
);
