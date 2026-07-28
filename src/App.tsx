import './App.css'
import { useState, createContext, useContext } from 'react'
import profilepicture from './assets/149122895.jpeg'
import { FolderGit2, Mail, Sun, Moon, BadgeInfo } from 'lucide-react'

import SwfitLogo from "./assets/Swift_logo_color.svg"
import JavaScriptLogo from "./assets/Unofficial_JavaScript_logo_2.svg.webp"
import TuxPenguin from "./assets/Tux.svg.webp"
import CPPLogo from "./assets/ISO_C++_Logo.svg.webp"

interface PageContextType {
  page: string
  setPage: React.Dispatch<React.SetStateAction<string>>
}

const PageContext = createContext<PageContextType | undefined>(undefined)
const ThemeContext = createContext("light")

export default function App() {
  const initialtheme = new Date().getHours() < 19 && new Date().getHours() > 6 ? "light" : "dark"

  const [theme, setTheme] = useState(initialtheme)
  const [page, setPage] = useState("home")

  return (
    <ThemeContext.Provider value={theme}>
    <PageContext.Provider value={{ page, setPage }}>
    <div className={`main-container ${theme == "light" ? "main-container-light" : "main-container-dark"}`}>
      <nav className={`navigation-bar ${theme == "light" ? "navigation-bar-light" : "navigation-bar-dark"}`}>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} style={{backgroundImage: `url(${profilepicture})`, backgroundSize: "cover", width: "19px", height: "19px", cursor: "default"}} />
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("home")}>
          <p>Home</p>
        </div>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("about")}>
          <p>About</p>
        </div>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("projects")}>
          <p>Projects</p>
        </div>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("contact")}>
          <p>Contact</p>
        </div>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("privacy")}>
          <p>Privacy</p>
        </div>
        <div className="navigation-bar-theme-switcher" onClick={() => theme == "light" ? setTheme("dark") : setTheme("light")} style={{marginLeft: "auto", marginRight: "10px", marginTop: "8px"}}>
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
    </PageContext.Provider>
    </ThemeContext.Provider>
  )
}

function Home() {
  const pagecontext = useContext(PageContext)
  const themecontext = useContext(ThemeContext)

  return (
    <>
      <div className="home-banner">
        <div className={`home-banner-items ${themecontext == "light" ? "home-banner-items-light" : "home-banner-items-dark"}`}>
          <img src={CPPLogo} alt="C++ Logo" />
          <img src={TuxPenguin} alt="Tux penguin" />
          <img src={SwfitLogo} alt="Swift logo" />
          <img src={JavaScriptLogo} alt="JavaScript logo" />
        </div>
        <h1>BlackHoleMX</h1>
        <div className="home-banner-buttons">
          <a href="https://github.com/BlackHoleMX12892"><FolderGit2 /> <span>My projects</span></a>
          <div onClick={() => pagecontext?.setPage("contact")}><Mail /> <span>Contact</span></div>
        </div>
      </div>
      <div className="home-main">
        <div className="home-section">
          <div className="home-card">
            <h1>Who am I?</h1>
            <p style={{marginBottom: "10px"}}>Hi, I'm a Mexican hobbyist developer who is interested in way too many programming-related things (sometimes more than I can understand).</p>
            <p style={{marginBottom: "10px"}}>I can speak Spanish (native), English (proficiently), and a bit of German.</p>
            <p>I'm learning React by developing this website. I know C++, some JavaScript, Swift (enough to create an app), good HTML and good CSS.</p>
            <p style={{marginBottom: "10px"}}>I have experimented with basic C and very basic Rust.</p>
            <p>I like to eat Brisket and visiting the USA.</p>
            <div className="home-card-buttons">
              <div onClick={() => pagecontext?.setPage("about")}><BadgeInfo /> <span>Read more</span></div>
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
  const themecontext = useContext(ThemeContext)
  return (
    <footer className={`footer ${themecontext == "light" ? "footer-light" : "footer-dark"}`}>
      <p style={{marginBottom: "5px"}}>Swift and the Swift logo are trademarks of Apple Inc.</p>
      <p>Made by me using React and Lucide icons.</p>
    </footer>
  )
}
