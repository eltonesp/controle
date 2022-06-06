import Header from "../components/header";
import { Breadcrumb, Container, Row, Form, Button, Carousel } from 'react-bootstrap'
const EditProject = () =>{
    return(
        <>
            <Header />
            <Container>
                <Row>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Editar Projetos
                        </Breadcrumb.Item>
                    </Breadcrumb>
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
                    <Form>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Titulo do projeto</Form.Label>
                            <Form.Control type="text" placeholder="Titulo" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="descricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as='Textarea' placeholder="Descricao" />
                        </Form.Group>

                        <Form.Select className="mb-3"  aria-label="Adicionar Colaborador">
                            <option>Colaborador</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>

                        <Form.Select className="mb-3"  aria-label="Status do projeto">
                            <option>Status</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>

                        <Form.Group className="mb-3" controlId="picture">
                            <Form.Label>Imagens</Form.Label>
                            <Form.Control type="file" multiple/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Alterar
                        </Button>
                    </Form>
                </Row>
            </Container>
            
        </>
    )
}
export default EditProject;