import { Card, Col } from "react-bootstrap";


function Card1(props) {
    const {
        name,
        poster,
        rating,
        // type,
        // votes: popular,
        description
    } = props

    return (
        <Col>
            <Card>
            {(poster === null) ? <Card.Img variant="top" src={`https://placehold.jp/25px/9a9996/ffffff/370x465.png?text=${name}`} />  : (<Card.Img variant="top" src={poster.url} />)}
                
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{rating.kp}</small>
                </Card.Footer>
            </Card>
        </Col>
    )
}
export  default Card1