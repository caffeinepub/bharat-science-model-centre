import RootLayout from "@/components/RootLayout";
import { Toaster } from "@/components/ui/sonner";
import AdminPage from "@/pages/AdminPage";
import CataloguePage from "@/pages/CataloguePage";
import EnquiryPage from "@/pages/EnquiryPage";
import HomePage from "@/pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: RootLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const catalogueRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/catalogue",
  component: CataloguePage,
});

const enquiryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/enquiry",
  component: EnquiryPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  catalogueRoute,
  enquiryRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}
