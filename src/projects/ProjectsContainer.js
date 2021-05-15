import { Component } from "react";
import { Container, Row } from 'react-bootstrap';
import { projects } from '../data/ProjectData';
import ProjectCard from './ProjectCard';

export default class Projects extends Component{

    makeProjects = () => {
        return projects.map((project) => {
            return <ProjectCard {...project} />
        })
    }

    render() {
        return(
            <Container fluid className='border'>
                <h2 className='mb-5'>Here are some of my recent projects:</h2>
                <Row className='projects' xs={1} lg={2} noGutters>
                    {this.makeProjects()}
                </Row>
            </Container>
        )
    }
}
