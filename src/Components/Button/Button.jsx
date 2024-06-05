import classNames from 'classnames';

export default function Button({ text, className }) {
  const defaultClasses = 'rounded-[8px] py-[20px] px-[32px] bg-[--accent---main-green] font-[700] text-[16px] leading-[150%] uppercase';
  return (
    <button className={classNames(defaultClasses, className)}>
      {text}
    </button>
  );
}

