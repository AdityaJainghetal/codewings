import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <MDBFooter className='text-center text-lg-start text-muted' style={{ backgroundColor: "#003366", color: "white", fontSize: "14px", padding: "30px 20px" }}>
      <section style={{ color: "white" }}>
        <MDBContainer className='text-center text-md-start mt-4'>
          <MDBRow className='mt-3'>
            <MDBCol md="4" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-3'>
                <MDBIcon icon="gem" className="me-2" />
                Dress Collection
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-3'>Products</h6>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>Home</a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>About Us</a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>Portfolio</a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>Services</a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-3'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>Clients</a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>Team</a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>Career</a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>Testimonials</a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-3'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Bhopal 
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 8893223725
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 91 9328973734
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div>
            <a className='text-reset fw-bold' href='https://mdbootstrap.com/' style={{ textDecoration: 'none' }}>© {currentYear} Copyright: E-commerce.com</a>
          </div>
          <div className="mt-2">
            <a href='#!' className='text-reset me-3'><MDBIcon fab icon="facebook-f" /></a>
            <a href='#!' className='text-reset me-3'><MDBIcon fab icon="twitter" /></a>
            <a href='#!' className='text-reset me-3'><MDBIcon fab icon="linkedin-in" /></a>
            <a href='#!' className='text-reset'><MDBIcon fab icon="instagram" /></a>
          </div>
        </div>
      </section>
    </MDBFooter>
  );
}

export default Footer;