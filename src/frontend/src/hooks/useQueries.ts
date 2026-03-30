import type { ExternalBlob } from "@/backend";
import { useActor } from "@/hooks/useActor";
import type { ExtendedBackend } from "@/types/projects";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useListCatalogues() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["catalogues"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listCatalogues();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUploadCatalogue() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      title,
      description,
      file,
    }: {
      title: string;
      description: string;
      file: ExternalBlob;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.uploadCatalogue(title, description, file);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["catalogues"] }),
  });
}

export function useDeleteCatalogue() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.deleteCatalogue(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["catalogues"] }),
  });
}

export function useGetAllEnquiries() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["enquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllEnquiries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitEnquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      organization: string;
      message: string;
      attachment: ExternalBlob | null;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitEnquiry(
        data.name,
        data.email,
        data.phone,
        data.organization,
        data.message,
        data.attachment,
      );
    },
  });
}

export function useDeleteEnquiry() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.deleteEnquiry(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["enquiries"] }),
  });
}

export function useIsAdmin() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}

// Project PDF hooks
export function useListProjectsBySubject(subject: string) {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["projects", subject],
    queryFn: async () => {
      if (!actor) return [];
      return (actor as unknown as ExtendedBackend).listProjectsBySubject(
        subject,
      );
    },
    enabled: !!actor && !isFetching && !!subject,
  });
}

export function useListAllProjects() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["projects", "all"],
    queryFn: async () => {
      if (!actor) return [];
      return (actor as unknown as ExtendedBackend).listAllProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddProjectPDF() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      title: string;
      subject: string;
      description: string;
      downloadLink: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return (actor as unknown as ExtendedBackend).addProjectPDF(
        data.title,
        data.subject,
        data.description,
        data.downloadLink,
      );
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  });
}

export function useDeleteProjectPDF() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      return (actor as unknown as ExtendedBackend).deleteProjectPDF(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  });
}

export function useGetProjectDownloadLink() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (projectId: bigint) => {
      if (!actor) throw new Error("Not connected");
      return (actor as unknown as ExtendedBackend).getProjectDownloadLink(
        projectId,
      );
    },
  });
}

export function useCreateProjectCheckoutSession() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      projectId: bigint;
      successUrl: string;
      cancelUrl: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return (actor as unknown as ExtendedBackend).createProjectCheckoutSession(
        data.projectId,
        data.successUrl,
        data.cancelUrl,
      );
    },
  });
}

export function useIsStripeConfigured() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["stripeConfigured"],
    queryFn: async () => {
      if (!actor) return false;
      return (actor as unknown as ExtendedBackend).isStripeConfigured();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSetStripeConfiguration() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      secretKey: string;
      allowedCountries: string[];
    }) => {
      if (!actor) throw new Error("Not connected");
      return (actor as unknown as ExtendedBackend).setStripeConfiguration(
        data.secretKey,
        data.allowedCountries,
      );
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["stripeConfigured"] }),
  });
}
