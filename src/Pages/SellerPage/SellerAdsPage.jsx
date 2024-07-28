import Footer from '../../Components/Footer/Footer'



import HeaderSeller from '../../Components/Header/HeaderSeller'
import SellerSliderProfile from './SellerSliderProfile'

export default function SellerAdsPage() {
  return (
    <>
      <HeaderSeller />
      <SellerSliderProfile />
      <section className='pt-[48px] bg-[#F9F9F9]'>
        <div className='container'>
          <div className='font-[400] text-[24px] leading-[150%] text-[var(--text---main)]'>
            <span>Использовано объявлений: </span>
            <span className='text-[var(--accent---main-green)]'>4/10</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}


