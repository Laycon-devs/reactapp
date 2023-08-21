
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
                  className="form-select p-3 text-center"
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
              <input
                    type="text"
                    className="form-control p-3 text-center"
                    placeholder="Input Service or Skill"
                  />
              </div>
            </div>
            <div className="d-flex justify-content-center mb-2">
              <button
                className="btn btn px-5 rounded-5 fw-bold"
                style={{ backgroundColor: "yellowgreen" }}
                type="submit"
              >
                <i className="bi bi-search pe-2"></i>Search
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default search;