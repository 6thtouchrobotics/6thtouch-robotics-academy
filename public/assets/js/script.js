const configUpArrow = () => {
  if (scrollY > 70) {
    document.querySelector("#upArrowBtn").style.display = "block";
  } else {
    document.querySelector("#upArrowBtn").style.display = "none";
  }
};

configUpArrow();
window.onscroll = configUpArrow;

let { pathname } = location;

let headerHtml = ` <nav
        class="navbar navbar-expand-lg fixed-top text-light navbar-dark scroll-nav"
        aria-label="Main navigation"
      >
        <div class="container py-1">
          <a class="navbar-brand fw-bold scroll-nav-a" href="${
            pathname == "/" ? "#" : "/"
          }"
            ><img
              src="/assets/images/6thtouch_logo.png"
              alt="6thtouch STEM Logo"
              width="70"
          /></a>
          <button
            class="navbar-toggler p-0 border-0 scroll-nav-a"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-navicon m-1"></i>
          </button>
          <div
            class="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link scroll-nav-a active"
                  aria-current="page"
                  href="${pathname == "/" ? "#" : "/"}"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link scroll-nav-a" href="${
                  pathname == "/about/" ? "#" : "/about/"
                }">About Us</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle scroll-nav-a"
                  href="#"
                  id="dropdown01"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Solutions</a
                >

                <ul class="dropdown-menu" aria-labelledby="dropdown01">
                  <li>
                    <a class="dropdown-item" href="${
                      pathname == "/home-tutoring/" ? "#" : "/home-tutoring/"
                    }">
                      <i class="fa fa-home me-2"></i> Home Tutoring</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="${
                      pathname == "/teacher-tutoring/"
                        ? "#"
                        : "/teacher-tutoring/"
                    }">
                      <i class="fa fa-blackboard me-2"></i> Teaching
                      Tutoring</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="${
                      pathname == "/coding-robotics-tutor/"
                        ? "#"
                        : "/coding-robotics-tutor/"
                    }">
                      <i class="fa fa-code me-2"></i> Coding &amp; Robotics</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="${
                      pathname == "/school-tutoring/"
                        ? "#"
                        : "/school-tutoring/"
                    }">
                      <i class="fa fa-school me-2"></i> School Tutoring</a
                    >
                  </li>
                  <hr/>
                  <li>
                    <a class="dropdown-item" href="${
                      pathname == "/tutors-registration-form/"
                        ? "#"
                        : "/tutors-registration-form/"
                    }">
                      <i class="fa fa-person me-2"></i> Become a Tutor</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link scroll-nav-a" href="${
                  pathname == "/gallery/" ? "#" : "/gallery/"
                }">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link scroll-nav-a" href="${
                  pathname == "/contact/" ? "#" : "/contact/"
                }">Contact Us</a>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>`;

let footerHtml = `<div class="container-fluid gradientBgColor py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-4 mb-md-0">
              <a class="fw-bold ms-3" href="${pathname == "/" ? "#" : "/"}"
                ><img
                  src="/assets/images/6thtouch_logo.png"
                  alt="6thtouch STEM Logo"
                  width="90"
              /></a>
              <h4 class="mt-3">Subscribe to our Newsletter</h4>
              <p class="lead mt-2">
                Be the first to get notified when we have an update. Subscribe
                to our newsletter now to activate
              </p>
              <form class="row">
                <div class="col-sm-8 mb-3 mb-md-0">
                  <input
                    type="email"
                    placeholder="Enter your Email address"
                    class="form-control me-3"
                    required
                  />
                </div>
                <div class="col-sm-4">
                  <button class="btn btn-primary w-100">Subscribe</button>
                </div>
              </form>
            </div>
            <div class="col-md-2">
              <h5 class="mb-4">Quick Links</h5>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a href="${
                    pathname == "/home-tutoring/" ? "#" : "/home-tutoring/"
                  }" class="link-dark text-decoration-none"
                    >Home Tutors</a
                  >
                </li>
                <li class="mb-2">
                  <a href="${
                    pathname == "/teacher-tutoring/"
                      ? "#"
                      : "/teacher-tutoring/"
                  }" class="link-dark text-decoration-none"
                    >Teaching Tutoring</a
                  >
                </li>
                <li class="mb-2">
                  <a href="${
                    pathname == "/coding-robotics-tutor/"
                      ? "#"
                      : "/coding-robotics-tutor/"
                  }" class="link-dark text-decoration-none"
                    >Coding and Robotics</a
                  >
                </li> 
                <li class="mb-2">
                  <a href="${
                    pathname == "/school-tutoring/"
                      ? "#"
                      : "/school-tutoring/"
                  }" class="link-dark text-decoration-none"
                    >School Tutoring</a
                  >
                </li> 
                <hr/>
                <li class="mb-2">
                  <a href="${
                    pathname == "/tutors-registration-form/"
                      ? "#"
                      : "/tutors-registration-form/"
                  }" class="link-dark text-decoration-none"
                    >Sign in as a Tutor</a
                  > 
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <h5 class="mb-4">Other Links</h5>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a href="${
                    pathname == "/" ? "#" : "/"
                  }" class="link-dark text-decoration-none"
                    >Home</a
                  >
                </li>
                <li class="mb-2">
                <a href="${
                  pathname == "/contact/" ? "#" : "/contact/"
                }" class="link-dark text-decoration-none"
                  >Contact us</a
                  >
                  </li>
                  <li class="mb-2">
                  <a href="${
                    pathname == "/about/" ? "#" : "/about/"
                  }" class="link-dark text-decoration-none"
                  >About us</a
                  >
                  </li>
                  <li class="mb-2">
                    <a href="${
                      pathname == "/gallery/" ? "#" : "/gallery/"
                    }" class="link-dark text-decoration-none"
                      >Gallery</a
                    >
                  </li>
                <li class="mb-2">
                  <a href="#" class="link-dark text-decoration-none"
                    >Terms of use</a
                  >
                </li>
                <li class="mb-2">
                  <a href="#" class="link-dark text-decoration-none"
                    >Privacy Policy</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <h5 class="mb-4">Social Media</h5>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a href="https://www.linkedin.com/in/andrew-aisagbonhi-687521145/" target="_black" class="link-dark text-decoration-none"
                    ><i class="me-2 fab fa-linkedin"></i> Linkedin</a
                  >
                </li>
                <li class="mb-2">
                  <a href="https://www.instagram.com/6thtouch_robotics/" target="_blank" class="link-dark text-decoration-none"
                    ><i class="me-2 fab fa-instagram"></i> Instagram</a
                  >
                </li>
                 <li class="mb-2">
                  <a href="#" target="_blank" class="link-dark text-decoration-none"
                    ><i class="me-2 fab fa-facebook"></i> Facebook</a
                  >
                </li>
                <li class="mb-2">
                  <a href="#" target="_blank" class="link-dark text-decoration-none"
                    ><i class="me-2 fab fa-twitter"></i> Twitter</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>`;

document.querySelector("header").innerHTML = headerHtml;
document.querySelector("footer").innerHTML = footerHtml;

(function () {
  "use strict";
  document
    .querySelector("#navbarSideCollapse")
    .addEventListener("click", function () {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
})();
