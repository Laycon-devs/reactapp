function footer() {
  return (
    <div>
      <footer>
        <div
          className="container p-lg-5 p-3 ms-auto mt-5 rounded-top-5"
          style={{
            backgroundColor: "#faf689",
          }}
        >
          <div className="px-lg-5 d-flex justify-content-center align-items-center">
            <img
              src="./img/all_favcon.png"
              className="img-fluid"
              style={{ width: 100 }}
              alt="allservices"
            />
            <h5 className="fw-normal text-dark text-center">
              © Copyright 2023 All Services. All rights reserved.
            </h5>
          </div>

          <div className="d-flex justify-content-center align-items-end">
            <a
              href=""
              className="px-5 text-decoration-none"
              style={{
                color: "yellowgreen",
              }}
            >
              Terms
            </a>
            <div
              className="fs-4 fw-bold"
              style={{
                fontFamily: "serif",
              }}
            >
              .
            </div>
            <a
              href=""
              className="px-5 text-decoration-none"
              style={{
                color: "yellowgreen",
              }}
            >
              Privacy
            </a>
          </div>
          <a href="#">
            <i
              className="bi bi-arrow-up-circle fs-2 float-end"
              style={{
                color: "yellowgreen",
              }}
            ></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default footer;
