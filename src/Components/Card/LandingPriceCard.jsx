export default function LandingPriceCard({ tarif, price, ad }) {
  return (
    <>
      <div className="w-[289px] h-[368px] bg-[#1b1b1e] flex flex-col items-center p-[10px] rounded-[8px] cursor-pointer">
        <p className="font-[400] text-[16px] leading-[150%] text-center text-[var(--general---white)] mt-[86px]">{tarif}</p>
        <div className="mt-[20px]">
          <p>₴</p>
          <p className="font-[200] text-[40px] leading-[150%] text-[var(--general---white)]">{price}</p>
        </div>
        <p className="font-[200] text-[18px] leading-[133%] text-center text-[var(--accent---main-green)] mt-[8px]">{ad}</p>
        <div className="mt-[40px]">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="56" height="56" rx="28" fill="#009661" />
            <path d="M24 36L32 28L24 20" stroke="white" stroke-width="3" />
          </svg>
        </div>
      </div>
    </>
  )
}