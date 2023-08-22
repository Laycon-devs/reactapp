
function search() {
  return (
    <div>
      {/* -----------------SERVICES AND LOCATION LIST----------------- */}
      <div className="container-fluid bg-warning p-5 pb-5">
        <nav className="bg-body-tertiary p-lg-2 p-3 w-100 rounded-4 w-75 mx-auto">
          <div className="container-fluid">
            <h3 className="fw-bold text-center">Browse Services by Category</h3>
            <div className="d-lg-flex d-sm-block mx-auto" role="search">
              <div className="input-group pe-3 mb-4 ms-2 mt-3">
                <select
                  className="form-select text-center"
                  id="inputGroupSelect01"
                >
                  <option>Ado Ekiti</option>
                  <option>Efon</option>
                  <option>Ekiti East</option>
                  <option>Ekiti South-West</option>
                  <option>Ekiti West</option>
                  <option>Emure</option>
                  <option>Gbonyin</option>
                  <option>Ido Osi</option>
                  <option>Ijero Ekiti</option>
                  <option>Ikere Ekiti</option>
                  <option>Ikole Ekiti</option>
                  <option>Ilejemeje</option>
                  <option>Irepodun/Ifelodun</option>
                  <option>Ise/Orun</option>
                  <option>Moba</option>
                  <option>Oye Ekiti</option>
                </select>
              </div>
              <div className="input-group pe-3 mb-4 ms-2 mt-3">
                <select
                  className="form-select text-center"
                  id="inputGroupSelect01"
                >
                  <option>Plumbing</option>
                  <option>Carpentry</option>
                  <option>Masonry</option>
                  <option>Electrical Wiring</option>
                  <option>Tailoring and Fashion Design</option>
                  <option>Hairdressing and Barbering</option>
                  <option>Welding and Metal Fabrication</option>
                  <option>Auto Mechanics</option>
                  <option>Painting and Decorating</option>
                  <option>Tiling and Flooring Installation</option>
                  <option>Catering and Culinary Arts</option>
                  <option>Event Planning and Management</option>
                  <option>Leatherwork and Shoemaking</option>
                  <option>Bead Making and Jewelry Design</option>
                  <option>Interior Decoration</option>
                  <option>Makeup Artistry</option>
                  <option>Graphic Design</option>
                  <option>Web Design and Development</option>
                  <option>Mobile App Development</option>
                  <option>Computer Repair and Maintenance</option>
                  <option>Photography</option>
                  <option>Video Editing</option>
                  <option>Digital Marketing</option>
                  <option>Fashion Illustration</option>
                  <option>Screen Printing</option>
                  <option>Woodworking</option>
                  <option>Upholstery</option>
                  <option>Agricultural Farming and Gardening</option>
                  <option>Fish Farming (Aquaculture)</option>
                  <option>Poultry Farming</option>
                  <option>Soap Making and Cosmetics Production</option>
                  <option>Solar Panel Installation</option>
                  <option>Refrigeration and Air Conditioning Repair</option>
                  <option>Cake Baking and Decorating</option>
                  <option>Hair Extensions and Weaving</option>
                  <option>Carpentry</option>
                  <option>Plumbing</option>
                  <option>Auto Mechanics</option>
                  <option>Electrical Installation</option>
                  <option>Tailoring</option>
                  <option>Welding and Fabrication</option>
                  <option>Masonry and Bricklaying</option>
                  <option>Hairdressing</option>
                  <option>Makeup Artistry</option>
                  <option>Bead Making</option>
                  <option>Jewelry Design</option>
                  <option>Leatherwork</option>
                  <option>Painting and Decorating</option>
                  <option>Tiling and Flooring</option>
                  <option>Photography</option>
                  <option>Graphic Design</option>
                  <option>Web Development</option>
                  <option>Computer Programming</option>
                  <option>Mobile Phone Repair</option>
                  <option>Electronics Repair</option>
                  <option>Screen Printing</option>
                  <option>Textile Printing</option>
                  <option>Shoe Making</option>
                  <option>Bag Making</option>
                  <option>Interior Design</option>
                  <option>Event Planning</option>
                  <option>Catering</option>
                  <option>Soap Making</option>
                  <option>Cosmetics Production</option>
                  <option>Fish Farming</option>
                  <option>Poultry Farming</option>
                  <option>Snail Farming</option>
                  <option>Vegetable Farming</option>
                  <option>Fruit Farming</option>
                  <option>Animal Husbandry</option>
                  <option>Organic Farming</option>
                  <option>Dairy Farming</option>
                  <option>Mushroom Farming</option>
                  <option>Honey Production</option>
                  <option>Renewable Energy Installation</option>
                  <option>Solar Energy System Installation</option>
                  <option>Wind Energy System Installation</option>
                  <option>Plumbing System Design</option>
                  <option>HVAC System Installation</option>
                  <option>Auto Body Repair</option>
                  <option>Car Painting</option>
                  <option>Auto Detailing</option>
                  <option>Furniture Making</option>
                  <option>Wood Carving</option>
                  <option>Traditional Weaving</option>
                  <option>Pottery and Ceramics</option>
                  <option>Basket Weaving</option>
                  <option>Toy Making</option>
                  <option>Childcare Services</option>
                  <option>Fitness Training and Personal Coaching</option>
                  <option>Tailoring Pattern Making</option>
                  <option>Sewing Machine Repair</option>
                  <option>Mobile App Design</option>
                  <option>Social Media Marketing</option>
                  <option>Content Writing</option>
                  <option>Language Translation</option>
                  <option>Financial Management</option>
                  <option>Welding Inspection</option>
                  <option>Agro-processing</option>
                  <option>Food Preservation Techniques</option>
                </select>
              </div>
            </div>
            <div className="d-flex justify-content-center mb-2">
              <button
                className="btn btn px-5 rounded-5"
                style={{ backgroundColor: "yellowgreen" }}
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default search;



































{/* <div className="col">
            <div
              className="card shadow-lg border-success border-2 rounded-4 mb-3"
              style={{ maxWidth: 540 }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="./img/black-woman-1.jpg"
                    className="img-fluid h-100 rounded-start-4"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title pb-2">Bolaji Olayemi</h5>
                    <h5 className="card-text text-black fw-bold">
                      Service:{" "}
                      <span className="fs-5 fw-normal text-primary">
                        Hair Dressing
                      </span>
                    </h5>
                    <h5 className="card-text text-black fw-bold">
                      Location:{" "}
                      <span className="fs-5 fw-normal text-primary">
                        Ado Ekiti
                      </span>
                    </h5>
                    <button
                    //   type="button"
                    //   class="btn btn-outline-warning my-2 px-4"
                    //   data-bs-toggle="modal"
                    //   data-bs-target="#staticBackdrop"
                    >
                      Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}








          {serviceData.map((service) => (
            <div className="col" key={service.id}>
              <div className="card shadow-lg border-success border-2 rounded-4 mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={service.workImg} className="img-fluid h-100 rounded-start-4" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title pb-2">{service.yourName}</h5>
                      <h5 className="card-text text-black fw-bold">
                        Service: <span className="fs-5 fw-normal text-primary">{service.skills}</span>
                      </h5>
                      <h5 className="card-text text-black fw-bold">
                        Location: <span className="fs-5 fw-normal text-primary">{service.location}</span>
                      </h5>
                      <a href={service.Whatsapplink} className="btn btn-outline-warning my-2 px-4">
                        Request
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
























          {/* <div className="row row-cols-1 row-cols-md-2 g-4"> */}
          <div className="col-6">
            <div
              className="card shadow-lg border-success border-2 rounded-4 mb-3"
              style={{ maxWidth: 540 }}
            >
              {/* <div className="row g-0"> */}
                {/* <div className="col-md-4">
                  <img
                    src="./img/find-great-work.webp"
                    className="img-fluid h-100 rounded-start-4"
                    alt="..."
                  />
                </div> */}
                <div className="col">
                  <div className="card-body">
                    <h5 className="card-title pb-2">{props.yourName}</h5>
                    <h5 className="card-text text-black fw-bold">
                      Service:{" "}
                      <span className="fs-5 fw-normal text-primary">
                        {props.skills}
                      </span>
                    </h5>
                    <h5 className="card-text text-black fw-bold">
                      Location:{" "}
                      <span className="fs-5 fw-normal text-primary">
                        {props.location}
                      </span>
                    </h5>
                    <button
                      type="button"
                      class="btn btn-outline-warning my-2 px-4"
                    >
                      Request
                    </button>
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        {/* </div> */}








































        const fetchJobs = async () => {
          const req = await firestore.collection("jobs").get();
          console.log(req);
        };
      
        useEffect(() => {
          fetchJobs();
        }, []);
























        <button
  type="button"
  className="btn btn-warning"
  data-bs-dismiss="modal"
  onClick={() => {
    onSubmitNewJob();
    alert('Posted successfully. Refresh to view.');
  }}
>
  Post Now
</button>




























// __________________________________-----------------------------------------------------main----------------------

import { Link } from "react-router-dom";
import Search from "./search";
import ServicesList from "./servicesList";
import ServicesInput from "./servicesInput";
import { firestore } from "./firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

function dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("profilePic");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  };

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

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

  useEffect(() => {
    fetchJobs();
  }, []);

  // const postJob = async (jobDetails) => {
  //   await firestore.collection("jobs").add({ 
  //     ...jobDetails
  //   });
  // };

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
          <div className="text-center fw-bold text-warning fs-1 d-lg-block d-md-block d-none">
            Service Provider
          </div>
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
            My Account
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
      <Search />
      {loading ? (
        <div className="d-flex justify-content-center m-5">
          <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        jobs.map((job) => <ServicesList key={job.id} {...job} />)
      )}
      <ServicesInput />
    </div>
  );
}

export default dashboard;





























const fetchJobsCustom = async (jobSearch) => {
  try {
    const data = await getDocs(JobscollectionRef)
    where("location", '==', jobSearch.location)
    .where("skills", '==', jobSearch.skills)
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setJobs(filteredData);
  } catch (err) {
    console.error(err);
  }
  setLoading(false);
}





























const [loading, setLoading] = useState(true);
const [jobs, setJobs] = useState([]);

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
    const data = await getDocs(JobscollectionRef, 
      where("location", '==', jobSearch.location),
      where("skills", '==', jobSearch.skills)
    );

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