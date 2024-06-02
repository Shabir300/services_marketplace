import React from 'react'
import Header from '../../../components/common/header/Header'
import Breadcrumbs from '../../../components/common/breadcrumbs/Breadcrumbs';
import ForgotPassword from '../../../components/forgotPassword/ForgotPassword';
import Footer from '../../../components/common/footer/Footer';

export const ForgotPasswordPage = () => {
  return (
    <div>
        <Header />
        <Breadcrumbs />
        <ForgotPassword />
        <Footer />
    </div>
  )
}
