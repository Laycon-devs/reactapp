import { Link } from "react-router-dom"

function navbar() {
  return (
    <div>
        {/* NAVBAR START */}
      <nav className="navbar navbar-expand-lg bg-white px-lg-5 px-md-5 border-1 border-black border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand mx-auto" href="/">
            <img
              src="./img/allservices.png"
              className="img-fluid"
              style={{ width: 100 }}
              alt="allservices"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav bg-transparent my-2 my-lg-0 ms-auto pe-5 fw-semibold align-items-end text-center d-block d-lg-flex">
              <li className="nav-item px-lg-4">
                <Link to={"/"} className="nav-link" href="#">
                  Home
                </Link>
              </li>
            </ul>
            <div className="d-lg-flex d-none d-md-none">
              <Link to={"/login"} className="btn btn-outline-warning rounded-5 px-5" type="submit">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* NAVBAR END */}

    </div>
  )
}

export default navbar