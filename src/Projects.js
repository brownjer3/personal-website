import { Component } from "react";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {projects} from './ProjectInfo'
import ProjectCard from './ProjectCard'

class Projects extends Component{
    makeProjects = () => {
        return projects.map((project) => {
            return <ProjectCard name={project.name} image={project.image} desc={project.desc} />
        })
    }

    render() {
        return(
            <Container>
                <h3>Here are my recent projects:</h3>
                <Row className='projects'>
                    {this.makeProjects()}
                </Row>
            </Container>
        )
    }
}

export default Projects