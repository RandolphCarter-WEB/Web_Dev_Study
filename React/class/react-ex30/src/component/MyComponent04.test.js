import { render, screen } from '@testing-library/react';
import MyComponent04 from './MyComponent04';

describe("[Render] test MyComponent04 Content", () => {
    test("[Render] label Content which textHTML is 'Name' have text input tag", () => {
        render(<MyComponent04 />);
        expect(screen.getByRole('textbox', {name: "Name"})).toBeInTheDocument();
    });
});