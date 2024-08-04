import rePhote from '../../image/Rectangle_112.png'

export default function SellerAdsCard() {
  return (
    <>
      <div className="p-[16px] bg-[var(--general---white)] w-[392px] rounded-[8px] ">
        <div className="w-[360px] h-[204px] rounded-[4px] ">
          <img src={rePhote} alt="" />
        </div>
        <div>
          <div className='mt-[12px]'>
            <p className='font-[200] text-[14px] leading-[150%] text-[var(--text---secondary)] '>Закрытые пассажирские автомобили</p>
            <p className='font-[300] text-[20px] leading-[150%] text-[var(--text---main)] mt-[8px] '>Setra 317 UL-GT/Klima/6 Gang/65 Sitz/Tüv:12.2020/Euro3</p>
          </div>
          <div className='mt-[16px] flex gap-[10px]'>
            <div className='py-[2px] px-[8px] rounded-[4px] w-fit graycard font-[200] text-[14px] leading-[171%] text-[var(--text---main)]'>2011</div>
            <div className='py-[2px] px-[8px] rounded-[4px] w-fit graycard font-[200] text-[14px] leading-[171%] text-[var(--text---main)]'>4500 kg</div>
            <div className='py-[2px] px-[8px] rounded-[4px] w-fit graycard font-[200] text-[14px] leading-[171%] text-[var(--text---main)]'>320 000 km</div>
          </div>
        </div>
      </div>
    </>
  )
}