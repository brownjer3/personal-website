import { Component } from 'react'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default class ProjectCard extends Component {

    render(){
        return(
            <Col className='project-card'>
                <div class="overlay"></div>
                <Image src={this.props.image} fluid rounded className='border project-img my-2'/>
                <div class="project-details">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.desc}</p>
                </div>
            </Col>
        )
    }
    
}