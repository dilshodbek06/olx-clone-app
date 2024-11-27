import { create } from "zustand";

interface AdState {
  image: string;
  setImage: (url: string) => void;
  reset: () => void;
}

const useProfileStore = create<AdState>((set) => ({
  image: "",
  setImage: (url) => set(() => ({ image: url })),
  reset: () =>
    set(() => ({
      image: "",
    })),
}));

export default useProfileStore;
