function viewService(props) {
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          // open={!!Object.keys(props.job).length}
        >
          <div className="modal-content text-center">
            <div className="modal-header">
              <h1
                className="modal-title fs-3 fw-normal fw-bold"
                id="staticBackdropLabel"
              >
                {props.job.yourName}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-5">
              <div class="card-flush text-center">
                <div class="card-header">{props.job.yourName}</div>
                <div class="card-body">
                  <h5 class="card-title">{props.job.skills}</h5>
                  <p class="card-text">{props.job.descrip}</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <a
                      href={`https://wa.me/+234${props.job.whatsappLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-success me-3"
                    >
                      <i className="bi bi-whatsapp pe-2 fs-4"></i>Contact via WhatsApp
                    </a>
                    <a className="btn btn-danger" href={`https://mailto:${props.job.emailUrl}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      <i className="bi bi-envelope-at pe-2 fs-4"></i>Contact via Email
                    </a>
                  </div>
                </div>
                <div class="card-footer text-body-success fs-5 fw-bold">
                  Phone Number: 0{props.job.whatsappLink}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default viewService;
