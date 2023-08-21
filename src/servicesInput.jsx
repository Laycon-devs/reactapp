import { useState } from "react";
import { firestore } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function servicesInput() {
  const [newName, setNewName] = useState("");
  const [newSkills, setNewSkills] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newdescrip, setNewDescrip] = useState("");
  const [newEmailUrl, setNewEmailUrl] = useState("");
  const [newWhatsappLink, setNewWhatsappLink] = useState("");

  const JobscollectionRef = collection(firestore, "jobs");

  const onSubmitNewJob = async () => {
    try {
      await addDoc(JobscollectionRef, {
        yourName: newName,
        skills: newSkills,
        location: newLocation,
        descrip: newdescrip,
        emailUrl: newEmailUrl,
        whatsappLink: newWhatsappLink,
      });

      fetchJobs();
    } catch (err) {
      console.error(err);
    }
  };

  //   const [jobDetails, setJobDetails] = useState({
  //     yourName: "",
  //     skills: "",
  //     location: "",
  //     emailUrl: "",
  //     whatsappLink: "",
  //     descrip: "",
  //   });

  //   const handleChange = e => {
  //     e.persist();
  //     setJobDetails(oldState => ({
  //       ...oldState, [e.target.name]: e.target.value, }))
  //   }

  //   const handleSubmit = async () => {
  //     await props.postJob(jobDetails)
  //   }
  // console.log(jobDetails);
  return (
    <div>
      {/* Services Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content text-center">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Post a Service
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-5">
              <div className="row row-cols-1 row-cols-md-2 g-4 fw-bold">
                <div className="col">
                  <input
                    onChange={(e) => setNewName(e.target.value)}
                    // name="yourName"
                    // value={jobDetails.yourName}
                    type="text"
                    className="form-control p-3"
                    placeholder="Name"
                  />
                </div>
                <div className="col">
                  <input
                    onChange={(e) => setNewSkills(e.target.value)}
                    // name="skills"
                    // value={jobDetails.skills}
                    type="text"
                    className="form-control p-3"
                    placeholder="Enter your Service or Skill"
                  />
                </div>
                <div className="col">
                  <select
                    onChange={(e) => setNewLocation(e.target.value)}
                    // name="location"
                    // value={jobDetails.location}
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
                <div className="col">
                  <input
                    onChange={(e) => setNewEmailUrl(e.target.value)}
                    // name="emailUrl"
                    // value={jobDetails.emailUrl}
                    type="text"
                    className="form-control p-3"
                    placeholder="Enter Work Email"
                  />
                </div>
                <div className="col input-group">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    +234
                  </span>
                  <input
                    onChange={(e) => setNewWhatsappLink(e.target.value)}
                    // name="whatsappLink"
                    // value={jobDetails.whatsappLink}
                    type="text"
                    className="form-control p-3"
                    placeholder="WhatsApp"
                  />
                </div>
                <div className="col">
                  <input
                    onChange={(e) => setNewDescrip(e.target.value)}
                    // name="descrip"
                    // value={jobDetails.descrip}
                    type="text"
                    className="form-control p-3"
                    placeholder="Description"
                  />
                </div>
                <div className="col mx-auto mt-5">
                  <label htmlFor="formFile" className="form-label">
                    Upload Your recent Work
                  </label>
                  <input
                    // onChange={handleChange}
                    className="form-control p-3"
                    type="file"
                    id="formFile"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={() => {
                  onSubmitNewJob();
                  alert("Posted successfully. Refresh to view.");
                }}
              >
                Post Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default servicesInput;
