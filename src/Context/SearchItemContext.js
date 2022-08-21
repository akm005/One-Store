import { createContext } from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children, value }) {
  return (
    <ShoppingCartContext.Provider
      value={{
        ...value,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
