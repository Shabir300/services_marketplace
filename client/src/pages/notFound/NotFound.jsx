import React from 'react';
import Header from '../../components/common/header/Header';
import Footer from '../../components/common/footer/Footer';
import NotFound from '../../components/notFound/NotFound';


const notFoundPage = () => {
  return (
    <div>
        <Header />
        <NotFound />
        <Footer />
    </div>
  )
}

export default notFoundPage