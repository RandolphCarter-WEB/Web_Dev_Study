import {handlers} from "./Handlers";
import {setupServer} from "msw/node";

export const server = setupServer(...handlers);