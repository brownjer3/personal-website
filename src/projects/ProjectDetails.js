import { Row, Col, Button, Container } from 'react-bootstrap';

export default function ProjectDetails({...props}) {
    return(
        <Container fluid className="project-details d-flex flex-column justify-content-around">
            <h3 className="text-responsive">{props.name}</h3>
            <p className="text-responsive">{props.desc}</p>
            <Row className="d-flex justify-content-around">
                <Button variant='success' href={props.blog} target='_blank' size='sm'>Read blog post</Button>
                <Button variant='success' href={props.github} target='_blank' size='sm'>View source code</Button>
                <Button variant='success' href={props.demo} target='_blank' size='sm'>Watch demo</Button>
            </Row>
        </Container>
    )
}