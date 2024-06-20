import { useState } from "react"

export default function OpenPopUp() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(prevState => !prevState);
  }
}