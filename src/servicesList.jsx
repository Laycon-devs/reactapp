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
            <i class="pe-2 fs-4 bi bi-geo-alt-fill"></i>
            {props.location}
          </div>
          <div className="col-sm-3 btn btn-warning fs-5 fw-normal">Request</div>
        </div>
      </div>
    </div>
  );
}

export default servicesList;
