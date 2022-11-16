import Link from "next/link";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg='light' expand='lg' className="mb-3">
            <Container>
                <Navbar.Brand>Desafio Front-End</Navbar.Brand>

                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}/>

                <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} aria-labelledby={`offcanvasNavbar-expand-lg`}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Daniel_GLaser</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav>
                            <Nav.Link><Link href={'/'} >
                                <Button variant="outline-dark">Home</Button>
                            </Link></Nav.Link>
                            <Nav.Link href="sacola"><Link href={'sacola'}>
                                <Button variant="outline-dark">Sacola</Button>
                            </Link></Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Header;