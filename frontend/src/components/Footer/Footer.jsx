
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Bengal College of Engineering and Technology, Durgapur or BCET is a self-financing college located in West Bengal, India providing 
              under-graduate as well as post-graduate courses in engineering and technology disciplines. It was established by SKS Educational 
              and Social Trust in 2001. The college is affiliated with Maulana Abul Kalam Azad University of Technology and all the programmes 
              are approved by the All India Council for Technical Education.</p>

<p>It is located at Bidhan Nagar, a locality in Durgapur, West Bengal.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>Rajiv Kumar Das</li>
                <li>+91 8617801199/ 9134481973</li>
                <li>sahid Sukumar Banerjee Sarani, Bidhan Nagar, Durgapur 713212</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">www.bcetdgp.ac.in - All Right Reserved.</p>
    </div>
  )
}

export default Footer
