import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return(
        <Container className='d-flex justify-content-center mt-3'>
            <Row className="w-50 justify-content-around my-3" >
                <a href='https://medium.com/@brownjer3' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faMedium} className='text-white'/></a>
                <a href='https://github.com/brownjer3' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='text-white'/></a>
                <a href='https://www.linkedin.com/in/jerry-brown-/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className='text-white'/></a>
                <a href="https://www.youtube.com/channel/UCUN7UOWbXjyXGHkVNcLGyCA" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faYoutube} className='text-white'/></a>
                <a href="mailto:brownjer3@gmail.com"><FontAwesomeIcon icon={faEnvelope} className='text-white'/></a>
            </Row>
        </Container>
    )
}