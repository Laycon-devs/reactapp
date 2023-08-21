import Footer from "./footer";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

function theme() {
  return (
    <div>
      <Navbar />
      {/* ------------------------MAIN HERO START*/}
      <div className="container p-3 mb-5">
        <div className="row">
          <div className="col-lg-6">
            <h1
              style={{ fontFamily: "Playfair Display", color: "yellowgreen" }}
              className="display-1 fw-bold"
            >
              How work should work
            </h1>
            <h4 className="mt-4">
              Forget the old rules. You can have the best people. Right now.
              Right here.
            </h4>
            <Link to={"./login"}  className="mt-4 btn btn-outline-warning rounded-5 px-4">
              Get Started
            </Link>
          </div>

          <div className="col-lg-6">
            <img src="./img/term_sheet.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      {/* ------------------------MAIN HERO END*/}

      <div className="container p-5 text-center">
        <h3
          style={{ fontFamily: "Playfair Display" }}
          className="text-black fw-bold"
        >
          This is how{" "}
          <span style={{ color: "yellowgreen" }}>people find your</span>{" "}
          Services
        </h3>
        <Link to={"./login"} className="mt-4 btn btn-warning rounded-5 px-4">
          Meet Professional
        </Link>
      </div>

      {/* ------------------------SECOND HERO SECTION START*/}
      <div className="container p-3">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="./img/black-man-1.avif"
              className="img-fluid h-100 rounded-4 shadow-lg"
              alt=""
            />
          </div>

          <div className="col-lg-6">
            <h1
              style={{ fontFamily: "Playfair Display", color: "yellowgreen" }}
              className="fw-bold text-center py-3"
            >
              Control your workflow
            </h1>

            <ol className="list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-start mb-3">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <i className="bi bi-pencil-square text-warning fs-5 pe-2"></i>No
                    cost to join
                  </div>
                  Register, Browse professionals and Explore.
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start mb-3">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <i className="bi bi-pin-angle text-warning fs-5 pe-2"></i>Post a
                    service and get hire
                  </div>
                  Finding services doesn't have to be a chore. Post a service or
                  we can search for you!
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start mb-3">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <i className="bi bi-stars text-warning fs-5 pe-2"></i>Work with
                    the best
                  </div>
                  Hire, classify and pay your talent
                </div>
              </li>
            </ol>

            <Link to={"./login"} className="ms-5 mt-4 btn btn-warning rounded-5 px-4">
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* ------------------------SECOND HERO SECTION END*/}
      {/* // ---------footer */}
      <Footer />
    </div>
  );
}

export default theme;
