import { useContext, createContext, useState } from "react"

const Context = createContext()

const User = {
  FirstName: "",
  LastName: "",
  Email: "",
  Password: "",
  ID: "",
  School: "",
}

export function StateProvider({ children }) {
  const [state, setState] = useState({ user: User, token: "" })
  return (
    <Context.Provider value={[state, setState]}>{ children }</Context.Provider>
  )
}

export function useStateProvider() {
  return useContext(Context)
}