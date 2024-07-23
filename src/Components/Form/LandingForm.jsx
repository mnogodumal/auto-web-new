import { useForm } from "react-hook-form";
import Button from "../Button/Button";

export default function LandingForm({ className }) {

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <>
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        <input className=" w-[240px] h-[33px] border-b-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[#858586]" placeholder="Ваше имя" type="text" {...register('firstname', {
          required: 'Поле обязательно к заполнению!',
          minLength: {
            value: 3,
            message: 'Минимум 3 символа'
          }
        })} />
        <div className="h-[30px] font-[200] text-[14px] text-[#eb5757]">{errors?.firstname && <p>{errors?.firstname?.message || 'Error!!!'}</p>}</div>
        <input className=" w-[240px] h-[33px] border-b-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[#858586]" placeholder="E-mail адрес" type="text" {...register('email', {
          required: 'Поле обязательно к заполнению!',
          pattern: {
            value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
            message: 'Введите почту корректно'
          }
        })} />
        <div className="h-[30px] font-[200] text-[14px] text-[#eb5757]">{errors?.email && <p>{errors?.email?.message || 'ERR!!!'}</p>}</div>
        <input className=" w-[240px] h-[33px] border-b-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[#858586]" placeholder="Номер телефона" type="text" {...register('number', {
          required: 'Поле обязательно к заполнению!',
          minLength: {
            value: 11,
            message: 'Минимум 11 цифр'
          },
        })} />
        <div className="h-[30px] font-[200] text-[14px] text-[#eb5757]">{errors?.number && <p>{errors?.number?.message || 'Error!!!'}</p>}</div>
        <Button text={'Перезвоните мне!'} className={'mt-[34px] w-[240px]'} disabled={!isValid} />
      </form>
    </>
  )
}


