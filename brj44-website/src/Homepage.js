import './Homepage.css';
import profileImg from './LinkedInProfilePic.jpg';
const Homepage = () =>{
return(
    <>
        <div className={"gridContainer"}>
            <img src={profileImg} alt={"Profile Picture"} className={"profileImg"}/>
            <div className={"mainTextbox"}>
                <h2>About Me:</h2>
                <p>
                    I am a fourth year student at Texas State Where I am Pursuing a Bachelor of Science degree in Computer Science
                    with a minor in Applied Mathematics. I am also a member of the Efficient Computing Laboratory (ECL) under
                    Dr. Martin Burtscher. My area of research is lossless audio compression where I hope to develop a more efficient compression algorithm.
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
