import Header from "../components/header";
import { useRouter } from "next/router";
import { Card, Container, Row, Carousel, InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap'
import Link from "next/link";
const View = () => {
    const router = useRouter()
    const slug = router.query.slug || []
  
    return(
        <>
        <Header />
        <Container>
            <Row>
                <Card>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                    </Card.Body>
                </Card>
                <h1> {slug} </h1>

                    <h4>Adicionar Anotação</h4>
                <InputGroup>
                    <FormControl as="textarea" aria-label="With textarea" />
                    <Button variant="primary" size="lg">
                    Enviar
                </Button>
                </InputGroup>
                <p></p>
                <ListGroup as="ol" numbered>
                    <ListGroup.Item
                        action
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Cras justo odio
                        </div>
                        
                    </ListGroup.Item>
                    <ListGroup.Item
                        action
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Cras justo odio
                        </div>
                        
                    </ListGroup.Item>
                    <ListGroup.Item
                        action
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Cras justo odio
                        </div>
                        
                    </ListGroup.Item>
                </ListGroup>
            </Row>
        </Container>
        
        </>
    )
}
export default View;