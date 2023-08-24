function servicesList(props) {
  return (
    <div className="bg-warning">
      <div className="container text-center text-dark fw-bold p-5">
        <div
          className="row d-flex p-5 rounded-4 shadow justify-content-center align-items-center"
          style={{ backgroundColor: "yellowgreen", cursor: "pointer" }}
        >
          <div className="col-sm-3 fs-2 mb-4">{props.yourName}</div>
          <div className="col-sm-3 fs-5 fw-normal mb-2">
            <i className="pe-2 fs-4 bi bi-person-workspace"></i>
            {props.skills}
          </div>
          <div className="col-sm-3 fs-5 fw-normal mb-4">
            <i className="pe-2 fs-4 bi bi-geo-alt-fill"></i>
            {props.location}
          </div>
          <div className="col-sm-3">
          <button
              onClick={props.open}
              type="button"
              className="btn btn-warning rounded-3 px-5 fw-bold"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop2"
            >
              Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default servicesList;
