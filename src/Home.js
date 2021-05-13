import Container from 'react-bootstrap/Container'
import Projects from './Projects'
import TechBanner from './TechBanner'
import AboutMe from './AboutMe'


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