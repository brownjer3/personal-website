import { Component } from "react";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {projects} from './ProjectInfo'
import ProjectCard from './ProjectCard'

class Projects extends Component{
    makeProjects = () => {
        return projects.map((project) => {
            return <ProjectCard {...project} />
        })
    }

    render() {
        return(
            <Container>
                <h3>Here are some of my recent projects:</h3>
                <Row className='projects'>
                    {this.makeProjects()}
                </Row>
            </Container>
        )
    }
}

export default Projects