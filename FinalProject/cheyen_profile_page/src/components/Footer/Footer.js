import { FaMailBulk, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            &copy; 2023 website designed and developed by CheYen Chang. 
          </p>
          <div className="footer-social-icon">
            <ul className="social_icons_footer">
              <li>
                <a href="mailto:tim900430@gmail.com">
                  <p>
                    <FaMailBulk size="18px" />
                  </p>
                </a>
                <a
                  href="https://github.com/CheYen20/webp2023-repo.git"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p>
                    <FaGithub size="18px" />
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
