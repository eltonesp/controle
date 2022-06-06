import Header from "./components/header";
import { Form, Container, Row, Col, Tabs, Tab, Alert, Button, Table } from 'react-bootstrap';
import Link from "next/link";
import {BsTrash, BsFillPencilFill} from 'react-icons/bs';
const Profile = () =>{
    return(
        <>
        <Header />
        <Container fluid>
            <Row>
            <h2>Perfil</h2>
                <Col sm={1}><img src="https://picsum.photos/seed/picsum/80/80" className="roundedCircle"/></Col>
                <Col sm={11}>
                    <Tabs  defaultActiveKey="Profile" transition={false} id="tabContent" className="mb-3">
                        <Tab eventKey="Profile" title="Perfil">
                            <Form>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Nome" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>email</Form.Label>
                                    <Form.Control type="email" placeholder="email" />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control type="text" placeholder="Telefone" />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="address">
                                    <Form.Label>Endereço</Form.Label>
                                    <Form.Control as='Textarea' placeholder="Endereço" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="senha" />
                                </Form.Group>

                                <Form.Select className="mb-3"  aria-label="function">
                                    <option>Função</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>

                                <Form.Group className="mb-3" controlId="picture">
                                    <Form.Label>Imagens</Form.Label>
                                    <Form.Control type="file"/>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Atualizar
                                </Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="projects" title="Projetos">
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Função</th>
                                    <th width="7px">Editar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                    
                                        <td>
                                            <Link href="editproject/1">
                                                <a><BsFillPencilFill /></a>
                                            </Link>
                                        </td>
                                    </tr>
                                
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="notifications" title="Notificações">
                        <Alert variant="danger">
                            <Alert.Heading>Projeto nome</Alert.Heading>
                            <p>
                                Aww yeah, you successfully read this important alert message. This example
                                text is going to run a bit longer so that you can see how spacing within an
                                alert works with this kind of content.
                            </p>
                            <hr />
                            <p className="mb-0">
                                <Link href=''>
                                    <a>Aceitar</a>
                                </Link>
                            </p>
                            </Alert>
                        </Tab>
                    </Tabs>
                   
                </Col>  
            </Row>
        </Container>
        </>
    )
}

export default Profile;