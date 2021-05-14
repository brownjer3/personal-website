import { Image, Jumbotron } from 'react-bootstrap'

export default function AboutMe() {
    return(
        <Jumbotron className="bg-transparent pb-0">        
            <h1>Hi there! My name's Jerry.</h1>
            <div class='headshotContainer'>
                <a href='https://www.linkedin.com/in/jerry-brown-/' target='_blank' rel="noreferrer">
                    <Image src='https://media-exp1.licdn.com/dms/image/C4D03AQHqlCtHTbbgsQ/profile-displayphoto-shrink_800_800/0/1542059961980?e=1626307200&v=beta&t=iv9ieOy6J10NdtRVdVNJHlbcbLk-8qfSnhD-jL8X8uo' roundedCircle fluid className='border headshot'/>
                </a>
            </div>
            <p>
            I'm a Software Engineer currently based in Southern California. I like to build responsive web applications using modern technologies with a focus on design. Over the past 7 years, I've worked as a Product Manager for <a href='https://www.stickk.com/' target="_blank" rel="noreferrer">stickK</a> and a Technical Support Specialist for <a href='https://meetup.com/' target="_blank" rel="noreferrer">Meetup</a>.
            </p>
        </Jumbotron>
    )
}