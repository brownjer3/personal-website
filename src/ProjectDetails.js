import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

export default function ProjectDetails({...props}) {
    return(
        <div class="project-details">
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <Row className="d-flex justify-content-around">
                <Button variant='success' href={props.blog} target='_blank'>Read blog post</Button>
                <Button variant='success' href={props.github} target='_blank'>View source code</Button>
                <Button variant='success' href={props.demo} target='_blank'>Watch demo</Button>
            </Row>
        </div>
    )
}