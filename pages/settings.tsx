import Header from "./components/header";
import { Container, Row, Col, Card, Form, InputGroup, FormControl, Button, ListGroup, Badge } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'
import Link from "next/link";

const Settings = () =>{
    return(
        <>
            <Header />
            <Container>
                <Row>
                    <Card>
                        <Card.Body>
                            <Form>
                            <Form.Label htmlFor="status">Status Dos projetos</Form.Label>
                            <InputGroup className="mb-3">
                                    <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="status"
                                    />
                                    <Button>Cadastar</Button>
                                </InputGroup>
                            </Form>

                            <ListGroup variant="flush">
                                <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                        Cras justo odio
                                        </div>
                                        <Badge>
                                            <Link href='/'><BsTrash /></Link> 
                                        </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                        Cras justo odio
                                        </div>
                                        <Badge>
                                            <Link href='/'><BsTrash /></Link> 
                                        </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                        Cras justo odio
                                        </div>
                                        <Badge>
                                            <Link href='/'><BsTrash /></Link> 
                                        </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                        Cras justo odio
                                        </div>
                                        <Badge>
                                            <Link href='/'><BsTrash /></Link> 
                                        </Badge>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>


                    <Card>
                        <Card.Body>
                            <Form>
                            <Form.Label htmlFor="status">Funções</Form.Label>
                            <InputGroup className="mb-3">
                                    <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="status"
                                    />
                                    <Button>Cadastar</Button>
                                </InputGroup>
                            </Form>

                            <ListGroup variant="flush">
                                <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                        Cras justo odio
                                        </div>
                                        <Badge>
                                            <Link href='/'><BsTrash /></Link> 
                                        </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                        Cras justo odio
                                        </div>
                                        <Badge>
                                            <Link href='/'><BsTrash /></Link> 
                                        </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                        Cras justo odio
                                        </div>
                                        <Badge>
                                            <Link href='/'><BsTrash /></Link> 
                                        </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                        Cras justo odio
                                        </div>
                                        <Badge>
                                            <Link href='/'><BsTrash /></Link> 
                                        </Badge>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default Settings;