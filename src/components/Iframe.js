import "./Iframe.css";
const Iframe = () => {
  return (
    <>
      <div className="address-main">
        <h1 className="address-heading">Our Address</h1>
        <div className="address">
          <iframe className="frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0837019361547!2d77.3192336326645!3d19.14781305853367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d63847967405%3A0x1b562469d5974800!2sH.%20Rahim%20%26%20Co!5e0!3m2!1sen!2sin!4v1722423252396!5m2!1sen!2sin"
            
            width="100%"
            height= "500px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Iframe;
