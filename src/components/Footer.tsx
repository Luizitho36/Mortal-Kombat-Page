import "./footer.css";
import Facebook from '../img/Footer/facebook.png';
import Instagram from '../img/Footer/instagram.png';
import MortalKombat from '../img/Footer/mortal-kombat.png';
import Twitter from '../img/Footer/twitter.png';

function Footer() {
  return (
    <div className='divPrincipalFooter'>
      <hr className="hr"></hr>
      <section className="redes-sociales">
				<h1>Redes Principales:</h1>
        <a href="https://mk11.mortalkombat.com/es-AR" target='_blank'>
          <img src={MortalKombat} className="icons"/>
        </a>
				
        <a href="https://www.facebook.com/MortalKombat/" target='_blank'>
        <img src={Facebook} className="icons"/>
        </a>
				
        <a href="https://twitter.com/MortalKombat" target='_blank'>
          <img src={Twitter} className="icons"/>
        </a>
				
        <a href="https://www.instagram.com/mortalkombat/" target='_blank'>
          <img src={Instagram} className="icons"/>
        </a>

			</section>
      <p className="pfooter">
        Es un proyecto de desarrollo web de:
          <a href="javascript:window.open('https://www.linkedin.com/in/luis-miguel-lucatti-b2b677104/','','toolbar=yes');void 0" className="Luis-Miguel-Lucatti">Luis Miguel Lucatti</a>
      </p>
    </div>
  )
}

export default Footer;