import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactForm } from '../backend';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; company: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContactForm(data.name, data.email, data.company, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactForms'] });
    }
  });
}

export function useGetAllContactForms() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactForm[]>({
    queryKey: ['contactForms'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactForms();
    },
    enabled: !!actor && !isFetching
  });
}

export function useCountContactForms() {
  const { actor, isFetching } = useActor();

  return useQuery<bigint>({
    queryKey: ['contactFormsCount'],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.countContactForms();
    },
    enabled: !!actor && !isFetching
  });
}
