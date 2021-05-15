import Container from 'react-bootstrap/Container';
import AboutMe from './AboutMe';
import ProjectsContainer from '../projects/ProjectsContainer';
import TechBanner from './TechBanner';


export default function Home() {
    return (
        <Container fluid className='border'>
            <AboutMe />
            <TechBanner />
            <ProjectsContainer />
        </Container>
    )
}