import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Col } from 'react-bootstrap'

export default function ProjectDetails({...props}) {
    return(
        <div class="project-details d-flex flex-column justify-content-around">
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <Row className="d-flex justify-content-between">
                <Col xs={12} sm='auto'><Button variant='success' href={props.blog} target='_blank'>Read blog post</Button></Col>
                <Col xs={12} sm='auto'><Button variant='success' href={props.github} target='_blank'>View source code</Button></Col>
                <Col xs={12} sm='auto'><Button variant='success' href={props.demo} target='_blank'>Watch demo</Button></Col>
            </Row>
        </div>
    )
}