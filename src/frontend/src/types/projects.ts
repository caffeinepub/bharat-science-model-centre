import type { backendInterface } from "@/backend";

export interface ProjectRecord {
  id: bigint;
  title: string;
  subject: string;
  description: string;
  price: bigint;
}

export interface ExtendedBackend extends backendInterface {
  addProjectPDF(
    title: string,
    subject: string,
    description: string,
    downloadLink: string,
  ): Promise<bigint>;
  deleteProjectPDF(id: bigint): Promise<void>;
  listProjectsBySubject(subject: string): Promise<ProjectRecord[]>;
  listAllProjects(): Promise<ProjectRecord[]>;
  getProjectDownloadLink(
    projectId: bigint,
  ): Promise<{ __kind__: "Some"; value: string } | { __kind__: "None" }>;
  createProjectCheckoutSession(
    projectId: bigint,
    successUrl: string,
    cancelUrl: string,
  ): Promise<string>;
  isStripeConfigured(): Promise<boolean>;
  setStripeConfiguration(
    secretKey: string,
    allowedCountries: string[],
  ): Promise<void>;
}
