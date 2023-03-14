import './Homepage.css';
import profileImg from './LinkedInProfilePic.jpg';
const Homepage = () =>{
return(
    <>
        <div className={"gridContainer"}>
            <img src={profileImg} alt={"Profile"} className={"profileImg"}/>
            <div className={"mainTextBox"}>
                <h2>About Me:</h2>
                <p>
                    I am a fourth year student at Texas State Where I am Pursuing a Bachelor of Science degree in Computer Science
                    with a minor in Applied Mathematics. I am also a member of the Efficient Computing Laboratory (ECL) under
                    Dr. Martin Burtscher. My area of research is lossless audio compression where I hope to develop a more efficient compression algorithm.
                </p>
                <br/>
                <p>
                    I am also currently a front-end developer at SpexoDisks led by Dr. Banzatti. I am utilizing my previous knowledge of web development
                    that I have acquired from my previous experiences to create a better user experience on the website. As we are a small team, I take on
                    multiple roles under my title of front-end developer. I am responsible for creating the UI/UX of the website ensuring that our users can tell
                    the story of our website in a natural and intuitive way. I am also responsible for creating the front-end of the website using React and my main
                    focus is refactoring the code to make it more easier to maintain and more dynamic to different screen sizes along with adding creating new components.
                </p>
                <h2>Contact:</h2>
                <p>
                    LinkedIn: <a href="https://www.linkedin.com/in/benito-juarez-92815a221/">https://www.linkedin.com/in/benito-juarez-92815a221/</a>
                </p>
                <p>
                    Texas State Email: brj44@txstate.edu
                </p>
                <p>
                    Personal Email: juarezb2001@gmail.com
                </p>
            </div>
        </div>

    </>
)
}
export default Homepage;
