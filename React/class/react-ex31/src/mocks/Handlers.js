import {rest} from "msw";

export const handlers = [
    rest.get("https://jsonplaceholder.typicode.com/todos",
        (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([
            {
                id : 1,
                title : "Doc Management",
                completed : true
            },
            {

                id : 1,
                title : "Leftover Management",
                completed : true
            },
            {
                id : 1,
                title : "file Management",
                completed : false
            },
        ]))
    })
];