import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Badge } from 'react-bootstrap'
const Home: NextPage = () => {
  return (
    <>
   
      <Header />
      <Container>
        <Row>
          <Col>
            <h4>Ultimos Projetos</h4>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              
              <Card.Body>
                  <Link href='/viewprojects/1'>
                    <a> Ver Projetos </a>
                  </Link>                  
                 
                  <span  className="blockquote-footer">
                    Colaborador
                  </span>

                  <Link href='/editproject/1'>
                    <a> Editar </a>
                  </Link>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                  <Link href='/viewprojects/2'>
                    <a> Ver Projetos </a>
                  </Link>
                  <span  className="blockquote-footer">
                    Colaborador
                  </span>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <h4>Notificações</h4>
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro repudiandae cumque fugiat esse non dolorem nihil, id, necessitatibus ducimus iusto tempora! Vero corrupti at nesciunt, nobis beatae commodi eligendi!
                  <p></p>
                  <footer  className="blockquote-footer">
                    Colaborador
                  </footer>
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
