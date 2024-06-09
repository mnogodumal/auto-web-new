export default function LandingPriceCard({ tarif, price, ad, sign, month }) {
  return (
    <>
      <div className="w-[289px] h-[368px] hover:bg-[#1b1b1e] bg-[#141416] flex flex-col items-center p-[10px] rounded-[8px] cursor-pointer hover:border-none hover:bg-[var(--accent---main-green)] ">
        <p className="font-[400] text-[16px] leading-[150%] text-center text-[var(--general---white)] mt-[86px]">{tarif}</p>
        <div className="mt-[20px] flex items-baseline gap-[3px]">
          <p className="font-[300] text-[14px] leading-[171%] text-center text-[#676769] ">{sign}</p>
          <p className="font-[200] text-[40px] leading-[150%] text-[var(--general---white)]">{price}</p>
          <p className="font-[300] text-[14px] leading-[171%] text-center text-[#676769] ">{month}</p>
        </div>
        <p className="font-[200] text-[18px] leading-[133%] text-center text-[var(--accent---main-green)] mt-[8px]">{ad}</p>
        <div className="mt-[40px]">
          <svg className="rounded-[999px] border-solid border-[2px] border-[var(--accent---main-green)]" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 36L32 28L24 20" stroke="white" stroke-width="3" />
          </svg>
        </div>
      </div>
    </>
  )
}