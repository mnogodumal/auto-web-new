import classNames from 'classnames';
import { useContext } from 'react';
import { ModalContext } from '../PopUp/PopUpLandingContext';
import { Link } from 'react-router-dom';

export default function Button({ text, className, onClick, disabled, to }) {
  const defaultClasses = 'rounded-[8px] py-[20px] px-[32px] bg-[--accent---main-green] font-[500] text-[16px] text-[var(--general---white)] leading-[150%] uppercase'

  const { openModal } = useContext(ModalContext)

  const buttonContent = (
    <button className={classNames(defaultClasses, className)} onClick={() => { openModal() }} style={{ opacity: disabled ? '0.5' : '1' }} disabled={disabled}>
      {text}
    </button>
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

