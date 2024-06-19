// import { BrowserRouter } from "react-router-dom"
import PopUpLanding from "../../Components/PopUp/PopUpLanding"
import LandingPageContent from "./LandingPageContent"
import LandingPageHead from "./LandingPageHead"



export default function LandingPage() {
  return (
    <>
      <PopUpLanding />
      <LandingPageHead />
      <LandingPageContent />
    </>
  )
}