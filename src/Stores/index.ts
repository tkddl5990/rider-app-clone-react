import create from 'zustand';

interface stateInterface {
  isDark: boolean;
  setIsDark: () => void;
}

export const useStore = create<stateInterface>((set) => ({
  isDark: false,
  setIsDark: () => set((state) => ({ isDark: !state.isDark })),
}));
