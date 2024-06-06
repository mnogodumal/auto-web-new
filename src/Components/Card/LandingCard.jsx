import classNames from "classnames";

// classNames обязателен для смешанных стилей? когда делаешь что-то базовым, и что-то передаешь?

export default function LandingCard({ text, img, className }) {
  return (
    <>
      <div className="w-[289px] h-[410px] relative">
        <img src={img} alt="phote" />
        <p className={classNames('absolute top-[315px] left-[32px] font-[200] text-[24px] leading-[150%] text-[var(--general---white)]', className)}>{text}</p>
      </div>
    </>
  )
}