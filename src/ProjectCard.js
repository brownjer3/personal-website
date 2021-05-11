import { Component } from 'react'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default class ProjectCard extends Component {

    render(){
        return(
            <Col className='my-3'>
                <Image src={this.props.image} fluid rounded className='border'/>
            </Col>
        )
    }
    
}