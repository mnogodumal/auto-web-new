// import classNames from 'classnames';
import { useContext } from 'react';
import { ModalContext } from '../PopUp/PopUpLandingContext';
import { Link } from 'react-router-dom';

export default function ButtonBack({ to }) {

  const { openModal } = useContext(ModalContext)



  const buttonContent = (
    <>
      <button className="w-[61px] h-[24px] font-[400] text-[14px] leading-[171%] text-[var(--accent---main-green)] flex items-center gap-[12px]" onClick={() => { openModal() }}>
        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 1L2 5L6 9" stroke="#009661" stroke-width="2" />
        </svg>
        <p>Назад</p>
      </button>
    </>
  )


  if (to) {
    return (
      <Link to={to}>
        {buttonContent}
      </Link>
    )
  }

  return (
    buttonContent
  )
}