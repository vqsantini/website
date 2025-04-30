import './Footer.css'

export function Footer() {
  return(
    <div className="footer-content">
      <div className="footer-header">
        <p>Pellentesque suscipit fringilla libero eu.</p>
        <button>Get a Demo →</button>
      </div>
      <div className="footer">
        <div className="footer-group1">
          <img src="./Logotipo.svg" alt="logomarca" />
          <p>Copyright © 2020 Landify UI Kit. <br /> All rights reserved</p>
          <img src="./FooterSocial.svg" alt="redes-sociais" />
        </div>
        <div className="footer-group2">
          <p className="footer-title">Company</p>
          <button className="footer-list">About us</button>
          <button className="footer-list">Blog</button>
          <button className="footer-list">Contact us</button>
          <button className="footer-list">Princing</button>
          <button className="footer-list">Testimonials</button>
        </div>
        <div className="footer-group2">
          <p className="footer-title">Support</p>
          <button className="footer-list">Help center</button>
          <button className="footer-list">Terms of service</button>
          <button className="footer-list">Legal</button>
          <button className="footer-list">Privacy Policy</button>
          <button className="footer-list">Status</button>
        </div>
        <div className="footer-group3">
        <p className="footer-title" >Stay up to date</p>
          <div className="footer-textarea">
            
            <div className="footer-textarea-place">
              <textarea placeholder='Your email address' id="emailAddress"></textarea>
              <button id='button-send'><img src="./FooterSend.svg" alt="send" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}