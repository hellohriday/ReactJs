import React from "react";
import { createContext, useContext } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = TodoContext.Provider;

export default function useTodoContext() {
  return useContext(TodoContext);
}
