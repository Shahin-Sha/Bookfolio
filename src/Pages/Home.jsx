import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Nav1 from '../Components/Nav1';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the products from the server
    axios.get("http://localhost:3001/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Nav1 />
      <Container>
        <div style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
          <Row>
            {products.map((product, index) => (
              <Col key={index}>
                <Card style={{ borderWidth: '0px', marginTop: '120px' }}>
                  <Card.Img
                    variant="top"
                    src={product.bookImage}
                    style={{ width: '150px', height: '250px', margin: 'auto' }}
                  />
                  <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>{product.authorName}</Card.Title>
                  </Card.Body>
                  <div
                    style={{
                      height: '9px',
                      width: '250px',
                      backgroundColor: 'black',
                      borderRadius: '100px',
                      margin: 'auto'
                    }}
                  ></div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
          <Row>
            {products.map((product, index) => (
              <Col key={index}>
                <Card style={{ borderWidth: '0px', marginTop: '120px' }}>
                  <Card.Img
                    variant="top"
                    src={product.bookImage}
                    style={{ width: '150px', height: '250px', margin: 'auto' }}
                  />
                  <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>{product.authorName}</Card.Title>
                  </Card.Body>
                  <div
                    style={{
                      height: '9px',
                      width: '250px',
                      backgroundColor: 'black',
                      borderRadius: '100px',
                      margin: 'auto'
                    }}
                  ></div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
