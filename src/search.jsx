import { useState } from "react";

function search(props) {
  const [loading, setLoading] = useState(false);
  const [jobSearch, setJobSearch] = useState({
    skills: "",
    location: "",
  });

  const handleChange = (e) => {
    e.persist();
    setJobSearch((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };
  const search = async () => {
    setLoading(true);
    await props.fetchJobsCustom(jobSearch);
    setLoading(false);
  };

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
                  onChange={handleChange}
                  value={jobSearch.location}
                  name="location"
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
                <select
                  onChange={handleChange}
                  value={jobSearch.skills}
                  name="skills"
                  type="text"
                  className="form-select p-3 text-center"
                  id="inputGroupSelect01"
                  placeholder="Input Service or Skill"
                >
                  <option>Tailoring and Fashion Design</option>
                  <option>Carpentry and Woodworking</option>
                  <option>Welding and Metal Fabrication</option>
                  <option>Plumbing</option>
                  <option>Masonry and Bricklaying</option>
                  <option>Hairdressing and Beauty Therapy</option>
                  <option>Catering and Culinary Arts</option>
                  <option>Auto Mechanics</option>
                  <option>Electrical Installation and Repair</option>
                  <option>Agriculture and Farming</option>
                  <option>Soap Making and Detergent Production</option>
                  <option>Bead Making and Jewelry Design</option>
                  <option>Interior Decoration</option>
                  <option>Painting and Wall Finishing</option>
                  <option>Furniture Making</option>
                  <option>Leatherwork and Shoe Making</option>
                  <option>Event Planning and Management</option>
                  <option>Graphic Design and Printing</option>
                  <option>Textile Design and Printing</option>
                  <option>Pottery and Ceramics</option>
                  <option>Landscaping and Gardening</option>
                  <option>Renewable Energy Installation and Maintenance</option>
                  <option>Refrigeration and Air Conditioning Repair</option>
                  <option>Digital Marketing</option>
                  <option>Sewing and Embroidery</option>
                  <option>Bicycle and Motorcycle Repair</option>
                  <option>Poultry Farming</option>
                  <option>Fish Farming (Aquaculture)</option>
                  <option>Tailoring and Textile Design</option>
                  <option>Soap Making and Cosmetics Production</option>
                  <option>Animal Husbandry</option>
                  <option>Beekeeping</option>
                  <option>Waste Management and Recycling</option>
                  <option>Photography and Videography</option>
                  <option>Carpentry and Joinery</option>
                  <option>Hair Braiding and Weaving</option>
                  <option>Electronics Repair</option>
                  <option>Floristry and Flower Arrangement</option>
                  <option>Pottery and Clay Sculpting</option>
                  <option>Auto Body Repair</option>
                  <option>Basket Weaving</option>
                  <option>Carp Fishing</option>
                  <option>Roofing Installation and Repair</option>
                  <option>Shoe Repair and Cobbling</option>
                  <option>Fruits and Vegetable Processing</option>
                  <option>Brickmaking</option>
                  <option>Candle Making</option>
                  <option>Herbal Medicine Production</option>
                  <option>Dairy Farming</option>
                  <option>Building Painting and Decorating</option>
                  <option>Snail Farming</option>
                  <option>Tile Laying and Installation</option>
                  <option>Handicrafts (Beads, Crafts, etc.)</option>
                  <option>Furniture Upholstery</option>
                  <option>Food Processing and Packaging</option>
                  <option>Computer Literacy</option>
                  <option>Basic Coding and Programming</option>
                  <option>
                    Graphic Design using Software (e.g., Adobe Suite)
                  </option>
                  <option>Web Development</option>
                  <option>Social Media Management</option>
                  <option>Search Engine Optimization (SEO)</option>
                  <option>Content Creation and Blogging</option>
                  <option>Digital Photography and Photo Editing</option>
                  <option>Video Editing</option>
                  <option>E-commerce Management</option>
                  <option>Data Entry and Analysis</option>
                  <option>Email Marketing</option>
                  <option>Online Advertising (Google Ads, Facebook Ads)</option>
                  <option>UI/UX Design</option>
                  <option>Mobile App Development</option>
                  <option>Cybersecurity Basics</option>
                  <option>Cloud Computing (e.g., AWS, Azure)</option>
                  <option>
                    Virtual Reality (VR) and Augmented Reality (AR)
                  </option>
                  <option>3D Modeling and Animation</option>
                  <option>Digital Copywriting</option>
                  <option>E-book Publishing</option>
                  <option>Online Course Creation</option>
                  <option>Influencer Marketing</option>
                  <option>Digital Analytics</option>
                  <option>Podcasting and Audio Editing</option>
                  <option>Remote Work Tools and Collaboration</option>
                  <option>Online Payment Systems</option>
                  <option>Online Customer Support</option>
                  <option>Data Visualization</option>
                  <option>Affiliate Marketing</option>
                  <option>Internet Research</option>
                  <option>Social Media Advertising</option>
                  <option>Digital Project Management</option>
                  <option>Cryptocurrency and Blockchain Basics</option>
                  <option>Online Fundraising and Crowdfunding</option>
                  <option>Digital Music Production</option>
                  <option>Online Reputation Management</option>
                  <option>Web Analytics</option>
                  <option>Mobile Marketing</option>
                  <option>Virtual Assistance</option>
                  <option>Online Survey Design and Analysis</option>
                  <option>Digital Health Technologies</option>
                  <option>Digital Product Design</option>
                  <option>Online Networking and Relationship Building</option>
                  <option>Online Tutoring and Teaching</option>
                  <option>Internet of Things (IoT) Concepts</option>
                  <option>Voice Search Optimization</option>
                  <option>Digital Event Planning and Management</option>
                  <option>Data Privacy and GDPR Compliance</option>
                  <option>Online Language Translation</option>
                </select>
              </div>
            </div>
            <div className="d-flex justify-content-center mb-2">
              <button
                // disabled={loading}
                className="btn btn px-5 rounded-5 fw-bold"
                style={{ backgroundColor: "yellowgreen" }}
                type="submit"
                onClick={search}
              >
                {loading ? (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border text-success" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  "Search"
                )}
                <i className="bi bi-search ps-2"></i>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default search;
