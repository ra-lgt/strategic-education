import { useMutation } from "@tanstack/react-query";
import { api, type InsertContactRequest } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateContactRequest() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      // Manual validation since we're using raw fetch in mutation for simplicity here,
      // but ideally use the schema to validate before sending.
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Invalid form data");
        }
        throw new Error("Failed to send message");
      }
      
      return api.contact.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We'll be in touch shortly to schedule your conversation.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
