import { NavLink } from "react-router-dom"
import HeaderSeller from "../../Components/Header/HeaderSeller"
import SellerSliderProfile from "./SellerSliderProfile"
import Footer from "../../Components/Footer/Footer"

export default function SellerSettingsPage() {
  return (
    <>
      <HeaderSeller />
      <SellerSliderProfile />
      <Footer />
    </>
  )
}