import { Navbar, Nav, Container} from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
  return (
    <header>
    <Navbar bg="dark" variant="dark" expand='md' collapseOnSelect>
        <Container>
        <LinkContainer to='/'>
            <Navbar.Brand href="/"> 
            <img src={logo} alt='Proshop'></img>
               ProShop
            </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

            </Navbar.Collapse>
            <Nav className="ms-auto">
            <LinkContainer to='/cart'>
            <Nav.Link><FaShoppingCart></FaShoppingCart> Cart </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
             <Nav.Link><FaUser></FaUser> Sign In</Nav.Link>
             </LinkContainer>
                
            </Nav>

        </Container>
    </Navbar>
 
    </header>
  )
}

export default Header