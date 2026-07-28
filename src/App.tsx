import './App.css'
import { useState } from 'react'
import profilepicture from './assets/149122895.jpeg'
import { FolderGit2, Mail, Sun, Moon, BadgeInfo } from 'lucide-react'

import SwfitLogo from "./assets/Swift_logo_color.svg"
import JavaScriptLogo from "./assets/Unofficial_JavaScript_logo_2.svg.webp"
import TuxPenguin from "./assets/Tux.svg.webp"
import CPPLogo from "./assets/ISO_C++_Logo.svg.webp"

export default function App() {
  const initialtheme = new Date().getHours() < 19 && new Date().getHours() > 6 ? "light" : "dark"

  const [theme, setTheme] = useState(initialtheme)
  const [page, setPage] = useState("home")

  return (
    <div className={`main-container ${theme == "light" ? "main-container-light" : "main-container-dark"}`}>
      <nav className={`navigation-bar ${theme == "light" ? "navigation-bar-light" : "navigation-bar-dark"}`}>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} style={{backgroundImage: `url(${profilepicture})`, backgroundSize: "cover", width: "19px", height: "19px", cursor: "default"}} />
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("home")}>
          <p>Home</p>
        </div>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("about")}>
          <p>About</p>
        </div>
        <div className={`navigation-bar-item ${theme == "light" ? "navigation-bar-item-light" : "navigation-bar-item-dark"}`} onClick={() => setPage("location")}>
          <p>Location</p>
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
        {page == "home" ? <Home theme={theme} /> : ""}
        {page == "about" ? <About theme={theme} /> : ""}
        {page == "location" ? <Location theme={theme} /> : ""}
        {page == "contact" ? <Contact theme={theme} /> : ""}
        {page == "privacy" ? <Privacy theme={theme} /> : ""}
      </main>
    </div>
  )
}

function Home({ theme }: { theme: string }) {
  return (
    <>
      <div className="home-banner">
        <div className={`home-banner-items ${theme == "light" ? "home-banner-items-light" : "home-banner-items-dark"}`}>
          <img src={CPPLogo} alt="C++ Logo" />
          <img src={TuxPenguin} alt="Tux penguin" />
          <img src={SwfitLogo} alt="Swift logo" />
          <img src={JavaScriptLogo} alt="JavaScript logo" />
        </div>
        <h1>BlackHoleMX</h1>
        <div className="home-banner-buttons">
          <a href="https://github.com/BlackHoleMX12892"><FolderGit2 /> <span>My projects</span></a>
          <div><Mail /> <span>Contact</span></div>
        </div>
      </div>
      <div className="home-main">
        <div className="home-section">
          <div className="home-card">
            <h1>Who am I?</h1>
            <p style={{marginBottom: "10px"}}>Hi, I'm a mexican hobbyist developer who is interested in way too many programming related things (sometimes more than I can understand).</p>
            <p style={{marginBottom: "10px"}}>I can speak Spanish (native), English (proficiently), and a bit of German.</p>
            <p>I'm learning React by developing this website. I know C++, some JavaScript, Swift (enough to create an app), good HTML and good CSS.</p>
            <p style={{marginBottom: "10px"}}>I have experimented with basic C and very basic Rust.</p>
            <p>I like to eat Brisket and visiting the USA.</p>
            <div className="home-card-buttons">
              <div><BadgeInfo /> <span>Read more</span></div>
            </div>
          </div>
        </div>
      </div>
      <Footer theme={theme} />
    </>
  )
}

function About({ theme }: { theme: string }) {
  return (
    <>
      About{theme}
      <Footer theme={theme} />
    </>
  )
}

function Location({ theme }: { theme: string }) {
  return (
    <>
      Location{theme}
      <Footer theme={theme} />
    </>
  )
}

function Contact({ theme }: { theme: string }) {
  return (
    <>
      Contact{theme}
      <Footer theme={theme} />
    </>
  )
}

function Privacy({ theme }: { theme: string }) {
  return (
    <>
      Privacy{theme}
      <Footer theme={theme} />
    </>
  )
}

function Footer({ theme }: { theme: string }) {
  return (
    <footer className={`footer ${theme == "light" ? "footer-light" : "footer-dark"}`}>
      <p>Swift and the Swift logo are trademarks of Apple Inc.</p>
    </footer>
  )
}
