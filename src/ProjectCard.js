

export default function ProjectCard(props) {
    return(
        <Col>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.desc}</Card.Text>
                    <Button variant="primary">Check it out</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}