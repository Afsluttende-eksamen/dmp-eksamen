import { create } from 'zustand';

export const useUIStore = create((set) => ({
  isMenuOpen: false,
  isModalOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));
