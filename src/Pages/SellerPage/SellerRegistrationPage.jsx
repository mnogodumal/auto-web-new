import Footer from "../../Components/Footer/Footer";
import React from 'react';
import HeaderSeller from "../../Components/Header/HeaderSeller";
import SellerRegForm from "../../Components/Form/SellerRegForm";

export default function SellerRegistrationPage() {
  return (
    <>
      <HeaderSeller />
      <section className="pt-[90px] pb-[160px] bg-[#F9F9F9]">
        <div className="container">
          <SellerRegForm />
        </div>
      </section>
      <Footer />
    </>
  )
}