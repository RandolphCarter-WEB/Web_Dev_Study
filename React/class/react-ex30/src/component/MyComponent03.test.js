import { render, screen } from '@testing-library/react';
import MyComponent03 from './MyComponent03';

describe("[Render] test MyComponent03", () => {
    test("[Render] Second Tag Attribute", () => {
        render(<MyComponent03 />);

        const txtElement = screen.getByRole("heading", { level: 2 });
        expect(txtElement).toBeInTheDocument();
    });
});