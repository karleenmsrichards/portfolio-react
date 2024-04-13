import "../components/TechStack.css"
import { TechStackCarousel } from "./TechStackCarousel"

export const TechStack = () => {
  return (
    <div id="tech-stack" className="tech-stack-container">
      <h2>Tech Stack</h2>
      <TechStackCarousel />
    </div>
    )
}