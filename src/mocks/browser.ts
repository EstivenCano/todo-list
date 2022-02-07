import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const startMockServiceWorker = () => {
  const worker = setupWorker(...handlers);
  worker.start();

  return Promise.resolve();
};
