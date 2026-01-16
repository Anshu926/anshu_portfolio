import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-wrapper">

      {/* CENTER TEXT */}
      <div className="footer-center-text">
        <h4>Based in Maharashtra, India</h4>
        <p>Working with clients across India & abroad. Let's connect!</p>
      </div>

      {/* CONTACT ROW */}
      <div className="footer-contact">
        <p><i className="fas fa-envelope"></i> anshubongade@gmail.com</p>
        <p><i className="fas fa-phone"></i> +91 73850 65507</p>
        <p><i className="fas fa-map-marker-alt"></i> Nagpur, Maharashtra, India</p>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Anshu Bongade — All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
