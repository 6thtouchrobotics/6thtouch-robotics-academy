import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";

export const metadata = {
  title: "About | 6thtouch Robotics Academy",
};

export default function About() {
  return (
    <>
      <style>{`
        .ceo-social-link {
          color: #6c757d;
          transition: color 0.2s ease;
        }
        .ceo-social-link:hover {
          color: #FF6A00 !important;
        }
        .tutor-social-link {
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.2s ease;
        }
        .tutor-social-link:hover {
          color: #FF6A00 !important;
          transform: scale(1.1);
        }
      `}</style>

      <div className="container-fluid mt-5 py-5">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-7">
              <p className="small text-uppercase text-muted fw-semibold tracking-wider mb-2">About 6thtouch</p>
              <h1 className="h2 fw-bold mb-3 text-[#FF6A00]">
                We inspire young minds through robotics, STEM, and hands-on learning.
              </h1>
              <p className="small text-muted mb-3">
                At <span className="fw-bold text-primary">6thtouch Robotics Academy</span>, we excite, inspire, and motivate young people and teachers about the fun, importance, and impact of robotics technology in today’s world, including STEM education.
              </p>
              <p className="small text-muted">
                We create friendly, engaging spaces where learners can explore, experiment, and express themselves through practical robotics experiences that build creativity, teamwork, and problem-solving skills.
              </p>
            </div>
            <div className="col-lg-5">
              <img
                src="/assets/images/about-hero.jpeg"
                alt="Students learning robotics"
                className="img-fluid rounded-4 shadow-sm"
                style={{ width: "100%", maxHeight: "360px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 border-top">
        <div className="container">
          <div className="text-center mb-4">
            <p className="small text-uppercase text-muted fw-semibold tracking-wider mb-2">Our Purpose</p>
            <h2 className="h3 fw-bold text-[#FF6A00]">What drives us</h2>
          </div>

          <div className="row g-4 mt-2">
            <div className="col-md-6">
              <div className="rounded-4 border border-light-subtle p-4 h-100 shadow-sm">
                <img
                  src="/assets/images/gallery_image_4.jpg"
                  alt="Mission illustration"
                  className="img-fluid rounded-3 mb-3"
                  style={{ height: "220px", width: "100%", objectFit: "cover" }}
                />
                <h3 className="h5 fw-bold mb-2 text-primary">Our Mission</h3>
                <p className="small text-muted mb-0">
                  Our mission is to ignite, inspire, and empower learners and teachers by showing the fun, importance, and influence of robotics technology in today’s world. We aim to make STEM learning practical, creative, and exciting.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="rounded-4 border border-light-subtle p-4 h-100 shadow-sm">
                <img
                  src="/assets/images/gallery_image_3.jpg"
                  alt="Vision illustration"
                  className="img-fluid rounded-3 mb-3"
                  style={{ height: "220px", width: "100%", objectFit: "cover" }}
                />
                <h3 className="h5 fw-bold mb-2 text-primary">Our Vision</h3>
                <p className="small text-muted mb-0">
                  Our vision is to transform learning by connecting science theory with practice, encouraging young people to develop creative thinking and pursue future opportunities in STEM and technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 border-top">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-4">
              <img
                src="/assets/images/andrew.jpeg"
                alt="Aisagbonhi Andrew"
                className="img-fluid rounded-4 shadow-sm"
                style={{ width: "100%", maxHeight: "360px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <p className="small text-uppercase text-muted fw-semibold tracking-wider mb-2">Leadership</p>
              <h2 className="h3 fw-bold mb-3 text-[#FF6A00]">Meet our CEO</h2>
              <h3 className="h5 fw-bold mb-2 text-primary">Aisagbonhi .C. Andrew</h3>
              <p className="small text-muted mb-3">
                Andrew is a certified teacher and a professional STEM and robotics educator and coach. He has trained over 1,500 teachers in STEM and robotics and has earned certifications from global and local partners including Edupoint Robocode, World Robotic Olympiad, Archlight Foundation, First Lego League, and the Lagos State Ministry of Education.
              </p>
              <div className="d-flex gap-3 align-items-center">
                <a
                  href="https://www.linkedin.com/in/andrew-aisagbonhi-687521145/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ceo-social-link"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/6thtouch__photgraphy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ceo-social-link"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/share/194omEZeiT/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ceo-social-link"
                  aria-label="Twitter Profile"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 border-top mb-5">
        <div className="container text-center">
          <p className="small text-uppercase text-muted fw-semibold tracking-wider mb-2">Educators</p>
          <h2 className="h3 fw-bold mb-2 text-[#FF6A00]">Here's some of our qualified tutors</h2>
          <p className="small text-muted mb-4">
            Celebrating the milestones, programs, and achievements that continue to shape our impact.
          </p>
          <div className="row g-4 mt-2">
            <div className="col-md-4 col-sm-6">
              <div id="tutorContainer" className="border border-3 rounded-3 mumuni-azeez mx-auto">
                <div className="info d-flex flex-column align-items-center justify-content-center gap-2">
                  <h5 className="mb-1 text-center">Chukwuchebem David</h5>
                  <div className="d-flex gap-3 mt-2">
                    <a
                      href="https://www.linkedin.com/in/david-chukwuchebem-13912734a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tutor-social-link"
                      aria-label="Chukwuchebem David LinkedIn"
                    >
                      <FaLinkedin size={18} />
                    </a>
                    <a
                      href="https://www.instagram.com/david.chukwuchebem/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tutor-social-link"
                      aria-label="Chukwuchebem David Instagram"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href="https://x.com/@dextrus001/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tutor-social-link"
                      aria-label="Chukwuchebem David Twitter"
                    >
                      <FaTwitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="tutorContainer" className="border border-3 rounded-3 idowu-farouk mx-auto">
                <div className="info d-flex flex-column align-items-center justify-content-center gap-2">
                  <h5 className="mb-1 text-center">Ahanotu David</h5>
                  <div className="d-flex gap-3 mt-2">
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tutor-social-link"
                      aria-label="Ahanotu David LinkedIn"
                    >
                      <FaLinkedin size={18} />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tutor-social-link"
                      aria-label="Ahanotu David Instagram"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tutor-social-link"
                      aria-label="Ahanotu David Twitter"
                    >
                      <FaTwitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="tutorContainer" className="border border-3 rounded-3 akalugwu mx-auto">
                <div className="info d-flex flex-column align-items-center justify-content-center gap-2">
                  <h5 className="mb-1 text-center">Akalugwu Desmond</h5>
                  <div className="d-flex gap-3 mt-2">
                    <a
                      href="https://www.linkedin.com/in/akalugwu-desmond-678074373"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tutor-social-link"
                      aria-label="Akalugwu Desmond LinkedIn"
                    >
                      <FaLinkedin size={18} />
                    </a>
                    <a
                      href="https://www.instagram.com/desmoiswired"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tutor-social-link"
                      aria-label="Akalugwu Desmond Instagram"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href="https://x.com/@desmoiswired"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tutor-social-link"
                      aria-label="Akalugwu Desmond Twitter"
                    >
                      <FaTwitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
