import { render, screen } from "@testing-library/react";
import App from "./App";

test("[SCREEN] Render App Content", () => {
    render(<App />);

    const h1El = screen.getByText(/Hello/i);
    expect(h1El).toBeInTheDocument();
});