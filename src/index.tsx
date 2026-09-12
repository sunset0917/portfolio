import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import {Home} from "./screens/Home/Home"

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <Home />
    </StrictMode>,

);
