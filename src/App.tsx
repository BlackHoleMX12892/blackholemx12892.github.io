import './App.css'
import { useState } from 'react'
import profilepicture from './assets/149122895.jpeg'
import { FolderGit2, Mail, Sun, Moon } from 'lucide-react'

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
        <div onClick={() => theme == "light" ? setTheme("dark") : setTheme("light")} style={{marginLeft: "auto", marginRight: "10px", marginTop: "8px"}}>
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
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1280px-ISO_C%2B%2B_Logo.svg.png" alt="" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1280px-Tux.svg.png" alt="" />
          <img src="https://developer.apple.com/assets/elements/icons/swift/swift-256x256_2x.png" alt="" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/330px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
        </div>
        <h1>BlackHoleMX</h1>
        <div className="home-banner-buttons">
          <a href="https://github.com/BlackHoleMX12892"><FolderGit2 /> <span>My projects</span></a>
          <a href=""><Mail /> <span>Contact</span></a>
        </div>
      </div>
      <h1>Who am I?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nobis quo eius ex obcaecati quis consequuntur provident cupiditate reiciendis perspiciatis, laudantium quae consectetur error hic illo dolores magnam repellat labore illum explicabo recusandae natus quasi, magni ad. Iure nulla non necessitatibus fugit dolorum quibusdam veniam suscipit consectetur in voluptas accusantium maiores voluptatibus incidunt magnam ipsum cupiditate, a vitae accusamus possimus sed inventore? Eum dolores aperiam tenetur asperiores quasi suscipit molestias minus porro modi cumque provident perferendis enim dolore quia, nemo itaque necessitatibus rerum vero velit ipsam officiis optio ducimus quas. Distinctio dolores facere ab odio exercitationem maiores nemo quam minima, incidunt assumenda voluptatem soluta ipsa vel aperiam quod itaque deleniti quidem nisi dolor sapiente consequuntur reprehenderit earum iusto quisquam? Velit repudiandae eaque expedita illo quibusdam tempore architecto excepturi doloribus nihil itaque cupiditate perferendis quasi provident in quod dolore inventore veniam ipsam sapiente est id alias optio, voluptas omnis. Accusantium voluptatem ipsum iure, impedit quam accusamus libero eaque! Harum nulla repellendus tempora alias hic minima ex, natus quidem obcaecati animi voluptate molestias consequuntur voluptates eius libero assumenda aperiam ipsam. Blanditiis illo delectus, fugiat alias quam deserunt veritatis, reiciendis quod voluptatem quasi laborum aliquam recusandae, autem odio quo voluptas similique libero! Corporis.</p>
    </>
  )
}

function About({ theme }: { theme: string }) {
  return <>About{theme}</>
}

function Location({ theme }: { theme: string }) {
  return <>Location{theme}</>
}

function Contact({ theme }: { theme: string }) {
  return <>Contact{theme}</>
}

function Privacy({ theme }: { theme: string }) {
  return <>Privacy{theme}</>
}
