import { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import ProjectDetails from './ProjectDetails';


export default class ProjectCard extends Component {

    render(){
        return(
            <Col className='project-card border border-primary my-2'>
                <div class="overlay border border-success"></div>
                <Image src={this.props.image} fluid rounded className='border project-img'/>
                <ProjectDetails {...this.props} />
            </Col>
        )
    }
}