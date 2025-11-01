import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getItem, setItem, deleteItemAsync } from "expo-secure-store";

export type Contact = {
  id: string;
  displayName: string;
  phone: string;
  icon?: string;
  bio?: string;
};

export type ContactStore = {
  contacts: Contact[];
  selectedContact: Contact | null;
  addContact: (contact: Contact) => void;
  setSelectedContact: (id: string) => void;
};

const useContactStore = create(
  persist<ContactStore>(
    (set) => ({
      contacts: [],
      selectedContact: null,
      setSelectedContact: (id) =>
        set((state) => {
          const contact = state.contacts.find((c) => c.id === id);
          return { ...state, selectedContact: contact };
        }),
      addContact: (contact) =>
        set((state) => {
          return { ...state, contacts: [...state.contacts, contact] };
        }),
    }),
    {
      name: "contact-store",
      storage: createJSONStorage(() => ({
        getItem,
        setItem,
        removeItem: deleteItemAsync,
      })),
    }
  )
);

export default useContactStore;
