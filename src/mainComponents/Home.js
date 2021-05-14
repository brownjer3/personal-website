import Container from 'react-bootstrap/Container';
import AboutMe from './AboutMe';
import Projects from '../projects/Projects';
import TechBanner from './TechBanner';


export default function Home() {
    return (
        <header className="App-header">
            <Container fluid>
                <AboutMe />
                <TechBanner />
                <Projects />
            </Container>
        </header>
    )
}