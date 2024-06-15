export default function LandingCardStartBlack({ img, step, text }) {
  return (
    <>
      <div className='flex items-center justify-end '>
        <div className=''>
          <p className='font-[200] text-[16px] leading-[150%] text-[#858586] '>{step}</p>
          <p className='font-[200] text-[24px] leading-[150%] text-[var(--general---white)] mt-[8px]'>{text}</p>
        </div>
        <div className='w-[816px] h-[458px] ml-[251px]'>
          <img src={img} alt="phote" />
        </div>
      </div>
    </>
  )
}