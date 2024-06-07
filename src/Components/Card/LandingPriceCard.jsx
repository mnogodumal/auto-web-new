export default function LandingPriceCard({ tarif, price, ad }) {
  return (
    <>
      <div className="w-[289px] h-[368px] bg-[#1b1b1e] ">
        <p className="font-[400] text-[16px] leading-[150%] text-center text-[var(--general---white)] ">{tarif}</p>
        <p>{price}</p>
        <p>{ad}</p>
      </div>
    </>
  )
}