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
          <div className='block bg-[#e8e9e8] w-[100%] h-[1px] mt-[24px]'>
          </div>
          <div className='flex justify-between mt-[16px]'>
            <div className='flex items-center w-[240px] font-[300] text-[14px] leading-[150%] text-[var(--text---secondary)] gap-[8px]'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 18C15.0111 18 14.0444 17.7068 13.2222 17.1574C12.3999 16.6079 11.759 15.8271 11.3806 14.9134C11.0022 13.9998 10.9031 12.9945 11.0961 12.0246C11.289 11.0546 11.7652 10.1637 12.4645 9.46447C13.1637 8.76521 14.0546 8.289 15.0246 8.09608C15.9945 7.90315 16.9998 8.00217 17.9134 8.3806C18.8271 8.75904 19.6079 9.39991 20.1574 10.2222C20.7068 11.0444 21 12.0111 21 13C20.9984 14.3256 20.4711 15.5964 19.5338 16.5338C18.5964 17.4711 17.3256 17.9984 16 18ZM16 10C15.4067 10 14.8266 10.176 14.3333 10.5056C13.8399 10.8352 13.4554 11.3038 13.2284 11.852C13.0013 12.4001 12.9419 13.0033 13.0576 13.5853C13.1734 14.1672 13.4591 14.7018 13.8787 15.1213C14.2982 15.5409 14.8328 15.8266 15.4147 15.9424C15.9967 16.0581 16.5999 15.9987 17.1481 15.7716C17.6962 15.5446 18.1648 15.1601 18.4944 14.6667C18.8241 14.1734 19 13.5933 19 13C18.9992 12.2046 18.6829 11.442 18.1204 10.8796C17.558 10.3171 16.7954 10.0008 16 10Z" fill="#009661" />
                <path d="M16 30L7.56401 20.051C7.44679 19.9016 7.33079 19.7513 7.21601 19.6C5.77499 17.7018 4.99652 15.3832 5.00001 13C5.00001 10.0826 6.15894 7.28473 8.22184 5.22183C10.2847 3.15893 13.0826 2 16 2C18.9174 2 21.7153 3.15893 23.7782 5.22183C25.8411 7.28473 27 10.0826 27 13C27.0035 15.3821 26.2254 17.6996 24.785 19.597L24.784 19.6C24.784 19.6 24.484 19.994 24.439 20.047L16 30ZM8.81201 18.395C8.81401 18.395 9.04601 18.703 9.09901 18.769L16 26.908L22.91 18.758C22.954 18.703 23.188 18.393 23.189 18.392C24.3662 16.8411 25.0023 14.947 25 13C25 10.6131 24.0518 8.32387 22.364 6.63604C20.6761 4.94821 18.387 4 16 4C13.6131 4 11.3239 4.94821 9.63605 6.63604C7.94822 8.32387 7.00001 10.6131 7.00001 13C6.99791 14.9482 7.63479 16.8434 8.81301 18.395H8.81201Z" fill="#009661" />
              </svg>
              <span>
                Garage van Nierop Netherlands
              </span>
            </div>
            <div className='font-[400] text-[30px] leading-[120%] text-[var(--text---main)] '>
              13 900€
            </div>
          </div>
        </div>
      </div>
    </>
  )
}