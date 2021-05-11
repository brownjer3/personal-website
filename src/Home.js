import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Projects from './Projects'
import Image from 'react-bootstrap/Image'


export default function Home() {
    return (
        <header className="App-header">
            <Container>
                <Jumbotron className="bg-transparent">
                    <h1>Hello World! My name's Jerry.</h1>
                    <div className='w-25 mx-auto my-3'>
                        <Image src='https://media-exp1.licdn.com/dms/image/C4D03AQHqlCtHTbbgsQ/profile-displayphoto-shrink_800_800/0/1542059961980?e=1626307200&v=beta&t=iv9ieOy6J10NdtRVdVNJHlbcbLk-8qfSnhD-jL8X8uo' roundedCircle fluid className='border border-success'/>
                    </div>
                    <p>
                    I'm a user-focused Product Manager turned Software Engineer with experience planning and executing long-term product developement roadmaps to creating usable software.
                    </p>
                    <hr className="border border-success mt-5"/>
                </Jumbotron>
                <Projects />
            </Container>
        </header>
    )
}