import Container from 'react-bootstrap/Container';
import AboutMe from './AboutMe';
import ProjectsContainer from '../projects/ProjectsContainer';
import TechBanner from './TechBanner';


export default function Home() {
    return (
        // <div className="App-main">
            <Container fluid>
                <AboutMe />
                <TechBanner />
                <ProjectsContainer />
            </Container>
        // </div>
    )
}