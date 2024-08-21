import Button from '../../Components/Button/Button'
import Footer from '../../Components/Footer/Footer'



import HeaderSeller from '../../Components/Header/HeaderSeller'
import SellerAdsCard from './SellerAdsCard'
import SellerSearchBar from './SellerSearchBar'



import SellerSliderProfile from './SellerSliderProfile'

export default function SellerAdsPage() {
  return (
    <>
      <HeaderSeller />
      <SellerSliderProfile />
      <section className='pt-[48px] pb-[120px] bg-[#F9F9F9]'>
        <div className='container'>
          <div className='font-[400] text-[24px] leading-[150%] text-[var(--text---main)]'>
            <span>Использовано объявлений: </span>
            <span className='text-[var(--accent---main-green)]'>4/10</span>
          </div>
          <div className='mt-[48px]'>
            <SellerSearchBar />
          </div>
          <div className='mt-[20px] grid grid-cols-3 gap-[20px]'>
            <SellerAdsCard />
            <SellerAdsCard />
            <SellerAdsCard />
            <SellerAdsCard />
            <SellerAdsCard />
          </div>
          <div className='mt-[48px] flex justify-center'>
            <Button text={'Загрузить ещё'} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}