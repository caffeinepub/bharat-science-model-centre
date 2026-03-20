import type { ExternalBlob } from "@/backend";
import { useActor } from "@/hooks/useActor";
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
