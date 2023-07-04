import React, { useEffect, useState } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import Nav1 from '../Components/Nav1';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function FictionBooks() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Hook for navigation
  const [libraryBooks, setLibraryBooks] = useState([]);


  useEffect(() => {
    // Fetch the products from the server
    axios
      .get('http://localhost:3001/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredProducts = products.filter(
    (product) => product.bookCategory === 'Romance'
  );

  // Handle card click
  const handleCardClick = (productId) => {
    // Navigate to the BookDetail page with the selected product ID
    navigate(`/BookDetail/${productId}`);
  };

  const handleAddToLibrary = (productId) => {
    // Add the selected product to the library
    setLibraryBooks((prevLibraryBooks) => [...prevLibraryBooks, productId]);
    navigate(`/Library/${productId}`);
  };


  return (
    <div
      style={{
        backgroundImage: 'url(https://i.postimg.cc/59qNXS4T/bg-bkfl-1.png)',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Nav1></Nav1>

      <div
        style={{
          fontFamily: 'sans-serif',
          fontWeight: '700',
          fontSize: '70px',
          textAlign: 'center',
          paddingTop: '150px',
        }}
      >
        Romance
      </div>
      <Container
        style={{
          whiteSpace: 'nowrap',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <Row>
          {filteredProducts.map((product, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{
                borderWidth: '0px',
                marginBottom: '80px',
              }}
            >
              <Card.Img
                variant="top"
                src={product.bookImage}
                style={{ width: '150px', height: '250px', marginBottom: '50px', marginLeft: '80px' }}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>
                  {product.authorName}
                </Card.Title>
                {/* <Button style={{ marginLeft: '70px', marginRight: '15px', marginTop: '5px' }}   onClick={() => handleAddToLibrary(product)}
                >{product.bookPrice}</Button> */}
                <Button style={{ marginTop: '5px',marginLeft:'100px' }} onClick={() => handleCardClick(product._id)} // Pass the product ID to handleCardClick
                >View Details</Button>
              </Card.Body>
              <div
                style={{
                  height: '9px',
                  width: '250px',
                  backgroundColor: 'black',
                  borderRadius: '100px',
                  margin: 'auto',
                }}
              ></div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
