import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface ErrorObject {
  error: string;
}

export interface UserState {
  name: string;
  id: number;
  email: string;
  accessToken: string | undefined | null;
}

export interface UserStore {
  user: UserState | null;
  updateUser: (user: UserState) => void;
  removeUser: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      updateUser: (user) => set(() => ({ user })),
      removeUser: () => set(() => ({ user: null })),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
