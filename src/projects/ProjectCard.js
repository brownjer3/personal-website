import { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import ProjectDetails from './ProjectDetails';


export default class ProjectCard extends Component {

    render(){
        return(
            <Col className='project-card'>
                <div className='overlayContainer'>
                    <Image src={this.props.image} fluid rounded className='border project-img'/>
                    <div class="overlay border border-success">
                        <ProjectDetails {...this.props} />
                    </div>
                </div>
            </Col>
        )
    }
}