import facebook from '../../image/icon/facebook-logo-button.svg'
import inst from '../../image/icon/instagram.svg'
import youtube from '../../image/icon/youtube.svg'

export default function Footer() {
  return (
    <>
      <footer className="bg-[#1B1B1E] pt-[60px] pb-[32px]">
        <div className="container">
          <div className="flex gap-[178px] items-center ">
            <div className="w-[321px]">
              <h2 className="font-[600] text-[48px] leading-[130%] tracking-[0.25em] text-[var(--general---white)]">NOVO</h2>
              <p className="mt-[10px] font-[300] text-[14px] leading-[171%] text-[var(--general---white)] opacity-[0.6] ">Маркетплейс коммерчиского транспорта и тяжелой техники</p>
            </div>
            <div>
              <div>
                <p className="font-[300] text-[14px] leading-[150%] text-[var(--general---white)] opacity-[0.6]">Покупателю</p>
              </div>
              <div className="flex gap-[76px] mt-[16px]">
                <a className="font-[500] text-[14px] leading-[171%] uppercase text-[var(--general---white)] " href="/">Служба поддержки</a>
                <a className="font-[500] text-[14px] leading-[171%] uppercase text-[var(--general---white)] " href="/">Стать правцем</a>
              </div>
            </div>
            <div>
              <div>
                <p className="font-[300] text-[14px] leading-[150%] text-[var(--general---white)] opacity-[0.6]">Следите за нами</p>
              </div>
              <div className="flex gap-[12px] mt-[16px]">
                <a href="/">
                  <img src={facebook} alt="logo" />
                </a>
                <a href="/">
                  <img src={inst} alt="logo" />
                </a>
                <a href="/">
                  <img src={youtube} alt="logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center py-[16px] border-[2px] border-solid bg-[rgba(255, 255, 255, 0.1)] mt-[50px]">
            <p className="font-[300] text-[14px] leading-[171%] text-[var(--general---white)] opacity-[0.6]">© 2019–2020 Группа компаний «NOVO»</p>
          </div>
        </div>
      </footer>
    </>
  )
}