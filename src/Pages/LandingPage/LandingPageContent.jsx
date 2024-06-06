import Button from "../../Components/Button/Button";
import LandingCard from "../../Components/Card/LandingCard";
import landingTracImage from '../../image/LandingTrac.jpg';
import LandingCardGazel from '../../image/LandingCard/LandingGazel.png'
import LandingCardTractor from '../../image/LandingCard/LendingCardTractor.png'
import LandingCardExcov from '../../image/LandingCard/LandingCardExcov.png'
import LandingCardPod from '../../image/LandingCard/LandingCardPod.png'

export default function LandingPageContent() {
  return (
    <>
      <section style={{ backgroundImage: `url(${landingTracImage})`, backgroundSize: 'cover' }}>
        {/* как бг картинкой сделать через таилвинд? у меня не получается bg-[url('')] */}
        <div className="container">
          <div className='text-[var(--general---white)] py-[245px]'>
            <div className='max-w-[768px]'>
              <p className="font-[200] text-[24px] leading-[150%] text-[#858586]">Novo - маркетплейс техники</p>
              <h1 className="mt-[16px] font-[200] text-[60px] leading-[150%] ">Продавай технику быстро и удобно!</h1>
              <Button className={'mt-[65px]'} text={'стать продавцем на Novo'} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#141416] pt-[90px] pb-[180px]">
        <div className="container flex flex-col items-center">
          <p className="font-[200] text-[24px] leading-[150%] text-[#858586]">Про компанию</p>
          <h2 className="mt-[20px] font-[200] text-[40px] leading-[150%] text-center text-[var(--general---white)] w-[917px]">NOVO - торговая площадка коммерческого транспорта и тяжелой техники</h2>
          <div className="flex gap-[20px] ">
            <div className="mt-[94px]">
              <LandingCard img={LandingCardGazel} text={'Коммерческий транспорт'} />
            </div>
            <div className="mt-[158px]">
              <LandingCard className={'w-[97px]'} img={LandingCardTractor} text={'Сельхоз техника'} />
            </div>
            <div className="mt-[94px]">
              <LandingCard className={'w-[165px]'} img={LandingCardExcov} text={'Строительная техника'} />
              {/* как-то можно иначе задавать параметры стилей каждому компоненту? Просто иначе текст не по макету */}
            </div>
            <div className="mt-[30px]">
              <LandingCard img={LandingCardPod} text={'Складское оборудование'} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


