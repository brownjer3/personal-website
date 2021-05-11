import { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default class ProjectCard extends Component {

    render(){
        console.log('props', this.props)
        return(
            <Col>
                <Image src={this.props.image} fluid rounded/>
            </Col>
        )
    }
    
}