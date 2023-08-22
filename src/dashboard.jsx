import { Link } from "react-router-dom";
import Search from "./search";
import ServicesList from "./servicesList";
import ServicesInput from "./servicesInput";
import ViewService from "./viewService";
import { firestore } from "./firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

function dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("profilePic");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  };

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [viewJob, setViewJob] = useState({})
  
  const JobscollectionRef = collection(firestore, "jobs");
  
  const fetchJobs = async () => {
    try {
      const data = await getDocs(JobscollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setJobs(filteredData);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };
  
  const fetchJobsCustom = async (jobSearch) => {
    try {
      const q = query(
        JobscollectionRef,
        where("location", "==", jobSearch.location),
        where("skills", "==", jobSearch.skills)
      );
  
      const data = await getDocs(q);
  
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
  
      setJobs(filteredData);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    fetchJobs();
  }, []);
  

  return (
    <div>
      {/* NAVBAR START */}
      <nav className="navbar navbar-expand-lg bg-white px-lg-5 px-md-5 border-1 border-black border-bottom">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="/">
            <img
              src="./img/allservices.png"
              className="img-fluid"
              style={{ width: 100 }}
              alt="allservices"
            />
          </a>
          <a className="text-center text-decoration-none fw-bold text-warning fs-1 d-lg-block d-md-block d-none" href="">
            Service Provider
          </a>
          <button
            className="navbar-toggler d-block"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
      {/* NAVBAR END */}

      {/* SIDEBAR-------------------- */}
      <div
        className="offcanvas offcanvas-start rounded-end-4"
        tabIndex={-1}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header text-center">
          <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
            Profile
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body text-center">
          <img
            className="img-fluid w-50 rounded-pill border border-warning border-3"
            src={localStorage.getItem("profilePic")}
            alt=""
          />
          <div className="d-flex justify-content-center align-items-start mb-3">
            <h5 className="fs-5">{localStorage.getItem("name")}</h5>
          </div>
          <div className="d-flex justify-content-center align-items-start mb-5">
            <i className="bi bi-envelope fs-4 pe-2 text-success"></i>
            <p className="fs-5">{localStorage.getItem("email")}</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              class="btn btn-success rounded-5 me-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Post a Service
            </button>
          </div>
        </div>
        <Link
          to={"/"}
          onClick={handleLogout}
          className="btn btn-danger rounded-4 p-3 text-black"
        >
          Logout <i className="bi bi-box-arrow-right fs-5 text-warning"></i>
        </Link>
      </div>
      <Search fetchJobsCustom={fetchJobsCustom} />
      {loading ? (
        <div className="d-flex justify-content-center m-5">
          <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        jobs.map((job) => <ServicesList open={() => setViewJob(job)} key={job.id} {...job} />)
      )}
      <ServicesInput />
      <ViewService job={viewJob} closeModal={() => setViewJob({})} />
    </div>
  );
}

export default dashboard;
