import { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { tech } from './data/TechData'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconJavascript from 'react-devicon/javascript/plain'
import IconReact from 'react-devicon/react/original-wordmark';

export default class TechBanner extends Component {
    makeIcons = () => {
        return tech.map(t => <t height={100} width={100} />)
    }

    render() {
        return(
            <Container >
                <Row>
                    {/* {this.makeIcons()} */}
                    {/* <IconReact height={100} width={100} /> */}
                    <img src={IconReact} />
                </Row>
            </Container>
        )
    }
}