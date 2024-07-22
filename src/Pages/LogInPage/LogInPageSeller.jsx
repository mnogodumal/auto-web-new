import Footer from "../../Components/Footer/Footer";
import SellerLogInForm from "../../Components/Form/SellerLogInForm";
import HeaderSeller from "../../Components/Header/HeaderSeller";

export default function LogInPageSeller() {
  return (
    <>
      <HeaderSeller />
      <section className="pt-[90px] pb-[150px] bg-[#F9F9F9]" style={{ height: 'calc(100vh - 450px)' }}>
        <div className="container">
          <SellerLogInForm />
          <div className="flex justify-center mt-[32px] ">
            <p className="font-[300] text-[16px] leading-[150%] text-[var(--text---main)] ">
              Нет аккаунта?
              <a className="font-[500] text-[14px] leading-[171%] uppercase text-[var(--accent---main-green)] ml-[16px]" href="/">РЕгистрация</a>
            </p>
          </div>
        </div>
      </section >
      <Footer />
    </>
  )
}