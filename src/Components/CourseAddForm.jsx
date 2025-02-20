import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


const CourseAddForm = () => {
  const [CourseName, setCourseName] = useState("");
  const [CourseDescription, setCourseDescription] = useState("");
  const [Price, setCoursePrice] = useState("");
  const [imageUrl, setImageUrl] = useState(""); 
  const navigate=useNavigate();

  const handleAddCourse = async (event) => {
    event.preventDefault();


    try {
      const response = await Axios.post("https://learnsphere-backend-1-494r.onrender.com/courseRoute/create-course", {
        CourseName, CourseDescription, Price,imageUrl
      });

      if (response.status === 200) {
        alert("Course added successfully!");
        navigate("/adminDashboard");

      } else {
        Promise.reject();
      }
    } catch (error) {
      console.error("Error adding course: ", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleAddCourse} className="bg-light p-5 rounded shadow">
        <h2 className="text-center mb-4">Add New Course <FaBook /></h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Course Name"
            value={CourseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Course Description"
            value={CourseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Price"
            value={Price}
            onChange={(e) => setCoursePrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary w-100">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default CourseAddForm;