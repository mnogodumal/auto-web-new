import Footer from '../Components/Footer/Footer'
import HeaderSeller from '../Components/Header/HeaderSeller'
import NotFoundImg from '../image/NotFoundImg.png'

export default function NotFound() {
  return (
    <>
      <HeaderSeller />
      <div className='flex flex-col items-center gap-[50px] py-[50px]'>
        <div>
          <h1 className='font-[500] text-[50px] leading-[150%] '>Пустотаааааа :/</h1>
        </div>
        <div className='w-[600px]'>
          <img src={NotFoundImg} alt="phot" />
        </div>
      </div>
      <Footer />
    </>
  )
}