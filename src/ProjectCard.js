import { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ProjectDetails from './ProjectDetails'


export default class ProjectCard extends Component {

    render(){
        return(
            <Col className='project-card'>
                <div class="overlay border border-success"></div>
                <Image src={this.props.image} fluid rounded className='border project-img my-2'/>
                <ProjectDetails {...this.props} />
            </Col>
        )
    }
    
}