import { render, screen } from "@testing-library/react";
import { Compo01 } from "./Compo01";
import { server } from "./mocks/server";
import { rest } from "msw";

describe("Compo01 Test", () => {
    test("Compo01 isHave Todos Text", () => {
        render(<Compo01 />);

        const h1El = screen.getByText(/Todo/);
        expect(h1El).toBeInTheDocument();
    });

    test("Compo01 isHave 3 items in list", async () => {
        render(<Compo01 />);
        const list = await screen.findAllByRole("listitem");
        expect(list).toHaveLength(3);
    });

    test("Compo01 isError errMsg", async () => {
        server.use(
            rest.get("https://jsonplaceholder.typicode.com/todos",
                (req, res, ctx) => {
                return res(ctx.status(500));
                }
            )
        );

        render(<Compo01 />);
        const err = await screen.findByText(/[SYSTEM] ERROR to axios get data./);
        expect(err).toBeInTheDocument();
    })
});