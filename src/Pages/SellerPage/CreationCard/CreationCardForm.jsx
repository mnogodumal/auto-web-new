import { useForm } from "react-hook-form";

export default function CreationCardForm() {

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  })

  return (
    <>
      <div>
        <div>
          <div>
            <p className="font-[300] text-[24px] leading-[150%] ">Обзор транспортного средства</p>
          </div>
          <form className="grid gap-x-[20px] gap-y-[16px] mt-[24px] grid-custom ">
            <div>
              <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Категория</p>
              <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type="text" />
            </div>
            <div>
              <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Год</p>
              <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type="text" />
            </div>
            <div>
              <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Марка</p>
              <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type="text" />
            </div>
            <div>
              <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Пробег</p>
              <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type="text" />
            </div>
            <div>
              <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Модель</p>
              <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type="text" />
            </div>
            <div>
              <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Страна</p>
              <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type="text" />
            </div>
            <div>
              <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Цена</p>
              <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type="text" />
            </div>
            <div>
              <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Вес</p>
              <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type="text" />
            </div>
          </form>
        </div>



        <div></div>
        <div></div>
      </div>
    </>
  )
}