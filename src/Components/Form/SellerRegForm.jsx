import Button from "../Button/Button";
import { useForm } from "react-hook-form";

export default function SellerRegForm() {
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
      <div className="flex justify-center">
        <div className="p-[60px]  bg-[var(--general---white)] w-[924px] rounded-[8px]">
          <div className="flex flex-col items-center">
            <h1 className="font-[500] text-[45px] leading-[150%] text-[var(--text---main)]">Регистрация продавца</h1>
            <p className="m-[8px] font-[400] text-[16px] leading-[150%] text-[var(--text---secondary)]">Заполните указаные поля, чтобы создать акаунт продавца</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-[40px]">
              <div>
                <p className="font-[300] text-[16px] leading-[150%] text-[var(--text---main)]">Акаунт</p>
              </div>
              <div className="mt-[12px] flex gap-[20px]">
                <div>
                  <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">E-mail</p>
                  <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type='email' {...register('email', {
                    required: 'Поле обязательно к заполнению!',
                    pattern: {
                      value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                      message: 'Введите почту корректно'
                    }
                  })} />
                  <div className="h-[30px] font-[200] text-[14px] text-[#eb5757]">{errors?.email && <p>{errors?.email?.message || 'Error!!!'}</p>}</div>
                </div>
                <div>
                  <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Пароль</p>
                  <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type='password'  {...register('password', {
                    required: 'Поле обязательно к заполнению!',
                    minLength: {
                      value: 3,
                      message: 'Минимум 3 символа'
                    }
                  })} />
                  <div className="h-[30px] font-[200] text-[14px] text-[#eb5757]">{errors?.password && <p>{errors?.password?.message || 'Error!!!'}</p>}</div>
                </div>
              </div>
            </div>
            <div className="mt-[40px]">
              <div>
                <p className="font-[300] text-[16px] leading-[150%] text-[var(--text---main)]">Про компанию</p>
              </div>
              <div className="mt-[12px]">
                <div className="flex gap-[20px]">
                  <div>
                    <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Название компании</p>
                    <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type="text" {...register('namecomp', {
                      required: 'Поле обязательно к заполнению!',
                      minLength: {
                        value: 3,
                        message: 'Минимум 3 символа'
                      }
                    })} />
                    <div className="h-[30px] font-[200] text-[14px] text-[#eb5757]">{errors?.namecomp && <p>{errors?.namecomp?.message || 'Error!!!'}</p>}</div>
                  </div>
                  <div>
                    <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Страна</p>
                    <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type='text'  {...register('country', {
                      required: 'Поле обязательно к заполнению!',
                      minLength: {
                        value: 3,
                        message: 'Минимум 3 символа'
                      }
                    })} />
                    <div className="h-[30px] font-[200] text-[14px] text-[#eb5757]">{errors?.country && <p>{errors?.country?.message || 'Error!!!'}</p>}</div>
                  </div>
                </div>
                <div className="flex gap-[20px]">
                  <div>
                    <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Город</p>
                    <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type="text" {...register('city', {
                      required: 'Поле обязательно к заполнению!',
                      minLength: {
                        value: 3,
                        message: 'Минимум 3 символа'
                      }
                    })} />
                    <div className="h-[30px] font-[200] text-[14px] text-[#eb5757]">{errors?.city && <p>{errors?.city?.message || 'Error!!!'}</p>}</div>
                  </div>
                  <div>
                    <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Адрес</p>
                    <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type='text'  {...register('address', {
                      required: 'Поле обязательно к заполнению!',
                      minLength: {
                        value: 3,
                        message: 'Минимум 3 символа'
                      }
                    })} />
                    <div className="h-[30px] font-[200] text-[14px] text-[#eb5757]">{errors?.address && <p>{errors?.address?.message || 'Error!!!'}</p>}</div>
                  </div>
                </div>
                <div className="flex gap-[20px]">
                  <div>
                    <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Почнотвый индекс</p>
                    <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type="text" {...register('index', {
                      required: 'Поле обязательно к заполнению!',
                      minLength: {
                        value: 3,
                        message: 'Минимум 3 символа'
                      }
                    })} />
                    <div className="h-[30px] font-[200] text-[14px] text-[#eb5757]">{errors?.index && <p>{errors?.index?.message || 'Error!!!'}</p>}</div>
                  </div>
                  <div>
                    <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Мобильный телефон</p>
                    <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type='text'  {...register('phonecomp', {
                      required: 'Поле обязательно к заполнению!',
                      minLength: {
                        value: 3,
                        message: 'Минимум 3 символа'
                      }
                    })} />
                    <div className="h-[30px] font-[200] text-[14px] text-[#eb5757]">{errors?.phonecomp && <p>{errors?.phonecomp?.message || 'Error!!!'}</p>}</div>
                  </div>
                </div>
                <div className="flex gap-[20px]">
                  <div>
                    <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Веб-сайт</p>
                    <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type='url' {...register('web', {
                      required: 'Поле обязательно к заполнению!',
                      minLength: {
                        value: 3,
                        message: 'Минимум 3 символа'
                      }
                    })} />
                    <div className="h-[30px] font-[200] text-[14px] text-[#eb5757]">{errors?.web && <p>{errors?.web?.message || 'Error!!!'}</p>}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[40px]">
              <div>
                <p className="font-[300] text-[16px] leading-[150%] text-[var(--text---main)]">Контактное лицо</p>
              </div>
              <div className="mt-[12px] flex gap-[20px]">
                <div>
                  <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">ФИО</p>
                  <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type="text" {...register('name', {
                    required: 'Поле обязательно к заполнению!',
                    minLength: {
                      value: 3,
                      message: 'Минимум 3 символа'
                    }
                  })} />
                  <div className="h-[30px] font-[200] text-[14px] text-[#eb5757]">{errors?.name && <p>{errors?.name?.message || 'Error!!!'}</p>}</div>
                </div>
                <div>
                  <p className="font-[200] text-[14px] leading-[171%] text-[var(--text---secondary)] ">Мобильный телефон</p>
                  <input className="mt-[8px] w-[392px] h-[56px] border-2 border-b-[#a2a5a6] border-opacity-[0.2] bg-inherit outline-none font-[200] text-[14px] leading-[171%] text-[var(--text---main)] py-[16px] px-[20px]" type='text'  {...register('phone', {
                    required: 'Поле обязательно к заполнению!',
                    minLength: {
                      value: 3,
                      message: 'Минимум 3 символа'
                    }
                  })} />
                  <div className="h-[30px] font-[200] text-[14px] text-[#eb5757]">{errors?.phone && <p>{errors?.phone?.message || 'Error!!!'}</p>}</div>
                </div>
              </div>
            </div>
            <div>


            </div>
            <Button text={'Продолжить'} />
          </form>
        </div>

      </div>
    </>
  )
}



