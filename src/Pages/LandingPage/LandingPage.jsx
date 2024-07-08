// import { BrowserRouter } from "react-router-dom"
import PopUpLanding from "../../Components/PopUp/PopUpLanding"
import { ModalProvider } from "../../Components/PopUp/PopUpLandingContext"
import LandingPageContent from "./LandingPageContent"
import LandingPageHead from "./LandingPageHead"



export default function LandingPage() {
  return (
    <>
      <ModalProvider>
        <PopUpLanding />
        <LandingPageHead />
        <LandingPageContent />
      </ModalProvider>
    </>
  )
}