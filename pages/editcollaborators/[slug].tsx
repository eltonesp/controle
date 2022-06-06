import Header from "../components/header";
import { Breadcrumb, Container, Row, Form, Button, } from 'react-bootstrap'
const EditCollaborators = () =>{
    return(
        <>
            <Header />
            <Container>
                <Row>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Editar Colaborador
                        </Breadcrumb.Item>
                    </Breadcrumb>                       

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

                        <Form.Select className="mb-3"  aria-label="level">
                            <option>Nivel</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>

                        <Form.Group className="mb-3" controlId="picture">
                            <Form.Label>Imagens</Form.Label>
                            <Form.Control type="file"/>
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
export default EditCollaborators;