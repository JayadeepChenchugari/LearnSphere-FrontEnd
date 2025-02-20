import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Editform.css";


const EditCourseForm = ({ courseId, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    CourseName: "",
    CourseDescription: "",
    Price: 0,
  });

  useEffect(() => {
    
    axios.get(`https://learnsphere-backend-1-494r.onrender.com/courseRoute/update-course/${courseId}`)
      .then((res) => {
        if (res.status === 200) {
          
          setFormData(res.data); 
        } else {
          console.error("Failed to fetch course details.");
        }
      })
      .catch((err) => {
        console.error("Error fetching course details:", err);
      });
  }, [courseId]);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
   
    axios.put(`https://learnsphere-backend-1-494r.onrender.com/courseRoute/update-course/${courseId}`, formData)
      .then((res) => {
        if (res.status === 200) {
            alert("course updated succesfully")
          onUpdate(); 
          onClose(); 
        } else {
          console.error("Failed to update course details.");
        }
      })
      .catch((err) => {
        console.error("Error updating course details:", err);
      });
  };

  return (
    <div className="edit-form-modal">
      <div className="edit-form-content">
        <h2>Edit Course</h2>
        <form>
          <label>Course Name:</label>
          <input
            type="text"
            name="CourseName"
            value={formData.CourseName}
            onChange={handleInputChange}
          />
          <label>Course Description:</label>
          <input
            type="text"
            name="CourseDescription"
            value={formData.CourseDescription}
            onChange={handleInputChange}
          />
          <label>Price:</label>
          <input
            type="number"
            name="Price"
            value={formData.Price}
            onChange={handleInputChange}
          />
          <div className="button-container">
            <button type="button1" onClick={handleSubmit}>Update</button>
            <button type="button1" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourseForm;
