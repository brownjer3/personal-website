import { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import ProjectDetails from './ProjectDetails';


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