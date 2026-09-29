import { createContext } from "react"

export const ThemeContext = createContext("light")

interface PageContextType {
  page: string
  setPage: React.Dispatch<React.SetStateAction<string>>
  changePage: (page: string, hideSidebar?: boolean) => void
}

export const PageContext = createContext<PageContextType | undefined>(undefined)

export const LanguageContext = createContext("en")
