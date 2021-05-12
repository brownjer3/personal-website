import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { techIcons } from './data/TechData'

export default class TechBanner extends Component {
    makeIcons = () => {
        return techIcons.map(icon => <Col className='align-items-center'><i className={`${icon} techIcon`} /></Col>)
    }

    render() {
        return(
            <Container>
                <hr className="border border-success"/>
                <Row className="d-flex justify-content-between align-items-center">
                    {this.makeIcons()}
                </Row>
                <hr className="border border-success"/>
            </Container>
        )
    }
}