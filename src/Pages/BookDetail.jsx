import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import axios from 'axios';
import Nav1 from '../Components/Nav1';
// import { Link } from 'react-router-dom';

export default function BookDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details from the server based on the productId
    axios
      .get(`http://localhost:3001/api/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Nav1></Nav1>
      <Container>
        <Card style={{ marginTop: '50px', width: '50vh' }}>
          <div style={{ display: 'flex' }}>
            <Card.Img variant="top" src={product.bookImage} style={{ width: '50%' }} />
            <div style={{ flex: 1, padding: '1rem' }}>
              <Card.Title>{product.authorName}</Card.Title>
              <div>{product.bookDetail}</div>
              <a href="https://archive.org/details/functionofpoetot00loweiala/page/n7/mode/2up?ref=ol&view=theater" target="_blank">
                View Book PDF
              </a>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
