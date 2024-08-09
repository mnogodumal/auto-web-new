export default function CreationCardForm() {
  return (
    <>
      <div className="bg-[var(--general---white)] rounded-[8px] py-[40px] pl-[45px] ">
        <div>
          <div>
            <p>Обзор транспортного средства</p>
          </div>
          <form>
            <div>
              <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">ФИО</p>
              <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type="text" />
              {/* <div className="h-[20px] font-[200] text-[14px] text-[#eb5757]">{errors?.name && <p>{errors?.name?.message || 'Error!!!'}</p>}
              </div> */}
            </div>
          </form>
        </div>



        <div></div>
        <div></div>
      </div>
    </>
  )
}

