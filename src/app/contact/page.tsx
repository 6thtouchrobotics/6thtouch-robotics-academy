import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

export const metadata = {
  title: "Contact | 6thtouch Robotics Academy",
};

export default function Contact() {
  return (
    <section className="container-fluid gradientBgColor mt-5 py-5 radius-container-up mb-5">
      <div className="container py-4">
        <h1 className="h2 fw-bold mb-2" style={{ color: "#FF6A00" }}>
          Have any questions? <span style={{ color: "#1E3A8A" }}>Message us</span>
        </h1>
        <p className="lead text-muted">
          Leave your message here, our team will reply to you within 24 hours.
        </p>

        <div className="row mt-5">
          {/* Form Column */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            <form
              action="https://formspree.io/f/xeqynrev"
              method="post"
              className="row g-3"
            >
              <div className="col-md-12">
                <div className="form-floating">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="form-control"
                    id="fullName"
                    name="Full name"
                    required
                  />
                  <label htmlFor="fullName">Full name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    id="email"
                    name="Email"
                    required
                  />
                  <label htmlFor="email">Enter email</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="form-control"
                    id="phoneNumber"
                    name="Phone Number"
                    required
                  />
                  <label htmlFor="phoneNumber">Phone number</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating">
                  <textarea
                    placeholder="Message"
                    className="form-control"
                    id="message"
                    required
                    name="Message"
                    style={{ resize: "none", height: "150px" }}
                  ></textarea>
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details Column */}
          <div className="col-lg-4">
            <div className="bg-white border-start border-5 border-primary rounded-3 p-4 shadow-sm d-flex flex-column gap-4">
              
              {/* Office Address */}
              <div className="d-flex gap-3 align-items-start">
                <div className="text-primary mt-1">
                  <MapPin size={22} />
                </div>
                <div>
                  <h5 className="mb-1 text-dark fw-bold">Office Address</h5>
                  <p className="text-muted mb-0">6 Richard Hyacinth, Lasu Road, Lagos, Nigeria.</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="d-flex gap-3 align-items-start">
                <div className="text-primary mt-1">
                  <Clock size={22} />
                </div>
                <div>
                  <h5 className="mb-1 text-dark fw-bold">Working Hours</h5>
                  <p className="text-muted mb-0">Mon to Fri: 09:00 AM to 06:00 PM</p>
                </div>
              </div>

              {/* Direct Reach */}
              <div className="d-flex gap-3 align-items-start">
                <div className="text-primary mt-1">
                  <Phone size={22} />
                </div>
                <div>
                  <h5 className="mb-1 text-dark fw-bold">Call Us</h5>
                  <a href="tel:+2348038007686" className="text-decoration-none text-muted d-block">
                    +234 803 800 7686
                  </a>
                </div>
              </div>

              {/* Email Reach */}
              <div className="d-flex gap-3 align-items-start">
                <div className="text-primary mt-1">
                  <Mail size={22} />
                </div>
                <div>
                  <h5 className="mb-1 text-dark fw-bold">Email Us</h5>
                  <a href="mailto:6thtouchrobotics@gmail.com" className="text-decoration-none text-muted d-block">
                    6thtouchrobotics@gmail.com
                  </a>
                </div>
              </div>

              <hr className="text-muted my-2" />

              {/* Social Channels */}
              <div>
                <h6 className="text-dark fw-bold mb-3">Follow Our Academy</h6>
                <div className="d-flex gap-3">
                  <a
                    href="https://www.instagram.com/6thtouch_robotics"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    style={{ color: "#E1306C" }}
                  >
                    <FaInstagram size={22} />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1LFHCLoAio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    style={{ color: "#1877F2" }}
                  >
                    <FaFacebook size={22} />
                  </a>
                  <a
                    href="https://www.youtube.com/@6thtouchrobotics"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    style={{ color: "#FF0000" }}
                  >
                    <FaYoutube size={22} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}