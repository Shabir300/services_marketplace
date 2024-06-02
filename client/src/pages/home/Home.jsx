import React from 'react';
import Header from '../../components/common/header/Header';
import Breadcrumbs from '../../components/common/breadcrumbs/Breadcrumbs';
import Footer from '../../components/common/footer/Footer';
import SignUp from '../../components/common/signUp/SignUp';

const Home = () => {
  return (
    <>
        <Header />
        <Breadcrumbs />
        <SignUp />
        <Footer />
    </>
  )
}

export default Home;