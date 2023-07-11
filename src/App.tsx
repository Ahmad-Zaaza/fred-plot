import { useState } from "react";
import { Text } from "./ui/Text";
import { Button } from "./ui/Button";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/router";
import { queryClient } from "./lib/configs/queryClient";
import { router } from "./lib/appRouter";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
