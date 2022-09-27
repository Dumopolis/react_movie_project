import { Card, Col } from "react-bootstrap";


function Card1(props) {
    const {
        nameRu: name,
        posterUrl: poster,
        rating,
        type,
        ratingVoteCount: popular,
        description
    } = props

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={poster} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{rating}</small>
                </Card.Footer>
            </Card>
        </Col>
    )
}
export  default Card1