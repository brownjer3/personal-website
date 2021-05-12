import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { techIcons } from './data/TechData'

export default class TechBanner extends Component {
    makeIcons = () => {
        return techIcons.map(icon => <Col className='my-3'><i className={`${icon} techIcon`} /></Col>)
    }

    render() {
        return(
            <div className='border-top border-bottom border-success border-3 my-5'>
                    <Row className="d-flex justify-content-between align-items-center">
                        {this.makeIcons()}
                    </Row>
            </div>
        )
    }
}