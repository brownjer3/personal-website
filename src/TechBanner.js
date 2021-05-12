import { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { tech } from './data/TechData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TechBanner extends Component {
    makeIcons = () => {
        return tech.map(t => <FontAwesomeIcon icon={t} />)
    }

    render() {
        return(
            <Container >
                <Row>
                    {this.makeIcons()}
                </Row>
            </Container>
        )
    }
}