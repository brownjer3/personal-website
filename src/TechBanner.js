import { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { techIcons } from './data/TechData'

export default class TechBanner extends Component {
    makeIcons = () => {
        return techIcons.map(icon => <i class={icon} />)
    }

    render() {
        return(
            <Container className='border'>
                <Row className="d-flex justify-content-between align-items-center">
                    {this.makeIcons()}
                </Row>
                <hr className="border border-success"/>
            </Container>
        )
    }
}