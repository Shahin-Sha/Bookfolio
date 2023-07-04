import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Nav1 from '../Components/Nav1';
import axios from 'axios';
import "./Home.css";
import bookfolio from '../Images/bookfolio.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [visibleCards, setVisibleCards] = useState(7);
  const navigate = useNavigate();


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

  const handleShowMore1 = () => {
    setVisibleCards(visibleCards + 7);
    navigate('/FictionBooks');
  };
  const handleShowMore2 = () => {
    setVisibleCards(visibleCards + 7);
    navigate('/HorrorBooks');
  };
  const handleShowMore3 = () => {
    setVisibleCards(visibleCards + 7);
    navigate('/ThrillerBooks');
  };
  const handleShowMore4 = () => {
    setVisibleCards(visibleCards + 7);
    navigate('/RomanceBooks');
  };
  const handleShowMore5 = () => {
    setVisibleCards(visibleCards + 7);
    navigate('/OtherBooks');
  };

  const filteredProducts1 = products.filter(
    (product) => product.bookCategory === 'Fiction'
  );

  const filteredProducts2 = products.filter(
    (product) => product.bookCategory === 'Horror'
  );

  const filteredProducts3 = products.filter(
    (product) => product.bookCategory === 'Thriller'
  );

  const filteredProducts4 = products.filter(
    (product) => product.bookCategory === 'Romance'
  );

  const filteredProducts5 = products.filter(
    (product) => product.bookCategory === 'Others'
  );

  // Handle card click
  const handleCardClick = (productId) => {
    // Navigate to the BookDetail page with the selected product ID
    navigate(`/BookDetail/${productId}`);
  };

  return (
    <div>
      <Nav1 />
      <img src={bookfolio} alt="" style={{ width: '400px', margin: '35px 0px 0px 550px' }} />
      <div style={{ textAlign: 'center', fontSize: '30px', marginTop: '-26px' }}>perfect friend for readers</div>
      <div style={{ fontFamily: 'sans-serif', fontWeight: '700', fontSize: '70px', textAlign: 'center', paddingTop: '150px' }}>Best Books of 2023</div>
      <Container style={{ overflowX: 'scroll', whiteSpace: 'nowrap', display: 'flex', height: '350px', msOverflowStyle: 'none', marginTop: '20px', marginBottom: '20px' }}>
        {products.map((product, index) => (
          <div key={index} style={{ borderWidth: '0px', marginRight: '80px', marginLeft: '10px' }}>
            <Card.Img
              variant="top"
              src={product.bookImage}
              style={{ width: '150px', height: '250px', marginLeft: '50px' }}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center', margin: 'auto' }}>{product.authorName}</Card.Title>
              <Button style={{ marginTop: '5px', marginLeft: '70px' }} onClick={() => handleCardClick(product._id)} // Pass the product ID to handleCardClick
              >View Details</Button>
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
          </div>
        ))}
      </Container>

      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', padding: '0px 0px 25px 0px', color: 'white' }}>
        <div style={{ fontFamily: 'sans-serif', fontWeight: '700', fontSize: '45px', textAlign: 'center' }}>Fiction</div>
        <Container style={{ overflowX: 'scroll', whiteSpace: 'nowrap', display: 'flex', height: '350px', msOverflowStyle: 'none', marginTop: '20px' }}>
          {filteredProducts1.slice(0, visibleCards).map((product, index) => (
            <div key={index} style={{ borderWidth: '0px', marginRight: '80px', marginLeft: '10px', color: 'white' }}>
              <Card.Img
                variant="top"
                src={product.bookImage}
                style={{ width: '150px', height: '250px', marginLeft: '50px' }}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center', margin: 'auto' }}>{product.authorName}</Card.Title>
                <Button style={{ marginTop: '5px', marginLeft: '70px' }} onClick={() => handleCardClick(product._id)} // Pass the product ID to handleCardClick
                >View Details</Button>
              </Card.Body>
              <div
                style={{
                  height: '9px',
                  width: '250px',
                  backgroundColor: 'white',
                  borderRadius: '100px',
                  margin: 'auto'
                }}
              ></div>
            </div>
          ))}
          {visibleCards < products.length && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={handleShowMore1} style={{marginTop:'100px'}}>Show More</button>
            </div>
          )}
        </Container>
      </div>
      <div style={{ padding: '0px 0px 25px 0px' }}>
        <div style={{ fontFamily: 'sans-serif', fontWeight: '700', fontSize: '45px', textAlign: 'center' }}>Horror</div>
        <Container style={{ overflowX: 'scroll', whiteSpace: 'nowrap', display: 'flex', height: '350px', msOverflowStyle: 'none', marginTop: '20px' }}>
          {filteredProducts2.slice(0, visibleCards).map((product, index) => (
            <div key={index} style={{ borderWidth: '0px', marginRight: '80px', marginLeft: '10px' }}>
              <Card.Img
                variant="top"
                src={product.bookImage}
                style={{ width: '150px', height: '250px', marginLeft: '50px' }}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center', margin: 'auto' }}>{product.authorName}</Card.Title>
                <Button style={{ marginTop: '5px', marginLeft: '70px' }} onClick={() => handleCardClick(product._id)} // Pass the product ID to handleCardClick
                >View Details</Button>
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
            </div>
          ))}
          {visibleCards < products.length && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={handleShowMore2} style={{marginTop:'100px'}}>Show More</button>
            </div>
          )}
        </Container>
      </div>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', padding: '0px 0px 25px 0px', color: 'white' }}>
        <div style={{ fontFamily: 'sans-serif', fontWeight: '700', fontSize: '45px', textAlign: 'center' }}>Thriller</div>
        <Container style={{ overflowX: 'scroll', whiteSpace: 'nowrap', display: 'flex', height: '350px', msOverflowStyle: 'none', marginTop: '20px' }}>
          {filteredProducts3.slice(0, visibleCards).map((product, index) => (
            <div key={index} style={{ borderWidth: '0px', marginRight: '80px', marginLeft: '10px', color: 'white' }}>
              <Card.Img
                variant="top"
                src={product.bookImage}
                style={{ width: '150px', height: '250px', marginLeft: '50px' }}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center', margin: 'auto' }}>{product.authorName}</Card.Title>
                <Button style={{ marginTop: '5px', marginLeft: '70px' }} onClick={() => handleCardClick(product._id)} // Pass the product ID to handleCardClick
                >View Details</Button>
              </Card.Body>
              <div
                style={{
                  height: '9px',
                  width: '250px',
                  backgroundColor: 'white',
                  borderRadius: '100px',
                  margin: 'auto'
                }}
              ></div>
            </div>
          ))}
          {visibleCards < products.length && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={handleShowMore3} style={{marginTop:'100px'}}>Show More</button>
            </div>
          )}
        </Container>
      </div>
      <div style={{ padding: '0px 0px 25px 0px' }}>
        <div style={{ fontFamily: 'sans-serif', fontWeight: '700', fontSize: '45px', textAlign: 'center' }}>Romance</div>
        <Container style={{ overflowX: 'scroll', whiteSpace: 'nowrap', display: 'flex', height: '350px', msOverflowStyle: 'none', marginTop: '20px' }}>
          {filteredProducts4.slice(0, visibleCards).map((product, index) => (
            <div key={index} style={{ borderWidth: '0px', marginRight: '80px', marginLeft: '10px' }}>
              <Card.Img
                variant="top"
                src={product.bookImage}
                style={{ width: '150px', height: '250px', marginLeft: '50px' }}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center', margin: 'auto' }}>{product.authorName}</Card.Title>
                <Button style={{ marginTop: '5px', marginLeft: '70px' }} onClick={() => handleCardClick(product._id)} // Pass the product ID to handleCardClick
                >View Details</Button>
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
            </div>
          ))}
          {visibleCards < products.length && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={handleShowMore4} style={{marginTop:'100px'}}>Show More</button>
            </div>
          )}
        </Container>
      </div>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', padding: '0px 0px 25px 0px', color: 'white' }}>
        <div style={{ fontFamily: 'sans-serif', fontWeight: '700', fontSize: '45px', textAlign: 'center' }}>Others</div>
        <Container style={{ overflowX: 'scroll', whiteSpace: 'nowrap', display: 'flex', height: '350px', msOverflowStyle: 'none', marginTop: '20px' }}>
          {filteredProducts5.slice(0, visibleCards).map((product, index) => (
            <div key={index} style={{ borderWidth: '0px', marginRight: '80px', marginLeft: '10px', color: 'white' }}>
              <Card.Img
                variant="top"
                src={product.bookImage}
                style={{ width: '150px', height: '250px', marginLeft: '50px' }}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center', margin: 'auto' }}>{product.authorName}</Card.Title>
                <Button style={{ marginTop: '5px', marginLeft: '70px' }} onClick={() => handleCardClick(product._id)} // Pass the product ID to handleCardClick
                >View Details</Button>
              </Card.Body>
              <div
                style={{
                  height: '9px',
                  width: '250px',
                  backgroundColor: 'white',
                  borderRadius: '100px',
                  margin: 'auto'
                }}
              ></div>
            </div>
          ))}
          {visibleCards < products.length && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={handleShowMore5} style={{marginTop:'100px'}}>Show More</button>
            </div>
          )}
        </Container>
      </div>
      <div style={{ padding: '20px 0px 25px 0px' }}>
        <div style={{ fontFamily: 'sans-serif', fontWeight: '700', fontSize: '45px', textAlign: 'center' }}>Authors</div>
        <Container style={{ overflowX: 'scroll', whiteSpace: 'nowrap', display: 'flex', height: '350px', msOverflowStyle: 'none', marginTop: '20px' }}>
          {products.map((product, index) => (
            <div key={index} style={{ borderWidth: '0px', marginRight: '90px', marginLeft: '10px' }}>
              <Card.Img
                variant="top"
                src={product.authorImage}
                style={{ width: '170px', height: '170px', marginLeft: '0px', borderRadius: '1000px' }}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center', margin: 'auto' }}>{product.authorName}</Card.Title>
              </Card.Body>
            </div>
          ))}

        </Container>
      </div>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', padding: '60px 0px 25px 0px', color: 'white', height: '250px' }}>
        <img src="https://i.postimg.cc/C1pfbCRt/bookfolio-01-1.png" alt="" style={{ width: '400px', margin: '-40px 0px 0px 550px' }} />
        <div style={{ textAlign: 'center', width: '75%', margin: 'auto' }}>
          Bookfolio website is a digital platform that brings the joy of reading to users' fingertips.
          It offers a vast library of books, customizable features, and personalized recommendations.
          With seamless syncing across devices, it revolutionizes the way people consume literature, making reading accessible and convenient for readers.
        </div>
      </div>
      <div style={{
        fontFamily: 'arial',
        padding: '60px 0px 80px 0px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
        margin: 'auto',
        color: '#3E4D5C',
        fontWeight: '700'
      }}>
        <div style={{
          textAlign: 'center',
        }}>
          <img src="https://i.postimg.cc/Prr2tmth/doller.png" alt="" style={{ width: '120px', marginBottom: '10px' }} /> <br />
          Affordable Selection
        </div>
        <div>
          <img src="https://i.postimg.cc/bJSd0VH8/globe.png" alt="" style={{ width: '120px', marginBottom: '10px' }} /> <br />
          Global Accessbility
        </div>
        <div>
          <img src="https://i.postimg.cc/fWXJJFRf/share.png" alt="" style={{ width: '120px', marginBottom: '10px' }} /> <br />
          Share Anywhere
        </div>
        <div>
          <img src="https://i.postimg.cc/pXJrBF89/happy.png" alt="" style={{ width: '120px', marginBottom: '10px' }} /> <br />
          User Friendly
        </div>
      </div>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', padding: '60px 0px 25px 0px', color: 'white', height: '250px' }}>
        <img src="https://i.postimg.cc/C1pfbCRt/bookfolio-01-1.png" alt="" style={{ width: '200px', margin: '-40px 0px 0px 45px' }} />
        <div style={{ textAlign: 'center', marginLeft: '-1300px', fontWeight: '700', fontFamily: 'sans-serif', marginTop: '5px' }}>
          Contact us <br />
          Follow us <br />
          Review us <br />
          <img src="https://i.postimg.cc/XqSNfwgz/Frame-8.png" alt="" style={{ marginTop: '15px', width: '210px', marginLeft: '100px' }} />
        </div>
      </div>
    </div>
  );
}
