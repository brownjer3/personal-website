import { Component } from "react";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { projects } from './data/ProjectData'
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
                <h3 className='mb-5'>Here are some of my recent projects:</h3>
                <Row className='projects' xs={1} lg={2}>
                    {this.makeProjects()}
                </Row>
            </Container>
        )
    }
}

export default Projects