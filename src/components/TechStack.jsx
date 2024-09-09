import "../components/TechStack.css"
import { TechStackCarousel } from "./TechStackCarousel"

export const TechStack = () => {
  return (
    <div id="tech-stack" className="tech-stack-container">
      <h2 className="tech-stack-container-title"><span className="subtitle-span">My</span> Tech Stack</h2>
      <TechStackCarousel />
    </div>
    )
}