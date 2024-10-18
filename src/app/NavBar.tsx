'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {

    // to get current pathname
    const pathname = usePathname();

//{/* link added for stop hot reload */}
    return (
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} href="/"> 
                
                    NextJs Gallery
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar" >
                  <Nav>
                    <Nav.Link as={Link} href="/" active={pathname === "/"}>Home</Nav.Link>
                    <Nav.Link as={Link} href="/hello" active={pathname === "/hello"}>Hello</Nav.Link>
                    <Nav.Link as={Link} href="/loading" active={pathname === "/loading"}>Loading</Nav.Link>
                    <Nav.Link as={Link} href="/error" active={pathname === "/error"}>Error</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}