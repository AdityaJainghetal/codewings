import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBNavbarBrand,
  MDBFooter,
  MDBIcon
} from 'mdb-react-ui-kit';

const AdminHome = () => {
    const [adminuser, setAdminUser ] = useState("");
  
    useEffect(() => {
      setAdminUser (localStorage.getItem("adminid"));
    }, []);





  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      <MDBNavbar dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <MDBIcon icon='cogs' className='me-2' /> {/* Icon for Admin Dashboard */}
            Admin Dashboard   Welcome: {adminuser}
          </MDBNavbarBrand>
          <MDBBtn color='light' onClick={logout}>
        
          
        
            <MDBIcon icon='sign-out-alt' className='me-1' /> Logout
          </MDBBtn>
        </MDBContainer>
      </MDBNavbar>

      <div>
        <Outlet />
      </div>


      <div className="Footer">
      <MDBFooter bgColor='light' className='text-center text-lg-left' style={{ position: 'fixed', bottom: '0px', width: '100%' }}>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
      </div>
    </>
  );
}

export default AdminHome;