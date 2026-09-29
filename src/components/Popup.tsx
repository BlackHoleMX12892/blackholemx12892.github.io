import React from "react";
import { X } from "lucide-react";

// Terrible prop drilling with the theme (questioning my past self, right now)

export default function Popup({title, content, setShowPopup, theme}: {title: string, content: React.JSX.Element, setShowPopup: React.Dispatch<React.SetStateAction<boolean>>, theme: string}) {
    return (
        <div className={`popup-container ${theme == "light" ? "popup-container-light" : "popup-container-dark"}`}>
            <div className="popup-title-bar">
                <h1>{title}</h1>
                <X className="popup-close-button" onClick={() => {setShowPopup(false)}} />
            </div>
            <div className="popup-content">
                {content}
            </div>
        </div>
    )
}
