import './footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer() {
    return (
        <div className="footer">
            <div className="license"></div>
            <div className="contact">
                <div className="links">
                    <a href="https://www.facebook.com/profile.php?id=100004859087998" target="_blank"><FacebookIcon /></a>
                    <a href="https://twitter.com/iamsam_sk" target="_blank"><TwitterIcon /></a>
                    <a href="https://www.linkedin.com/in/sameer-sk-136044124/" target="_blank"><LinkedInIcon /></a>
                </div>
            </div>
        </div>
    );
}
export default Footer;