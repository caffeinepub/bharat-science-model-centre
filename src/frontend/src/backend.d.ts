import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export type Time = bigint;
export interface Enquiry {
    id: bigint;
    name: string;
    submittedAt: Time;
    email: string;
    message: string;
    organization: string;
    phone: string;
    attachment?: ExternalBlob;
}
export interface Catalogue {
    id: bigint;
    title: string;
    file: ExternalBlob;
    description: string;
    uploadDate: Time;
}
export interface ProjectPDF {
    id: bigint;
    title: string;
    subject: string;
    description: string;
    price: bigint;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteCatalogue(id: bigint): Promise<void>;
    deleteEnquiry(id: bigint): Promise<void>;
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getCallerUserRole(): Promise<UserRole>;
    isCallerAdmin(): Promise<boolean>;
    listCatalogues(): Promise<Array<Catalogue>>;
    submitEnquiry(name: string, email: string, phone: string, organization: string, message: string, attachment: ExternalBlob | null): Promise<bigint>;
    uploadCatalogue(title: string, description: string, file: ExternalBlob): Promise<bigint>;
    // Project PDF methods
    addProjectPDF(title: string, subject: string, description: string, downloadLink: string): Promise<bigint>;
    deleteProjectPDF(id: bigint): Promise<void>;
    listProjectsBySubject(subject: string): Promise<Array<{id: bigint; title: string; subject: string; description: string; price: bigint}>>;
    listAllProjects(): Promise<Array<{id: bigint; title: string; subject: string; description: string; price: bigint}>>;
    getProjectDownloadLink(projectId: bigint): Promise<{__kind__: "Some", value: string} | {__kind__: "None"}>;
    createProjectCheckoutSession(projectId: bigint, successUrl: string, cancelUrl: string): Promise<string>;
    // Stripe config methods
    isStripeConfigured(): Promise<boolean>;
    setStripeConfiguration(secretKey: string, allowedCountries: string[]): Promise<void>;
}
