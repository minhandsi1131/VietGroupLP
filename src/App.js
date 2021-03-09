import { Suspense } from "react";
import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div></div>}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
