import {render, screen} from '@testing-library/react';
import MyComponent from './MyComponent02';

describe("[Render] test MyComponent02", () => {
    test("[Render] If under 19 Cannot Click Button && Text style is red", () => {
        render(<MyComponent age={10}/>);

        const btnElement = screen.getByRole('button');
        const txtElement = screen.getByRole('heading');

        expect(btnElement).toBeInTheDocument();
        expect(txtElement).toBeInTheDocument();

        expect(btnElement).toBeDisabled();
        expect(txtElement).toHaveStyle({color:'red'});
    });

    test("[Render] If over 19 Can Click Button && Text style is blue", () => {
        render(<MyComponent age={20}/>);

        const btnElement = screen.getByRole('button');
        const txtElement = screen.getByRole('heading');

        expect(btnElement).toBeInTheDocument();
        expect(txtElement).toBeInTheDocument();

        expect(btnElement).toBeEnabled();
        expect(txtElement).toHaveStyle({color: 'blue'});
    });
})