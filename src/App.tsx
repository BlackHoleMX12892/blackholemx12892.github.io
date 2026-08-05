import './App.css'
import { useState, createContext, useContext } from 'react'
import profilepicture from './assets/149122895.jpeg'
import { Mail, Sun, Moon, BadgeInfo, Languages, Menu, House, Boxes, ShieldUser } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

import SwfitLogo from "./assets/Swift_logo_color.svg"
import JavaScriptLogo from "./assets/Unofficial_JavaScript_logo_2.svg.webp"
import TuxPenguin from "./assets/Tux.svg.webp"
import CPPLogo from "./assets/ISO_C++_Logo.svg.webp"

import TripBlueprintScreenshot from "./assets/projects-screenshots/Trip_Blueprint.png"
import ishellScreenshot from "./assets/projects-screenshots/ishell-v0.4.0.png"

const ThemeContext = createContext("light")

interface PageContextType {
  page: string
  setPage: React.Dispatch<React.SetStateAction<string>>
}

const PageContext = createContext<PageContextType | undefined>(undefined)

const LanguageContext = createContext("en")

export default function App() {
  const initialtheme = new Date().getHours() < 19 && new Date().getHours() > 6 ? "light" : "dark"
  
  const initiallanguage = localStorage.getItem("language") || (navigator.language.slice(0, 2) == "es" || navigator.language.slice(0, 2) == "en" ? navigator.language.slice(0, 2) : "en")

  const [theme, setTheme] = useState(initialtheme)
  const [page, setPage] = useState("home")
  const [language, setLanguage] = useState(initiallanguage)
  const [showSidebar, setShowSidebar] = useState(false)

  function changeLang(lang: string) {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <ThemeContext.Provider value={theme}>
    <PageContext.Provider value={{ page, setPage }}>
    <LanguageContext.Provider value={language}>
    <div className={`main-container ${theme == "light" ? "main-container-light" : "main-container-dark"}`}>
      <nav className={`navigation-bar ${theme == "light" ? "navigation-bar-light" : "navigation-bar-dark"}`}>
        <div onClick={() => showSidebar == false ? setShowSidebar(true) : setShowSidebar(false)} className={"navigation-bar-switcher navigation-bar-menu-button"}>
          <Menu />
        </div>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} style={{backgroundImage: `url(${profilepicture})`, backgroundSize: "cover", width: "19px", height: "19px", minWidth: "19px", minHeight: "19px", maxWidth: "19px", maxHeight: "19px", cursor: "default"}} />
        <div className={`navigation-bar-item navigation-bar-button ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("home")}>
          <p>{language == "en" ? "Home" : "Inicio"}</p>
        </div>
        <div className={`navigation-bar-item navigation-bar-button ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("about")}>
          <p>{language == "en" ? "About" : "Información"}</p>
        </div>
        <div className={`navigation-bar-item navigation-bar-button ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("projects")}>
          <p>{language == "en" ? "Projects" : "Proyectos"}</p>
        </div>
        <div className={`navigation-bar-item navigation-bar-button ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("contact")}>
          <p>{language == "en" ? "Contact" : "Contacto"}</p>
        </div>
        <div className={`navigation-bar-item navigation-bar-button ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("privacy")}>
          <p>{language == "en" ? "Privacy" : "Privacidad"}</p>
        </div>
        <div className="navigation-bar-switcher" onClick={() => language == "en" ? changeLang("es") : changeLang("en")} style={{marginLeft: "auto", marginRight: "15px", marginTop: "8px", display: "flex", flexDirection: "row", alignItems: "center", cursor: "default"}}>
          <Languages />
          {language == "en" ? "ES" : "EN"}
        </div>
        <div className="navigation-bar-switcher" onClick={() => theme == "light" ? setTheme("dark") : setTheme("light")} style={{marginRight: "10px", marginTop: "8px", cursor: "default"}}>
          {theme == "light" ? <Moon /> : <Sun />}
        </div>
      </nav>
      <main onClick={() => showSidebar == true ? setShowSidebar(false) : null} className="main-content">
        {page == "home" ? <Home /> : ""}
        {page == "about" ? <About /> : ""}
        {page == "projects" ? <Projects /> : ""}
        {page == "contact" ? <Contact /> : ""}
        {page == "privacy" ? <Privacy /> : ""}
      </main>
      <aside className={`sidebar ${theme == "light" ? "sidebar-light" : "sidebar-dark"}`} style={showSidebar == true ? {display: "flex"} : {display: "none"}}>
        <ul>
          <li onClick={() => {setPage("home"); setShowSidebar(false)}}><House /> <span>{language == "en" ? "Home" : "Inicio"}</span></li>
          <li onClick={() => {setPage("about"); setShowSidebar(false)}}><BadgeInfo /> <span>{language == "en" ? "About" : "Información"}</span></li>
          <li onClick={() => {setPage("projects"); setShowSidebar(false)}}><Boxes /> <span>{language == "en" ? "Projects" : "Proyectos"}</span></li>
          <li onClick={() => {setPage("contact"); setShowSidebar(false)}}><Mail /> <span>{language == "en" ? "Contact" : "Contacto"}</span></li>
          <li onClick={() => {setPage("privacy"); setShowSidebar(false)}}><ShieldUser /> <span>{language == "en" ? "Privacy" : "Privacidad"}</span></li>
        </ul>
      </aside>
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
          <a href="https://github.com/BlackHoleMX12892"><SiGithub /> <span>{language == "en" ? "My projects" : "Mis proyectos"}</span></a>
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
              <p style={{marginBottom: "10px"}}>Hola, soy un desarollador mexicano, me interesan muchas áreas aunque a veces eso dificulta mi aprendizaje.</p>
              <p style={{marginBottom: "10px"}}>Mis idiomas son: Español (nativo), Inglés (Fluido), Alemán (básico).</p>
              <p>Estoy aprendiendo React con este sitio, pero sé C++, JavaScript, Swift (lo suficiente para hacer apps), HTML y CSS.</p>
              <p style={{marginBottom: "10px"}}>He experimentado con otros lenguajes como C, Rust y Python.</p>
              <p>Dato extra: Me gusta visitar Estados Unidos y el BBQ.</p>
            </>}
            <div className="home-card-buttons">
              <div onClick={() => page?.setPage("about")}><BadgeInfo /> <span>{language == "en" ? "Read more" : "Leer más"}</span></div>
            </div>
          </div>
        </div>
        <div className="home-section">
          <div className="home-card" style={{marginLeft: "auto"}}>
            <h1>{language == "en" ? "Projects" : "Proyectos"}</h1>
            {language == "en" ?
            <>
              <p style={{marginBottom: "10px"}}>Currently I create things with the purpose of learning, for example:</p>
              <ul style={{marginBottom: "10px", '--list-color': `${theme == "light" ? "black" : "white"}`} as React.CSSProperties}>
                <li>ishell: a shell project for unix-like systems to learn C++.</li>
                <li>tripblueprint: a macOS swiftUI trip planning app.</li>
                <li>This website to learn React.</li>
              </ul>
              <p>Do I use AI? Not really, just sometimes to understand some code and to get information.</p>
            </> :
            <>
              <p style={{marginBottom: "10px"}}>Actualmente creo proyectos para aprender, como:</p>
              <ul style={{marginBottom: "10px", '--list-color': `${theme == "light" ? "black" : "white"}`} as React.CSSProperties}>
                <li>ishell: un interprete de comandos en C++ para sistemas tipo unix.</li>
                <li>tripblueprint: una app de viajes para macOS hecho con swiftUI.</li>
                <li>Este sitio para aprender React.</li>
              </ul>
              <p>Utilizo IA en mis proyectos? Sí, para entender codigo e investigar conceptos.</p>
            </>}
            <div className="home-card-buttons">
              <a href="https://github.com/BlackHoleMX12892"><SiGithub /> <span>Github</span></a>
              <div onClick={() => page?.setPage("projects")}><Boxes /> <span>{language == "en" ? "Projects" : "Proyectos"}</span></div>
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
      <div className="introduction">
        Hi there
      </div>
      <Footer />
    </>
  )
}

class Project {
  name: string
  languages: Map<string, string>
  description: string
  url: string
  image: string

  constructor(name: string, languages: Map<string, string>, description: string, url: string, image: string) {
      this.name = name
      this.languages = languages
      this.description = description
      this.url = url
      this.image = image
  }
}

function Projects() {
  const projects = [
    new Project("ishell", new Map([["language", "C++"], ["color", "rgb(26, 67, 126)"]]), "A unix shell for TOML.", "https://github.com/BlackHoleMX12892/ishell", ishellScreenshot),
    new Project("Trip Blueprint", new Map([["language", "Swift"], ["color", "rgb(222, 93, 68)"]]), "A trip planning app for macos.", "https://github.com/BlackHoleMX12892/tripblueprint", TripBlueprintScreenshot),
  ]

  return (
    <>
    <h1 style={{margin: "30px 0 10px 20px"}}>My projects:</h1>
    <div className="projects-container">
      {
        projects.map((element) => (
          <ProjectCard name={element.name} languages={element.languages} description={element.description} url={element.url} image={element.image} />
        ))
      }
    </div>
      <Footer />
    </>
  )
}

function ProjectCard({name, languages, description, url, image}: {name: string, languages: Map<string, string>, description: string, url: string, image: string}) {
  return (
    <>
      <div className="project-card">
        <div className="project-card-image" style={{backgroundImage: `url(${image})`}} />
        <div className="project-card-content" style={{marginLeft: "10px", marginTop: "10px"}}>
          <h1>{name}</h1>
          <p>{description}</p>
          <p className="project-card-language" style={{'--language-color': `${languages.get("color")}`} as React.CSSProperties}>{languages.get("language")}</p>
          <div className="project-card-buttons">
            <a href={url}><SiGithub /> <span>Github</span></a>
          </div>
        </div>
      </div>
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
      I don't remember having a reason to add this, I promise I don't get any data from you.
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
