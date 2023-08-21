import Navbar from "./navbar";
import Footer from "./footer";
import { signInWithGoogle } from "./firebase";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid p-5 bg-warning rounded-bottom-5">
        <div className="row">
          <div className="col-lg-6 text-center d-block">
            <h2 className="fw-bold text-black mb-3">
              Post a service and hire a pro
            </h2>
            <p className="fs-4">Meet clients you're excited to work with and take
your career or business to new heights.</p>
            <img src="./img/black-woman-1.jpg" className="img-fluid w-100 rounded-4 mb-3" alt="woman" />
              <p className="fs-4">Find opportunities for every stage of your freelance career</p>
          </div>

          <div className="col-lg-6 text-center my-auto">
          <div className="login rounded-4 border bg-white p-3 p-md-5 shadow-lg">
          <h2 className="mb-3 text-center fw-bold" style={{ color: "yellowgreen" }}>
            Sign In
          </h2>
          <a
            onClick={signInWithGoogle}
              type="submit"
              style={{ backgroundColor: "yellowgreen" }}
              className="btn p-3 mt-3 fw-bold text-primary"
            >
              <img src="./img/google-icon.png" className="img-fluid" style={{width: '50px'}} alt="" />
              <span className="ms-3 bg-white p-3 rounded-3">Sign in <span className="d-none d-lg-inline">with Google</span></span>
            </a>
        </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
