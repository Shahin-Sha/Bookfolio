import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Nav1 from '../Components/Nav1';
import axios from 'axios';

const categoryOptions = ['Fiction', 'Thriller', 'Horror', 'Romance', 'Others']; // List of category options

export default function HomeAdmin() {
  const [authorName, setAuthorName] = useState('');
  const [bookImage, setBookImage] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const [authorImage, setAuthorImage] = useState('');
  const [bookPrice , setBookPrice] = useState('');
  const [bookDetail , setBookDetail] = useState('')
  const [bookName , setBookName] = useState('')

  const handleAuthorNameChange = (e) => {
    setAuthorName(e.target.value);
  };

  const handleBookImageChange = (e) => {
    setBookImage(e.target.value);
  };

  const handleBookCategoryChange = (e) => {
    setBookCategory(e.target.value);
  };

  const handleAuthorImageChange = (e) => {
    setAuthorImage(e.target.value);
  };

  const handleBookPriceChange = (e) => {
    setBookPrice(e.target.value);
  };

  const handleBookDetailChange = (e) => {
    setBookDetail(e.target.value);
  };

  const handleBookNameChange = (e) => {
    setBookName(e.target.value);
  };

  const handleAddProduct = () => {
    const newProduct = {
      authorName: authorName,
      bookImage: bookImage,
      bookCategory: bookCategory,
      authorImage: authorImage,
      bookPrice: bookPrice,
      bookDetail: bookDetail,
      bookName: bookName,
    };

    axios
      .post('http://localhost:3001/api/products', newProduct)
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
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control type="text" value={bookName} onChange={handleBookNameChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Author Name</Form.Label>
                    <Form.Control type="text" value={authorName} onChange={handleAuthorNameChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Author Image URL</Form.Label>
                    <Form.Control type="text" value={authorImage} onChange={handleAuthorImageChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Book Image URL</Form.Label>
                    <Form.Control type="text" value={bookImage} onChange={handleBookImageChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Book Details</Form.Label>
                    <Form.Control type="text" value={bookDetail} onChange={handleBookDetailChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Book Price</Form.Label>
                    <Form.Control type="text" value={bookPrice} onChange={handleBookPriceChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Book Category</Form.Label>
                    <Form.Control as="select" value={bookCategory} onChange={handleBookCategoryChange}>
                      <option value="">Select a category</option>
                      {categoryOptions.map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Button variant="primary" onClick={handleAddProduct}>
                    Add Product
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
