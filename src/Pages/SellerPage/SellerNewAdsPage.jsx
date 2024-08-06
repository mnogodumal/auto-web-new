import ButtonBack from "../../Components/Button/ButtonBack";
import Footer from "../../Components/Footer/Footer";
import HeaderSeller from "../../Components/Header/HeaderSeller";
import SellerSliderProfile from "./SellerSliderProfile";

export default function SellerNewAdsPage() {
  return (
    <>
      <HeaderSeller />
      <SellerSliderProfile />
      <section className='pt-[48px] pb-[180px] bg-[#F9F9F9]'>
        <div className="container">
          <div className='font-[400] text-[24px] leading-[150%] text-[var(--text---main)]'>
            <span>Использовано объявлений: </span>
            <span className='text-[var(--accent---main-green)]'>4/10</span>
          </div>
          <div>
            <div>
              <ButtonBack to={'/sellerads'} />
            </div>
            <div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}