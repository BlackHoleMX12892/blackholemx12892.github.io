import React from "react";
import { X } from "lucide-react";

export default function Popup({title, content}: {title: Map<string, string>, content: React.JSX.Element}) {
  <div className="popup-container">
    <div className="popup-title-bar">
      <h1>{title}</h1>
      <X />
    </div>
    <div className="popup-content">
      {content}
    </div>
  </div>
}
