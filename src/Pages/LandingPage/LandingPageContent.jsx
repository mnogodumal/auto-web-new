import Button from "../../Components/Button/Button";
import landingTracImage from '../../image/LandingTrac.jpg';

export default function LandingPageContent() {
  return (
    <>
      <section style={{ backgroundImage: `url(${landingTracImage})`, backgroundSize: 'cover' }}>
        {/* как бг картинкой сделать через таилвинд? у меня не получается bg-[url('')] */}
        <div className="container">
          <div className='text-[var(--general---white)] py-[245px]'>
            <div className='max-w-[768px]'>
              <p className="font-[400] text-[24px] leading-[150%] text-[#858586]">Novo - маркетплейс техники</p>
              <h1 className="mt-[16px] font-[400] text-[60px] leading-[150%] ">Продавай технику быстро и удобно!</h1>
              <Button className={'mt-[65px]'} text={'стать продавцем на Novo'} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


