import CreationCardForm from "./CreationCardForm";
import CreationCardMediaFiles from "./CreationCardMediaFiles";

export default function CreationCard() {
  return (
    <>
      <section className="bg-[var(--general---white)] rounded-[8px] py-[40px] pl-[45px] ">
        <CreationCardForm />
        <CreationCardMediaFiles />
      </section>
    </>
  )
}