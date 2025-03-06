

// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import img1 from "./assets/img1.jpg";
//  import img2 from "./assets/img2.jpg";
//  import img3 from "./assets/img3.jpg";
//  import Carousel from 'react-bootstrap/Carousel';

// const Banner = () => {

//   const navigate = useNavigate();

//     const handleInput = () => {
//       navigate("/mens");
//     };
  
//     const handleInput2 = () => {
//       navigate("/womens");
//     };
  
  
//     const mobiles = () => {
//           navigate("/mobile")
//         }
//   return (
//     <>
//     <div style={{display:"flex", justifyContent:"center"}}>
//       <div style={{width:"20%", color:"black", paddingTop:"30px",backgroundColor:"whitesmoke"}}>
//         <ul>
//           <li >
//             <a onClick={handleInput2} style={{cursor:"pointer"}}>Womens</a> <br />
            
//             <a onClick={handleInput} style={{cursor:"pointer"}}>Mens</a><br />
//             <a onClick={mobiles} style={{cursor:"pointer"}}>Electronic</a><br />
//             <a style={{cursor:"pointer"}}>Home & lifestyle</a><br />
//             <a style={{cursor:"pointer"}}>Sports & outdoor</a><br />
//             <a style={{cursor:"pointer"}}>Body & Toys</a><br />
            
//             <a style={{cursor:"pointer"}}>Groceries & pets</a>
//             <a style={{cursor:"pointer"}}>Health & beauty</a>
//             </li>
       
//         </ul>

//       </div>


//       <div style={{width:"80%"}}>
//       <Carousel>
//          <Carousel.Item>
//           <img src={img1} alt="First slide" className="d-block w-100" style={{ height: "550px" }} />
//          </Carousel.Item>
//         <Carousel.Item>
//            <img src={img2} alt="Second slide" className="d-block w-100" style={{ height: "550px" }} />
//         </Carousel.Item>
//         <Carousel.Item>
//            <img src={img3} alt="Third slide" className="d-block w-100" style={{ height: "550px" }} />
//          </Carousel.Item>
//      </Carousel>

//     </div>
    
//     </div>
//     </>
//   )
// }

// export default Banner




import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
  const navigate = useNavigate();


  return (
    <>
      
       

        <div >
          <Carousel>
            <Carousel.Item>
              <img src={img1} alt="First slide" className="d-block w-100" style={{ height: "550px" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={img2} alt="Second slide" className="d-block w-100" style={{ height: "550px" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={img3} alt="Third slide" className="d-block w-100" style={{ height: "550px" }} />
            </Carousel.Item>
          </Carousel>
        </div>
      
    </>
  );
}

export default Banner;