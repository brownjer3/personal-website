import { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { techIcons } from '../data/TechData';

export default class TechBanner extends Component {
    makeIcons = () => {
        return techIcons.map(icon => <Col xs={2} lg={1} className='d-flex justify-content-center mb-3'><i className={`${icon} techIcon`} /></Col>)
    }

    render() {
        return(
            <Container fluid className='border-top border-bottom border-success my-5'>
                <Row className="d-flex justify-content-around mt-3">
                    {this.makeIcons()}
                </Row>
            </Container>
        )
    }
}