import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import './notFound.scss';
import Button from 'react-bootstrap/Button';


const NotFound = () => {
  return (
    <div className='notFound my-5'>
        <div>
            <Image src='/static/notFoundPage.png'  />
        </div>
        <div className='text-center d-flex flex-column '>
            <span className='h4'>404, Page not founds</span>
            <span className='fs-6 text-body-secondary'>Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken or the page is removed.</span>
        </div>

        <div className='d-flex flex-row align-items-center gap-3  mt-4 justify-content-center'>
            <Button className='text-white'> <i class="bi bi-arrow-left"></i> Go Back</Button>
            <Button className='text-primary bg-transparent'> <i class="bi bi-house"></i> Go to Home</Button>
        </div>
    </div>
  )
}

export default NotFound