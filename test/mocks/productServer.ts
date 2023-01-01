import { setupServer } from "msw/node";
import { handlers } from "./productHandler";

export const server = setupServer(...handlers);
