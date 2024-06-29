import { useForm } from "react-hook-form";

export default function LandingForm() {

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('firstname', {
          required: 'Поле обязательно к заполнению!',
          minLength: 2
        })} />
        <div className="h-[40px] text-red-600">{errors?.firstname && <p>{errors?.firstname?.message || 'Error!!!'}</p>}</div>
        <input type="submit" className="w-[100px] h-[100px] bg-slate-900" />
      </form>
    </>
  )
} 
