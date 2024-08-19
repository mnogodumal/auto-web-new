import ButtonBack from "../../Components/Button/ButtonBack";
import Footer from "../../Components/Footer/Footer";
import CreationCardForm from "./CreationCard/CreationCardForm";
import HeaderSeller from "../../Components/Header/HeaderSeller";
import SellerSliderProfile from "./SellerSliderProfile";
import CreationCard from "./CreationCard/CreationCard";

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
          <div className="flex items-center justify-between mt-[48px] px-[32px] py-[21px] bg-[var(--general---white)] rounded-[8px] ">
            <div>
              <ButtonBack to={'/sellerads'} />
            </div>
            <div>
              <p className="font-[300] text-[20px] leading-[150%] ">Создание нового объявления</p>
            </div>
          </div>
          <div className="mt-[20px]">
            <CreationCard />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}