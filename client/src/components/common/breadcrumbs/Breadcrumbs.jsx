import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './breadcrumbs.scss'

function Breadcrumbs() {
  return (
    <Container fluid className='breadcrumbContainer d-flex flex-row align-items-center pt-3 px-md-5'>
            <Breadcrumb className='d-flex flex-row align-items-center'>
                <Breadcrumb.Item href="" className='d-flex flex-row gap-2'><i class="bi bi-house"></i>Home</Breadcrumb.Item>
                <Breadcrumb.Item href="">Shop</Breadcrumb.Item>
                <Breadcrumb.Item active>Shop Grids</Breadcrumb.Item>
            </Breadcrumb>
    </Container>
  );
}

export default Breadcrumbs;