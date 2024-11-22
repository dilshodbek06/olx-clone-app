import { create } from "zustand";

interface AdState {
  title: string;
  category: string;
  images: string[];
  description: string;
  location: string;
  personName: string;
  email: string;
  phoneNumber: string;
  setTitle: (title: string) => void;
  setCategory: (category: string) => void;
  setImages: (images: string[]) => void;
  setDescription: (description: string) => void;
  setLocation: (location: string) => void;
  setPersonName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phone: string) => void;
  reset: () => void;
}

const useAdStore = create<AdState>((set) => ({
  title: "",
  category: "",
  images: [],
  description: "",
  location: "",
  personName: "",
  email: "",
  phoneNumber: "",

  setTitle: (title) => set(() => ({ title: title })),
  setCategory: (category) => set(() => ({ category: category })),
  setImages: (images) => set(() => ({ images: images })),
  setDescription: (desc) => set(() => ({ description: desc })),
  setLocation: (location) => set(() => ({ location: location })),
  setPersonName: (name) => set(() => ({ personName: name })),
  setEmail: (email) => set(() => ({ email: email })),
  setPhoneNumber: (phone) => set(() => ({ phoneNumber: phone })),
  reset: () =>
    set(() => ({
      title: "",
      category: "",
      images: [],
      description: "",
      location: "",
      personName: "",
      email: "",
      phoneNumber: "",
    })),
}));

export default useAdStore;
