import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { AudienceSegment } from "@/lib/data/audiences";

export type BillingCycle = "monthly" | "annual";

export interface OnboardingState {
  name: string;
  email: string;
  segment: AudienceSegment | null;
  goals: string[];
  planId: string | null;
  billingCycle: BillingCycle;

  // setters
  setIdentity: (input: { name: string; email: string }) => void;
  setSegment: (segment: AudienceSegment) => void;
  toggleGoal: (id: string) => void;
  setPlan: (planId: string) => void;
  setBillingCycle: (cycle: BillingCycle) => void;
  reset: () => void;
}

const initialState = {
  name: "",
  email: "",
  segment: null,
  goals: [] as string[],
  planId: null,
  billingCycle: "annual" as BillingCycle,
};

export const useOnboarding = create<OnboardingState>()(
  persist(
    (set) => ({
      ...initialState,

      setIdentity: ({ name, email }) =>
        set({ name: name.trim(), email: email.trim().toLowerCase() }),

      setSegment: (segment) => set({ segment }),

      toggleGoal: (id) =>
        set((state) => ({
          goals: state.goals.includes(id)
            ? state.goals.filter((g) => g !== id)
            : [...state.goals, id],
        })),

      setPlan: (planId) => set({ planId }),

      setBillingCycle: (billingCycle) => set({ billingCycle }),

      reset: () => set({ ...initialState }),
    }),
    {
      name: "gm-onboarding",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    },
  ),
);
