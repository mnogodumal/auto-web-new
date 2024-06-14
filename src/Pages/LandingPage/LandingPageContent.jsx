import Button from "../../Components/Button/Button";
import LandingCard from "../../Components/Card/LandingCard";
import landingTracImage from '../../image/LandingTrac.jpg';
import LandingCardGazel from '../../image/LandingCard/LandingGazel.png'
import LandingCardTractor from '../../image/LandingCard/LendingCardTractor.png'
import LandingCardExcov from '../../image/LandingCard/LandingCardExcov.png'
import LandingCardPod from '../../image/LandingCard/LandingCardPod.png'
import CardGroup from '../../image/LandingCard/CardGroup.svg'
import LandingPriceCard from "../../Components/Card/LandingPriceCard";
import LandingPhone from '../../image/LandingCard/LandingPhone.png'
import LandingCardStart from "../../Components/Card/LandingCardStart";
import LandingStart1 from '../../image/LandingCard/Start1.svg'
import LandingStart2 from '../../image/LandingCard/Start2.svg'
import LandingStart3 from '../../image/LandingCard/Start3.svg'

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
      <section className="bg-[#1B1B1E] pt-[90px] pb-[110px]">
        <div className="container">
          <div className="flex pl-[65px]">
            <p className="font-[200] text-[24px] leading-[150%] text-[var(--general---white)] w-[186px] text-center">Понятный мессенджер</p>
            <p className="font-[200] text-[24px] leading-[150%] text-[var(--general---white)] w-[150px] text-center ml-[275px]">Удобный дизайн</p>
            <p className="font-[200] text-[24px] leading-[150%] text-[var(--general---white)] w-[186px] text-center ml-[270px]">Круглосуточная поддержка</p>
          </div>
          <img src={CardGroup} alt="phote" />
        </div>
      </section>
      <section className="bg-[#141416] py-[180px] ">
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <p className="font-[200] text-[24px] leading-[150%] text-[#858586]">Тарифы и цены</p>
              <h2 className="mt-[20px] font-[200] text-[40px] leading-[150%] text-center text-[var(--general---white)] w-[886px]">Стань продавцом сегодня и получи 10 объявлений бесплатно!</h2>
            </div>
            <div className="flex gap-[123px] mt-[80px]">
              <LandingPriceCard tarif={'Starter'} price={'Бесплатно'} ad={'До 10 объявлений'} />
              <LandingPriceCard tarif={'Premium'} sign={'₴'} price={'999'} month={'/ месяц'} ad={'До 30 объявлений '} />
              <LandingPriceCard tarif={'Ultimate'} sign={'₴'} price={'1999'} month={'/ месяц'} ad={'До 50 объявлений'} />
            </div>
            <div className="mt-[120px] relative">
              <img className="absolute" src={LandingPhone} alt="" />
              <div className="w-[703px] h-[301px] rounded-[8px] bg-[#1b1b1e] pt-[30px] pr-[40px] pb-[39px] pl-[259px] mt-[51px]">
                <h2 className="font-[200] text-[24px] leading-[150%] text-[var(--general---white)] w-[404px]">Хотите размещать больше 50-ти объявлений в месяц?</h2>
                <p className="font-[200] text-[16px] leading-[150%] text-[#858586] w-[247px] mt-[16px]">Мы предложим индивидуальные условия сотрудничества!</p>
                <Button className={'mt-[40px]'} text={'отдел продаж'} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1B1B1E] py-[120px] ">
        <div className="container">
          <div className="flex flex-col items-center">
            <h2 className="mt-[20px] font-[200] text-[40px] leading-[150%] text-center text-[var(--general---white)] w-[886px]">Начать продавать легко!</h2>
          </div>
          <div className="mt-[80px] flex flex-col gap-[60px]">
            <LandingCardStart img={LandingStart1} step={'Шаг первый'} text={'Регистрация'} />
            <LandingCardStart img={LandingStart3} step={'Шаг третий'} text={'Размещение объявления'} />
          </div>
        </div>
      </section>
    </>
  )
}


