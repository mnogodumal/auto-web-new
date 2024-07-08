import classNames from 'classnames';
import { useContext } from 'react';
import { ModalContext } from '../PopUp/PopUpLandingContext';

export default function Button({ text, className, onClick, disabled }) {
  const defaultClasses = 'rounded-[8px] py-[20px] px-[32px] bg-[--accent---main-green] font-[500] text-[16px] text-[var(--general---white)] leading-[150%] uppercase'

  const { openModal } = useContext(ModalContext)

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      openModal()
    }
  }

  return (
    <button className={classNames(defaultClasses, className)} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
}

