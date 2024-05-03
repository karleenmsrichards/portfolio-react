import "../components/TechStack.css"
import { TechStackCarousel } from "./TechStackCarousel"

export const TechStack = () => {
  return (
    <div id="tech-stack" className="tech-stack-container">
      <h2><span className="subtitle-span">My</span> Tech Stack</h2>
      <TechStackCarousel />
    </div>
    )
}