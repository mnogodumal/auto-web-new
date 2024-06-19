import classNames from 'classnames';

export default function Button({ text, className, onClick }) {
  const defaultClasses = 'rounded-[8px] py-[20px] px-[32px] bg-[--accent---main-green] font-[500] text-[16px] text-[var(--general---white)] leading-[150%] uppercase';
  return (
    <button className={classNames(defaultClasses, className)} onClick={onClick}>
      {text}
    </button>
  );
}

