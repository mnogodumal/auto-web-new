import { useForm } from "react-hook-form"
import Button from "../Button/Button"
import { Link, useNavigate } from "react-router-dom"

export default function SellerLogInForm() {
  const navigate = useNavigate()

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = () => {
    navigate('/seller')
    reset()
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="px-[90px] py-[60px] bg-[var(--general---white)] w-[598px] rounded-[8px]">
          <div className="flex flex-col items-center">
            <h1 className="font-[500] text-[45px] leading-[150%] text-[var(--text---main)]">Вход в акаунт</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-[48px]">
              <div className="flex flex-col items-center">
                <div>
                  <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">E-mail</p>
                  <input className="mt-[8px] w-[418px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type='text' {...register('email', {
                    required: 'Поле обязательно к заполнению!',
                    pattern: {
                      value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                      message: 'Введите почту корректно'
                    }
                  })} />
                  <div className="h-[20px] font-[200] text-[14px] text-[#eb5757]">{errors?.email && <p>{errors?.email?.message || 'Error!!!'}</p>}</div>
                </div>
                <div>
                  <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Пароль</p>
                  <input className="mt-[8px] w-[418px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type='password' {...register('password', {
                    required: 'Поле обязательно к заполнению!',
                  })} />
                  <div className="h-[20px] font-[200] text-[14px] text-[#eb5757]">{errors?.password && <p>{errors?.password?.message || 'Error!!!'}</p>}</div>
                </div>
              </div>
            </div>
            <div className="flex gap-[12px] items-center">
              <input className="w-[18px] h-[18px] rounded-[4px] bg-[var(--accent---main-green)] caret-yellow-800 " type='checkbox' />
              <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Не выходить из системы</p>
            </div>
            <Button className={'block mt-[40px] mx-auto my-0'} text={'Продолжить'} disabled={!isValid} />
          </form>
        </div>
      </div>
    </>
  )
}