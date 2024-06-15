export default function LandingCardStart({ img, step, text }) {
  return (
    <>
      <div className='flex items-center '>
        <div className='w-[816px] h-[458px]'>
          <img src={img} alt="phote" />
        </div>
        <div className='ml-[123px] '>
          <p className='font-[200] text-[16px] leading-[150%] text-[#858586] '>{step}</p>
          <p className='font-[200] text-[24px] leading-[150%] text-[var(--general---white)] mt-[8px]'>{text}</p>
        </div>
      </div>
    </>
  )
}