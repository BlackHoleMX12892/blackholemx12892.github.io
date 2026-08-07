import React from "react";
import { X } from "lucide-react";

export default function Popup({title, content}: {title: string, content: React.JSX.Element}) {
return (
    <div className="popup-container">
        <div className="popup-title-bar">
            <h1>{title}</h1>
            <X />
        </div>
        <div className="popup-content">
            {content}
        </div>
    </div>
  )
}
