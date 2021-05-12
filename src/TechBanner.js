import { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { tech } from './data/TechData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs } from '@fortawesome/free-brands-svg-icons'

export default class TechBanner extends Component {
    makeIcons = () => {
        return tech.map(t => <FontAwesomeIcon icon={t} />)
    }

    render() {
        return(
            <Container >
                <div>hi</div>
                <Row>
                <FontAwesomeIcon icon={faJs} />
                </Row>
            </Container>
        )
    }
}