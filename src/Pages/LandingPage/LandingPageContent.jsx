import Button from "../../Components/Button/Button";

export default function LandingPageContent() {
  return (
    <>
      <section className="bg-[gray] h-[850px]">
        <div className="container">
          <div className='text-[var(--general---white)] pt-[157px] pb-[244px]'>
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


