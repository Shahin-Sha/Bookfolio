import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Nav1 from '../Components/Nav1';
import axios from 'axios';



export default function HomeAdmin() {
  const [authorName, setAuthorName] = useState('');
  const [bookImage, setBookImage] = useState('');

  const handleAuthorNameChange = (e) => {
    setAuthorName(e.target.value);
  };

  const handleBookImageChange = (e) => {
    setBookImage(e.target.value);
  };

  const handleAddProduct = () => {
    const newProduct = {
      authorName: authorName,
      bookImage: bookImage,
    };

    axios.post('http://localhost:3001/api/products', newProduct)
      .then((response) => {
        console.log(response.data);
        // Handle success, e.g., show a success message or update the product list
      })
      .catch((error) => {
        console.error(error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div>
      <Nav1 />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Author Name</Form.Label>
                    <Form.Control type="text" value={authorName} onChange={handleAuthorNameChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Book Image URL</Form.Label>
                    <Form.Control type="text" value={bookImage} onChange={handleBookImageChange} />
                  </Form.Group>
                  <Button variant="primary" onClick={handleAddProduct}>Add Product</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
