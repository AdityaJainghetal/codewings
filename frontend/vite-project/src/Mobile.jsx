import { Container, Row, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import { addtoCart } from "./CardSlice";

const Mobile=()=> {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);
  const indexOfLastItem = currentPage * rowPerPage;
  const indexOfFirstItem = indexOfLastItem - rowPerPage;
  const totalPages = Math.ceil(products.length / rowPerPage);
 
  
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const dispatch = useDispatch()

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  const navigate = useNavigate()
  const loadData = async () => {
    try {
      
      let api = "http://localhost:8000/products/productdisplay?productbrand=Mobile";
      
          

      const response = await axios.get(api);
      console.log(response.data)

      if (response.data && response.data.length > 0) {
        setProducts(response.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);


  const proDisplay=(id)=>{
    navigate(`/viewProduct/${id}`)
 }








 const proAns = currentItems.map((item) => (
    <>


<Card style={{  width: '18rem' , backgroundColor:"skyblue", cursor:"pointer",margin:"auto", marginTop:"20px"}}>
      <Card.Img variant="top"
     onClick={()=>{proDisplay(item._id)}}
        src={`http://localhost:8000/${item.defaultImage}`}
        style={{ height: "200px" }}/>
      
      <Card.Body>
        <Card.Title>{item.productname}</Card.Title>
        <Card.Text>
        ₹{item.productprice}
        </Card.Text>
        <Button variant="primary"
        onClick={()=>{dispatch(addtoCart({id:item._id,name:item.productname,brand:item.productbrand, category:item.productcategory, price:item.productprice, image:item.defaultImage,qnty:1}))}}
        
        >Add to Cart</Button>
      </Card.Body>
    </Card>
    </>
    
  ));

  return (
    <>
      <div className="display-cards-page">
        <Container>
          <h2 className="text-center my-4 section-title">
            Our Exclusive Products
          </h2>
          <Row>
            <div className="product">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="title">
                      <h2>
                        Our <strong className="black">Products</strong>
                      </h2>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-bg">
              <div className="product-bg-white">
                <div className="container">
                  <div className="row">{proAns}</div>
                </div>
                <div className="pagination">
                <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button key={index} onClick={() => handlePageClick(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                    {index + 1}
                  </button>
                ))}
                <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
              </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Mobile;