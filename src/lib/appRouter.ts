import Home from "@/pages/home/Home";
import { RootRoute, Route, Router } from "@tanstack/router";

export const rootRoute = new RootRoute();

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

export const routeTree = rootRoute.addChildren([indexRoute]);

export const router = new Router({ routeTree });

declare module "@tanstack/router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}
