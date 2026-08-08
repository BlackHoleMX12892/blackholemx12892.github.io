import './App.css'
import React, { useState, createContext, useContext } from 'react'
import profilepicture from './assets/149122895.jpeg'
import { Mail, Sun, Moon, BadgeInfo, Languages, Menu, House, Boxes, ShieldUser, Download } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

import SwfitLogo from "./assets/Swift_logo_color.svg"
import JavaScriptLogo from "./assets/Unofficial_JavaScript_logo_2.svg.webp"
import TuxPenguin from "./assets/Tux.svg.webp"
import CPPLogo from "./assets/ISO_C++_Logo.svg.webp"

import TripBlueprintScreenshot from "./assets/projects-screenshots/Trip_Blueprint.png"
import ishellScreenshot from "./assets/projects-screenshots/ishell-v0.4.0.png"
import Popup from './components/Popup'

const ThemeContext = createContext("light")

interface PageContextType {
  page: string
  setPage: React.Dispatch<React.SetStateAction<string>>
  changePage: (page: string, hideSidebar?: boolean) => void
}

const PageContext = createContext<PageContextType | undefined>(undefined)

const LanguageContext = createContext("en")

export default function App() {
  const initialtheme = new Date().getHours() < 19 && new Date().getHours() > 6 ? "light" : "dark"
  
  const initiallanguage = localStorage.getItem("language") || (navigator.language.slice(0, 2) == "es" || navigator.language.slice(0, 2) == "en" ? navigator.language.slice(0, 2) : "en")

const initialpage = localStorage.getItem("page") || "home"

  const [theme, setTheme] = useState(initialtheme)
  const [page, setPage] = useState(initialpage)
  const [language, setLanguage] = useState(initiallanguage)
  const [showSidebar, setShowSidebar] = useState(false)

  function changeLang(lang: string) {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  function changePage(page: string, hideSidebar?: boolean) {
    setPage(page)
    if (typeof hideSidebar == "boolean") {
      setShowSidebar(!(hideSidebar))
    }
    localStorage.setItem("page", page)
  }

  return (
    <ThemeContext.Provider value={theme}>
    <PageContext.Provider value={{ page, setPage, changePage }}>
    <LanguageContext.Provider value={language}>
    <div className={`main-container ${theme == "light" ? "main-container-light" : "main-container-dark"}`}>
      <nav className={`navigation-bar ${theme == "light" ? "navigation-bar-light" : "navigation-bar-dark"}`}>
        <div onClick={() => showSidebar == false ? setShowSidebar(true) : setShowSidebar(false)} className={"navigation-bar-switcher navigation-bar-menu-button"}>
          <Menu />
        </div>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} style={{backgroundImage: `url(${profilepicture})`, backgroundSize: "cover", width: "19px", height: "19px", minWidth: "19px", minHeight: "19px", maxWidth: "19px", maxHeight: "19px", cursor: "default"}} />
        <div className={`navigation-bar-item navigation-bar-button ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => changePage("home", true)}>
          <p>{language == "en" ? "Home" : "Inicio"}</p>
        </div>
        <div className={`navigation-bar-item navigation-bar-button ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => changePage("about", true)}>
          <p>{language == "en" ? "About" : "Información"}</p>
        </div>
        <div className={`navigation-bar-item navigation-bar-button ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => changePage("projects", true)}>
          <p>{language == "en" ? "Projects" : "Proyectos"}</p>
        </div>
        <div className={`navigation-bar-item navigation-bar-button ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => changePage("contact", true)}>
          <p>{language == "en" ? "Contact" : "Contacto"}</p>
        </div>
        <div className={`navigation-bar-item navigation-bar-button ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => changePage("privacy", true)}>
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
          <li onClick={() => {changePage("home", true)}}><House /> <span>{language == "en" ? "Home" : "Inicio"}</span></li>
          <li onClick={() => {changePage("about", true)}}><BadgeInfo /> <span>{language == "en" ? "About" : "Información"}</span></li>
          <li onClick={() => {changePage("projects", true);}}><Boxes /> <span>{language == "en" ? "Projects" : "Proyectos"}</span></li>
          <li onClick={() => {changePage("contact", true);}}><Mail /> <span>{language == "en" ? "Contact" : "Contacto"}</span></li>
          <li onClick={() => {changePage("privacy", true);}}><ShieldUser /> <span>{language == "en" ? "Privacy" : "Privacidad"}</span></li>
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
          <div onClick={() => page?.changePage("contact")}><Mail /> <span>{language == "en" ? "Contact" : "Contacto"}</span></div>
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
              <div onClick={() => page?.changePage("about")}><BadgeInfo /> <span>{language == "en" ? "Read more" : "Leer más"}</span></div>
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
              <div onClick={() => page?.changePage("projects")}><Boxes /> <span>{language == "en" ? "Projects" : "Proyectos"}</span></div>
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

class ButtonData {
  icon: React.JSX.Element
  label: string
  key: string
  action?: () => void
  url?: string

  constructor(icon: React.JSX.Element, label: string, key: string, action?: () => void, url?: string) {
    this.icon = icon
    this.label = label
    this.key = key
    this.action = action
    this.url = url
  }
}

class Project {
  name: string
  languages: Array<Map<string, string>>
  description: Map<string, string>
  buttons: Array<ButtonData>
  image: string
  key: string

  constructor(name: string, languages: Array<Map<string, string>>, description: Map<string, string>, buttons: Array<ButtonData>, image: string, key: string) {
      this.name = name
      this.languages = languages
      this.description = description
      this.buttons = buttons
      this.image = image
      this.key = key
  }
}

function Projects() {
  const [showPopup, setShowPopup] = useState(false)

  const projects = [
    new Project("ishell", [new Map([["language", "C++"], ["color", "rgb(26, 67, 126)"], ["key", "cxx-ishell"]])], new Map([["en", "A Unix shell for TOML."], ["es", "Una shell de Unix para TOML."]]), [new ButtonData(<SiGithub />, "Github", "ishell-github-button", undefined, "https://github.com/BlackHoleMX12892/ishell"), new ButtonData(<Download />, "Download", "ishell-download-button", () => {setShowPopup(true)})], ishellScreenshot, "ishell-card"),
    new Project("Trip Blueprint", [new Map([["language", "Swift"], ["color", "rgb(222, 93, 68)"], ["key", "swift-tripblueprint"]])], new Map([["en", "A trip planning app for macOS."], ["es", "App de macOS para planear viajes."]]), [new ButtonData(<SiGithub />, "Github", "trip-blueprint-github-button", undefined, "https://github.com/BlackHoleMX12892/tripblueprint")], TripBlueprintScreenshot, "trip-blueprint-card"),
    new Project("Hello World", [new Map([["language", "C"], ["color", "rgba(172, 186, 203)"], ["key", "c-hello-world"]]), new Map([["language", "C++"], ["color", "rgb(26, 67, 126)"], ["key", "cxx-hello-world"]])], new Map([["en", "A program that reads a binary file and prints \"Hello World!\""], ["es", "Un programa que lee un binario e imprime \"Hello World!\""]]), [new ButtonData(<SiGithub />, "Github", "hello-world-github-button", undefined, "https://github.com/BlackHoleMX12892/hello-world")], "https://github.com/BlackHoleMX12892/hello-world/blob/main/.github/assets/image.png?raw=true", "hello-world-card")
  ]

  return (
    <>
    <h1 style={{margin: "30px 0 10px 20px"}}>My projects:</h1>
    <div className="projects-container">
      {
        projects.map((element) => (
          <ProjectCard key={element.key} name={element.name} languages={element.languages} description={element.description} buttons={element.buttons} image={element.image} />
        ))
      }
    </div>
    {showPopup == true ? <Popup title="ishell downloads" content={ <p>hi</p> } setShowPopup={setShowPopup} /> : ""}
    <Footer />
    </>
  )
}

function ProjectCard({name, languages, description, buttons, image}: {name: string, languages: Array<Map<string, string>>, description: Map<string, string>, buttons: Array<ButtonData>, image: string}) {
  const language = useContext(LanguageContext)
  const theme = useContext(ThemeContext)

  return (
    <>
      <div className={`project-card ${theme == "light" ? "project-card-light" : "project-card-dark"}`}>
        <div className="project-card-image" style={{backgroundImage: `url(${image})`}} />
        <div className="project-card-content" style={{marginLeft: "10px", marginTop: "10px"}}>
          <h1>{name}</h1>
          <p>{language == "en" ? description.get("en") : description.get("es")}</p>
          <div className="project-card-language-container">
            {
              languages.map(lang => (
                <p key={lang.get("key")} className="project-card-language" style={{'--language-color': `${lang.get("color")}`} as React.CSSProperties}>{lang.get("language")}</p>
              ))
            }
          </div>
          <div className="project-card-buttons">
            {
              buttons.map(data => {
                  if (typeof data.action == "undefined" && typeof data.url == "string") {
                    return(<a key={data.key} href={data.url}>{data.icon} <span>{data.label}</span></a>)
                  } else if (typeof data.action == "function" && typeof data.url == "undefined") {
                    return(<div key={data.key} onClick={data.action}>{data.icon} <span>{data.label}</span></div>)
                  }
              })
            }
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
