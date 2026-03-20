import RootLayout from "@/components/RootLayout";
import { Toaster } from "@/components/ui/sonner";
import AboutPage from "@/pages/AboutPage";
import AdminPage from "@/pages/AdminPage";
import CataloguePage from "@/pages/CataloguePage";
import DistributorPage from "@/pages/DistributorPage";
import EnquiryPage from "@/pages/EnquiryPage";
import HomePage from "@/pages/HomePage";
import PrintedChartsPage from "@/pages/PrintedChartsPage";
import SchoolLabPackagePage from "@/pages/SchoolLabPackagePage";
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

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
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

const distributorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/distributor",
  component: DistributorPage,
});

const printedChartsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/printed-charts",
  component: PrintedChartsPage,
});

const schoolLabPackageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/school-lab-package",
  component: SchoolLabPackagePage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  catalogueRoute,
  enquiryRoute,
  adminRoute,
  distributorRoute,
  printedChartsRoute,
  schoolLabPackageRoute,
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
