import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function ProjectCard(props) {
    return(
        <Col>
            <Card>
                <Image src={props.image} fluid/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.desc}</Card.Text>
                    <Button variant="primary">Check it out</Button>
                </Card.Body>
            </Card>
            <Button variant="danger">Danger</Button>
        </Col>
    )
}