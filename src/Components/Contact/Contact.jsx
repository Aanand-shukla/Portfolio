import "./contact.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="allDetails">
        <div className="iconsSection">
          <div className="email">
            <article className="contact_option">
              <p>
                <MdOutlineMail />
              </p>

              <h5>Email</h5>
              <a href="mailto:anandshuklagii@gmail.com"> Send a Message</a>
            </article>
            <article className="contact_option">
              <p>
                <FaWhatsapp />
              </p>
              <h5>WhatsApp</h5>
              <a href="https://api.whatsapp.com/send?phone+918700229561">
                WhatsApp Me
              </a>
            </article>
          </div>
        </div>
        <div className="inputsSection">
          <form action="">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your full Name"
              required
            />
            <input
              type="email"
              name="email"
              id="emqil"
              placeholder="Enter Your email"
              required
            />
            <textarea
              name="meaasage"
              id=""
              rows="6"
              placeholder="Write Your Message  Here"
            ></textarea>
            <button type="submit" className="btn">
              {" "}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
