import { Component } from "react";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

class Projects extends Component{
    render() {
        return(
            <Container>
                <Row className='projects'>
                    {this.makeProjects()}
                </Row>
            </Container>
        )
    }
}

export default Projects