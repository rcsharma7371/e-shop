import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    gender: "",
  });
  let navigate = useNavigate();
  const handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8080/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        password: formData.password,
        gender: formData.gender,
      }),
    });
    const json = await response.json();
    if (json.status == true) {
      //redirect
      console.log(formData);
      navigate("/login");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        password: "",
        gender: "",
      });
      console.log(json);
      alert(json.success)
    } else {
      alert(json.error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userMobile" className="form-label">
            Mobile
          </label>
          <input
            type="number"
            className="form-control"
            id="userMobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="userPassword"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Gender
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Male"
              onChange={handleInputChange}
              required
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="Female"
              onChange={handleInputChange}
              required
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => console.log("form Submitted")}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Signup;
