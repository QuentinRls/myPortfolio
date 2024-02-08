import "./aboutRessources.css"

const aboutText =
`Hello! My name is Quentin and I enjoy creating things that live on the internet. 
My interest in web development started back in 2015 when I decided to try editing custom Tumblr themes — 
turns out hacking together a custom reblog button taught me a lot about HTML & CSS!`;

const aboutTextLinkExtia = <a className='textLinkUnderlineAbout' href="https://www.extia-group.com/" target="_blank" rel="noopener noreferrer">consulting agency</a>
const aboutTextLinkEventMaker = <a className='textLinkUnderlineAbout' href="https://www.eventmaker.com/en/" target="_blank" rel="noopener noreferrer">a start-up</a>
const aboutTextLinkSG = <a className='textLinkUnderlineAbout' href="https://particuliers.sg.fr/" target="_blank" rel="noopener noreferrer">a French bank</a>
const aboutTextLinkEpitech = <a className='textLinkUnderlineAbout' href="https://international.epitech.eu" target="_blank" rel="noopener noreferrer">Epitech</a>

const AboutTextSection = () => {
    return (
        <div className='aboutTextList'>
            <p className='aboutText'>{aboutText}</p>
            <p className='aboutText'>Fast-forward to today, and Ive had the privilege of working at 
            a {aboutTextLinkExtia}, {aboutTextLinkEventMaker}, and {aboutTextLinkSG}.
                My main focus these days is building accessible,
                inclusive products and digital experiences at Upstatement for a variety of clients.</p>

            <p className='aboutText'>I have done a Master as a computer scientist at {aboutTextLinkEpitech} which 
            is one of the most famous coding school in France</p>

            <p className='aboutText'>Here are a few technologies Ive been working with recently</p>
            <ul class="skills-list">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Eleventy</li>
                <li>Node.js</li>
                <li>WordPress</li>
            </ul>
        </div>
    )
}

export default AboutTextSection 