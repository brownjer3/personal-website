import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Projects from './Projects'


export default function Home() {
    return (
        <header className="App-header">
            <Container className=" border border-primary">
                <Jumbotron className="bg-transparent border border-primary">
                    <h1>Hello World! My name's Jerry.</h1>
                    <p>
                    I'm a user-focused Product Manager turned Software Engineer with experience planning and executing long-term product developement roadmaps to creating usable software.
                    </p>
                    <hr />
                </Jumbotron>
                <Projects />
            </Container>
        </header>
    )
}