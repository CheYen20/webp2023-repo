import { FaMailBulk, FaGithub } from "react-icons/fa";
const Home = () => {
  return (
    <div className="home_bg" id="home">
      <div className="overlay"></div>
          <h2>hi, i am cheyen</h2>
          <div className="social_icons">
            <a href="mailto:tim900430@gmail.com">
              <p>
                <FaMailBulk size="40px" />
              </p>
              Email
            </a>
            <a
              href="https://github.com/CheYen20/webp2023-repo.git"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p>
                <FaGithub size="40px" />
              </p>
              Github
            </a>
          </div>
    </div>
  );
};
export default Home;
