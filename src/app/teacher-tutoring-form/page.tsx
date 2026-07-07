"use client";

import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function TeacherTutoringForm() {
  const [countriesData, setCountriesData] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      const url = "https://countriesnow.space/api/v0.1/countries";
      try {
        const response = await fetch(url);
        const result = await response.json();
        let { data } = result;

        data = data.sort((a, b) => {
          const nameA = a.country.toUpperCase();
          const nameB = b.country.toUpperCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });

        setCountriesData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching locations:", error);
        setLoading(false);
      }
    };
    fetchLocation();
  }, []);

  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);
    if (countryName) {
      const matched = countriesData.find((c) => c.country === countryName);
      if (matched && matched.cities) {
        setCities(matched.cities.sort());
      } else {
        setCities([]);
      }
    } else {
      setCities([]);
    }
  };

  return (
    <section className="container-fluid py-5 mt-5 mb-5">
      <div className="container py-4">
        <h1 className="h2 fw-bold mb-2" style={{ color: "#FF6A00" }}>Application for Teachers Tutoring</h1>
        <p className="lead">Please complete this form to request a tutor as a teacher.</p>
        <form
          className="row mt-4"
          action="https://formspree.io/f/mgojqpne"
          method="post"
        >
          <div className="col-md-6 mt-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="First name *"
                name="First name"
                required
              />
              <label>
                First name <span className="text-danger">*</span>
              </label>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Last name *"
                name="Last name"
                required
              />
              <label>
                Last name <span className="text-danger">*</span>
              </label>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="form-floating">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Email *"
                name="Email"
                required
              />
              <label>
                Email <span className="text-danger">*</span>
              </label>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="form-floating">
              <input
                type="tel"
                className="form-control form-control-lg"
                placeholder="Phone Number *"
                name="Phone Number"
                required
              />
              <label>
                Phone Number (Whatsapp) <span className="text-danger">*</span>
              </label>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Name of school/organization *"
                name="Name of school/organization"
                required
              />
              <label>
                Name of school/organization <span className="text-danger">*</span>
              </label>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <select
              className="form-select form-select-lg h-100"
              name="Country"
              value={selectedCountry}
              onChange={handleCountryChange}
              disabled={loading}
              required
            >
              <option value="">Country *</option>
              {countriesData.map((c, idx) => (
                <option key={idx} value={c.country}>
                  {c.country}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6 mt-3">
            <select
              className="form-select form-select-lg h-100"
              name="City"
              disabled={loading || !selectedCountry}
              required
            >
              <option value="">City *</option>
              {cities.map((city, idx) => (
                <option key={idx} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6 mt-3">
            <select className="form-select form-select-lg" name="Class type" required>
              <option value="">Class type *</option>
              <option value="Physical">Physical</option>
              <option value="Online">Online</option>
            </select>
          </div>

          <div className="col-md-6 mt-3">
            <select
              name="Number of teachers to be tutored"
              className="form-select form-select-lg"
              required
            >
              <option value="">Number of teachers to be tutored *</option>
              <option value="0-2">0-2</option>
              <option value="2-5">2-5</option>
              <option value="5-10">5-10</option>
              <option value="10 above">10 above</option>
            </select>
          </div>
          <div className="col-md-6 mt-3">
            <select className="form-select form-select-lg" name="Tutor Gender Preference" required>
              <option value="">Tutor Gender Preference *</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="No preference">No preference</option>
            </select>
          </div>
          <div className="col-md-12 mt-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Address *"
                name="Address"
                required
              />
              <label>
                Address <span className="text-danger">*</span>
              </label>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <textarea
              className="form-control form-control-lg"
              placeholder="Do you have any important information you want to share? *"
              name="Important information"
              required
            ></textarea>
          </div>
          <div className="col-md-12 mt-3">
            <button className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center gap-2" type="submit">
              Submit request
              <FaArrowUpRightFromSquare />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
