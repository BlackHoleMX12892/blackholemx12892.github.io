import React from "react";
import { X } from "lucide-react";

export default function Popup({title, content, setShowPopup}: {title: string, content: React.JSX.Element, setShowPopup: React.Dispatch<React.SetStateAction<boolean>>}) {
return (
    <div className="popup-container">
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
