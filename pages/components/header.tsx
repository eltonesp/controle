import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
const Header = () =>{
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Controle de Projetos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Projetos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/addprojects">Cadastrar</NavDropdown.Item>
                            <NavDropdown.Item href="/finishedprojects">Concluidos</NavDropdown.Item>
                            <NavDropdown.Item href="/inprogressprojects">Em Endamento</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Clientes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/addcostumers">Cadastrar</NavDropdown.Item>
                            <NavDropdown.Item href="/listcostumers">Listar</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Colaboradores" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/addcollaborators">Cadastrar</NavDropdown.Item>
                            <NavDropdown.Item href="/listcollaborators">Listar</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/profile">Perfil</Nav.Link>
                        <Nav.Link href="/settings">Settings</Nav.Link>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}
export default Header;