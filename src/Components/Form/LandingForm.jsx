import { useForm } from "react-hook-form";
import Button from "../Button/Button";

export default function LandingForm() {

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('firstname', {
          required: 'Поле обязательно к заполнению!',
          minLength: {
            value: 3,
            message: 'Минимум 3 символа'
          }
        })} />
        <div className="h-[40px] text-[#eb5757]">{errors?.firstname && <p>{errors?.firstname?.message || 'Error!!!'}</p>}</div>
        <input type="mail" {...register('email', {
          required: 'Поле обязательно к заполнению!',
          minLength: {
            value: 5,
            message: 'Минимум 5 символа'
          },
          email: {
            value: '@',
            message: 'Наличие @'
          }
        })} />
        <div className="h-[40px] text-[#eb5757]">{errors?.email && <p>{errors?.email?.message || 'ERR!!!'}</p>}</div>
        <Button text={'Перезвоните мне!'} className={'mt-[40px]'} />
      </form>
    </>
  )
}


