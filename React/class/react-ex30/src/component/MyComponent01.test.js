import {render, screen} from '@testing-library/react';
import MyComponent from './MyComponent01';


describe("[Render] test My Component", () => {
    test("[Render] If not Login", () => {
        render(<MyComponent />);
    
        const txtElement = screen.getByText(/Plz Login/i);
        const btnElement = screen.getByRole("button");

        expect(txtElement).toBeInTheDocument();
        expect(btnElement).toBeInTheDocument();
        expect(btnElement).toHaveTextContent("Login");
    });

    test("[Render] If Login", () => {
        render(<MyComponent user={{name : "OST"}} />);

        const txtElement = screen.getByText(/Hello, OST/i);
        expect(txtElement).toBeInTheDocument();
    });

    test("[Render] Login Data exception", () => {
        render(<MyComponent use="Park"/>);

        const txtElement = screen.getByText(/Plz Login/i);
        expect(txtElement).toBeInTheDocument();
    });
});