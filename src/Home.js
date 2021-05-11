import Container from 'react-bootstrap/Container'
import Projects from './Projects'

export default function Home() {
    return (
        <header className="App-header">
            <Container>
                <h1>Hello World! My name's Jerry.</h1>
                <p>
                I'm a user-focused Product Manager turned Software Engineer with experience planning and executing long-term product developement roadmaps to creating usable software.
                </p>
                <h3>Here are some recent projects:</h3>
                <Projects />
            </Container>
        </header>
    )
}