import {Container} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap'

export default function Header() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/8437/8437863.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            ПоискКино
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
