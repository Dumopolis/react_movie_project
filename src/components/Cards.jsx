import { Container, Row, } from "react-bootstrap";
import Card1 from "./Card1";

export default function Cards(props) {
    const {films} = props;

    return (
        <Container>
        <Row>
            {films.map(film => (
                 <Card1 key={film.nameRU} {...film}/>
                
            ))}
            
                {/* <Col>
                <Card>
                    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/8437/8437898.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </Col>

                <Col>
                <Card>
                    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/8437/8437898.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </Col>

                <Col>
                <Card>
                    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/8437/8437898.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </Col>
                
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/8437/8437898.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </Col> */}
               
        </Row>

            
        </Container>
    )
}