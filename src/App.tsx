import './App.css'
import { useState, createContext, useContext } from 'react'
import profilepicture from './assets/149122895.jpeg'
import { FolderGit2, Mail, Sun, Moon, BadgeInfo, Languages } from 'lucide-react'

import SwfitLogo from "./assets/Swift_logo_color.svg"
import JavaScriptLogo from "./assets/Unofficial_JavaScript_logo_2.svg.webp"
import TuxPenguin from "./assets/Tux.svg.webp"
import CPPLogo from "./assets/ISO_C++_Logo.svg.webp"

const ThemeContext = createContext("light")

interface PageContextType {
  page: string
  setPage: React.Dispatch<React.SetStateAction<string>>
}

const PageContext = createContext<PageContextType | undefined>(undefined)

const LanguageContext = createContext("en")

export default function App() {
  const initialtheme = new Date().getHours() < 19 && new Date().getHours() > 6 ? "light" : "dark"

  const [theme, setTheme] = useState(initialtheme)
  const [page, setPage] = useState("home")
  const [language, setLanguage] = useState("en")

  return (
    <ThemeContext.Provider value={theme}>
    <PageContext.Provider value={{ page, setPage }}>
    <LanguageContext.Provider value={language}>
    <div className={`main-container ${theme == "light" ? "main-container-light" : "main-container-dark"}`}>
      <nav className={`navigation-bar ${theme == "light" ? "navigation-bar-light" : "navigation-bar-dark"}`}>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} style={{backgroundImage: `url(${profilepicture})`, backgroundSize: "cover", width: "19px", height: "19px", cursor: "default"}} />
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("home")}>
          <p>{language == "en" ? "Home" : "Inicio"}</p>
        </div>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("about")}>
          <p>{language == "en" ? "About" : "Información"}</p>
        </div>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("projects")}>
          <p>{language == "en" ? "Projects" : "Proyectos"}</p>
        </div>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("contact")}>
          <p>{language == "en" ? "Contact" : "Contacto"}</p>
        </div>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("privacy")}>
          <p>{language == "en" ? "Privacy" : "Privacidad"}</p>
        </div>
        <div className="navigation-bar-theme-switcher" onClick={() => language == "en" ? setLanguage("es") : setLanguage("en")} style={{marginLeft: "auto", marginRight: "15px", marginTop: "8px", display: "flex", flexDirection: "row", alignItems: "center", cursor: "default"}}>
          <Languages />
          {language == "en" ? "ES" : "EN"}
        </div>
        <div className="navigation-bar-theme-switcher" onClick={() => theme == "light" ? setTheme("dark") : setTheme("light")} style={{marginRight: "10px", marginTop: "8px", cursor: "default"}}>
          {theme == "light" ? <Moon /> : <Sun />}
        </div>
      </nav>
      <main className="main-content">
        {page == "home" ? <Home /> : ""}
        {page == "about" ? <About /> : ""}
        {page == "projects" ? <Projects /> : ""}
        {page == "contact" ? <Contact /> : ""}
        {page == "privacy" ? <Privacy /> : ""}
      </main>
    </div>
    </LanguageContext.Provider>
    </PageContext.Provider>
    </ThemeContext.Provider>
  )
}

function Home() {
  const page = useContext(PageContext)
  const theme = useContext(ThemeContext)
  const language = useContext(LanguageContext)

  return (
    <>
      <div className="home-banner">
        <div className={`home-banner-items ${theme == "light" ? "home-banner-items-light" : "home-banner-items-dark"}`}>
          <img src={CPPLogo} alt="C++ Logo" />
          <img src={TuxPenguin} alt="Tux penguin" />
          <img src={SwfitLogo} alt="Swift logo" />
          <img src={JavaScriptLogo} alt="JavaScript logo" />
        </div>
        <h1 data-text={language == "en" ? "Hover me" : "Pasa el mouse aquí"}>BlackHoleMX</h1>
        <div className="home-banner-buttons">
          <a href="https://github.com/BlackHoleMX12892"><FolderGit2 /> <span>{language == "en" ? "My projects" : "Mis proyectos"}</span></a>
          <div onClick={() => page?.setPage("contact")}><Mail /> <span>{language == "en" ? "Contact" : "Contacto"}</span></div>
        </div>
      </div>
      <div className="home-main">
        <div className="home-section">
          <div className="home-card">
            <h1>{language == "en" ? "Who am I?" : "Sobre mí:"}</h1>
            {language == "en" ?
            <>
              <p style={{marginBottom: "10px"}}>Hi, I'm a Mexican hobbyist developer who is interested in way too many programming-related things (sometimes more than I can understand).</p>
              <p style={{marginBottom: "10px"}}>I can speak Spanish (native), English (proficiently), and a bit of German.</p>
              <p>I'm learning React by developing this website. I know C++, some JavaScript, Swift (enough to create an app), good HTML and good CSS.</p>
              <p style={{marginBottom: "10px"}}>I have experimented with basic C and very basic Rust.</p>
              <p>I like to eat Brisket and visiting the USA.</p>
            </> :
            <>
              <p style={{marginBottom: "10px"}}>Hola, soy un desarollador mexicano, me interesan muchas áreas aunque a veces esto dificulta mi aprendizaje.</p>
              <p style={{marginBottom: "10px"}}>Mis idiomas son: Español (nativo), Inglés (Fluido), Alemán (básico).</p>
              <p>Estoy aprendiendo React con este sitio, pero sé C++, JavaScript, Swift (lo suficiente para hacer apps), HTML y CSS.</p>
              <p style={{marginBottom: "10px"}}>He experimentado con otros lenguajes como C, Rust y Python.</p>
              <p>Me gusta visitar Estados Unidos.</p>
            </>}
            <div className="home-card-buttons">
              <div onClick={() => page?.setPage("about")}><BadgeInfo /> <span>{language == "en" ? "Read more" : "Leer más"}</span></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

function About() {
  return (
    <>
      About
      <Footer />
    </>
  )
}

function Projects() {
  return (
    <>
      Projects
      <Footer />
    </>
  )
}

function Contact() {
  return (
    <>
      Contact
      <Footer />
    </>
  )
}

function Privacy() {
  return (
    <>
      Privacy
      <Footer />
    </>
  )
}

function Footer() {
  const theme = useContext(ThemeContext)
  const language = useContext(LanguageContext)
  return (
    <footer className={`footer ${theme == "light" ? "footer-light" : "footer-dark"}`}>
      <p style={{marginBottom: "5px"}}>Swift and the Swift logo are trademarks of Apple Inc.</p>
      <p>{language == "en" ? "Made by me using React and Lucide icons." : "Hecho por mí utlizando React y Lucide icons."}</p>
    </footer>
  )
}
