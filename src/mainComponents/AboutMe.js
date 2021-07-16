import { Image, Jumbotron } from 'react-bootstrap'

export default function AboutMe() {
    return(
        <Jumbotron className="bg-transparent pb-0">        
            <h1>Hi there! My name's Jerry.</h1>
            <div class='headshotContainer'>
                <a href='https://www.linkedin.com/in/jerry-brown-/' target='_blank' rel="noreferrer">
                    <Image src='https://media-exp1.licdn.com/dms/image/C4D03AQHqlCtHTbbgsQ/profile-displayphoto-shrink_800_800/0/1542059961980?e=1631750400&v=beta&t=FNrsmIDwPp059wjMjoS7hsnRS5UYiq9XnpxjVwRD5QA' roundedCircle fluid className='border headshot'/>
                </a>
            </div>
            <p>
            I'm a Software Engineer currently based in Southern California. I like building user-friendly web applications with modern tools like React.js and Bootstrap, and I'm always looking to learn something new. Over the last 7 years, I've solved technical problems as a Product Manager for <a href='https://www.stickk.com/' target="_blank" rel="noreferrer">stickK</a> and a Technical Support Specialist for <a href='https://meetup.com/' target="_blank" rel="noreferrer">Meetup</a>.
            </p>
        </Jumbotron>
    )
}