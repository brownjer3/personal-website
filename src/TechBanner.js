import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { techIcons } from './data/TechData'

export default class TechBanner extends Component {
    makeIcons = () => {
        return techIcons.map(icon => <Col xs={2} lg={1} className='my-3'><i className={`${icon} techIcon`} /></Col>)
    }

    render() {
        return(
            <div className='border-top border-bottom border-success my-5 techBanner'>
                    <Row className="d-flex justify-content-between align-items-center"  >
                        {this.makeIcons()}
                    </Row>
            </div>
        )
    }
}