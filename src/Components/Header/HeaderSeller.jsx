import Button from "../Button/Button";

export default function HeaderSeller() {
  return (
    <>
      <header className="bg-[var(--general---white)] py-[32px]">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="font-[700] text-[30px] leading-[80%] text-[var(--text---main)] ">
              <a href="/">NOVO SELLER</a>
            </div>
            <Button text={'Перейти на NOVO'} />
          </div>
        </div>
      </header>
    </>

  )
}