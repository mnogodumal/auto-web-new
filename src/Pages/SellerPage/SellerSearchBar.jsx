import Button from "../../Components/Button/Button";

export default function SellerSearchBar() {
  return (
    <>
      <div className="w-[1216px] p-[8px] bg-[var(--general---white)] rounded-[8px] flex justify-between ">
        <div className="flex gap-[8px] items-center ml-[24px] ">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85721 3.97138C4.29679 6.5318 4.29679 10.683 6.85721 13.2435C9.41762 15.8039 13.5689 15.8039 16.1293 13.2435C18.6897 10.683 18.6897 6.5318 16.1293 3.97138C13.5689 1.41097 9.41762 1.41097 6.85721 3.97138ZM4.63994 13.7321C2.1273 10.3807 2.39498 5.60518 5.44299 2.55717C8.78445 -0.784293 14.202 -0.784293 17.5435 2.55717C20.885 5.89863 20.885 11.3162 17.5435 14.6577C14.4955 17.7057 9.72002 17.9734 6.36859 15.4607L2.85004 18.9793C2.37269 19.4566 1.59875 19.4566 1.1214 18.9793C0.644048 18.5019 0.644048 17.728 1.1214 17.2506L4.63994 13.7321Z" fill="#009661" />
          </svg>
          <input className=" font-[300] text-[14px] leading-[171%] text-[var(--text---secondary)] outline-none w-[700px] " type="text" placeholder="Поиск по объявлениях" />
        </div>
        <div>
          <Button className={'text-[#28ad88] font-[500] text-[14px] leading-[171%] uppercase flex items-center gap-[12px] greenproz '} icon={<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0V14" stroke="url(#paint0_linear_163_9451)" stroke-width="2" />
            <path d="M14 7L0 7" stroke="url(#paint1_linear_163_9451)" stroke-width="2" />
            <defs>
              <linearGradient id="paint0_linear_163_9451" x1="7.5" y1="0" x2="7.5" y2="15.6528" gradientUnits="userSpaceOnUse">
                <stop stop-color="#28AD88" />
                <stop offset="1" stop-color="#239A79" />
              </linearGradient>
              <linearGradient id="paint1_linear_163_9451" x1="7" y1="7" x2="7" y2="8.11806" gradientUnits="userSpaceOnUse">
                <stop stop-color="#28AD88" />
                <stop offset="1" stop-color="#239A79" />
              </linearGradient>
            </defs>
          </svg>} text={'добавить объявление'} />
        </div>
      </div>
    </>
  )
}