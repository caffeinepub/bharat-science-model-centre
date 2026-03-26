import RootLayout from "@/components/RootLayout";
import { Toaster } from "@/components/ui/sonner";
import AboutPage from "@/pages/AboutPage";
import AdminPage from "@/pages/AdminPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import CataloguePage from "@/pages/CataloguePage";
import DissertationThesisPage from "@/pages/DissertationThesisPage";
import DistributorPage from "@/pages/DistributorPage";
import EngineeringLabPage from "@/pages/EngineeringLabPage";
import EnquiryPage from "@/pages/EnquiryPage";
import HandwrittenPracticalFilesPage from "@/pages/HandwrittenPracticalFilesPage";
import HandwrittenProjectsPage from "@/pages/HandwrittenProjectsPage";
import HomePage from "@/pages/HomePage";
import IGNOUAssignmentsPage from "@/pages/IGNOUAssignmentsPage";
import PortraitsPage from "@/pages/PortraitsPage";
import PrintedChartsPage from "@/pages/PrintedChartsPage";
import SafetyEquipmentPage from "@/pages/SafetyEquipmentPage";
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

const engineeringLabRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/engineering-lab",
  component: EngineeringLabPage,
});

const safetyEquipmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/safety-equipment",
  component: SafetyEquipmentPage,
});

const portraitsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portraits",
  component: PortraitsPage,
});

const handwrittenProjectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/handwritten-projects",
  component: HandwrittenProjectsPage,
});

const handwrittenPracticalFilesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/handwritten-practical-files",
  component: HandwrittenPracticalFilesPage,
});

const dissertationThesisRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dissertation-thesis",
  component: DissertationThesisPage,
});

const ignoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ignou-assignments",
  component: IGNOUAssignmentsPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogPage,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
  component: BlogPostPage,
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
  engineeringLabRoute,
  safetyEquipmentRoute,
  portraitsRoute,
  handwrittenProjectsRoute,
  handwrittenPracticalFilesRoute,
  ignoRoute,
  dissertationThesisRoute,
  blogRoute,
  blogPostRoute,
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
