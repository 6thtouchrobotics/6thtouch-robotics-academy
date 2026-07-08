import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

export const metadata = {
  title: "Contact | 6thtouch Robotics Academy",
};

export default function Contact() {
  return (
    <section className="container-fluid py-5 mt-5 mb-5">
      <style>{`
        .social-icon-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: #ffffff;
          color: #FF6A00; /* Brand orange instead of black */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
          transition: all 0.25s ease-in-out;
          border: 1px solid #e5e7eb;
          text-decoration: none;
        }
        .social-icon-btn:hover {
          transform: scale(1.15);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
          background-color: #FF6A00; /* Brand orange on hover */
          color: #ffffff;
          border-color: #FF6A00;
        }
      `}</style>
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
                    className="form-control form-control-lg"
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
                    className="form-control form-control-lg"
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
                    className="form-control form-control-lg"
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
                    className="form-control form-control-lg"
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
          <div className="col-lg-4 d-flex align-items-center">
            <div
              className="rounded-3 p-4 shadow-sm d-flex flex-column gap-4 w-100 position-relative overflow-hidden"
              style={{ backgroundColor: "#f8f8f3" }}
            >
              {/* Footer repeating pattern background */}
              <div
                aria-hidden="true"
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  backgroundImage: "url('/assets/images/logo.svg')",
                  backgroundSize: "48px 48px",
                  backgroundRepeat: "repeat",
                  opacity: 0.07,
                  filter: "grayscale(100%) sepia(10%) brightness(0%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <div className="position-relative d-flex flex-column gap-4" style={{ zIndex: 1 }}>
                
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
                      className="social-icon-btn"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="https://www.facebook.com/share/1LFHCLoAio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="social-icon-btn"
                    >
                      <FaFacebook size={20} />
                    </a>
                    <a
                      href="https://www.youtube.com/@6thtouchrobotics"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="social-icon-btn"
                    >
                      <FaYoutube size={20} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}