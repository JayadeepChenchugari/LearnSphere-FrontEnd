import React, { useState } from "react";
import { FaUser, FaEnvelope, FaHeading, FaComment } from 'react-icons/fa';
import Sidebar from './Sidebar.js';
import { SidebarData } from './SidebarData.js';
import Axios from "axios";
import AlertBox from './AlertBox'; // Adjust the path based on your project structure
import { useNavigate } from "react-router-dom";

const SupportForm = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const [alert, setAlert] = useState({ message: '', type: '' });
  const navigate = useNavigate();

  const handleAddRequest = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post("https://learnsphere-backend-1-494r.onrender.com/supportRoute/create-query", {
        Name, Email, Subject, Message
      });
  
      if (response.status === 200) {
        setAlert({ message: 'Request sent successfully', type: 'success' });
  
        // Delay navigation to allow the alert to be visible
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000); // 2 seconds delay
      } else {
        setAlert({ message: 'Error in sending request', type: 'error' });
        Promise.reject();
      }
    } catch (error) {
      setAlert({ message: 'Error in sending request', type: 'error' });
      console.log("Error in sending request", error);
    }
  };
  

  const pageStyle = {
    backgroundColor: "", // Replace with your desired background color
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const formStyle = {
    maxWidth: "500px",
    margin: "auto",
    padding: "40px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginTop: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputContainerStyle = {
    position: "relative",
    marginBottom: "15px",
  };

  const iconStyle = {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    paddingLeft: "30px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  };

  const buttonStyle = {
    backgroundColor: "",
    color: "#ffffff",
    padding: "10px 16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div>
      {/* Include the Sidebar component and pass SidebarData as a prop */}
      <Sidebar sidebarData={SidebarData} />
      <div style={pageStyle}>
        <div style={formStyle}>
          {alert.message && <AlertBox message={alert.message} type={alert.type} />}
          <h2 style={{ textAlign: 'center' }}>Contact Support</h2>
          <form onSubmit={handleAddRequest}>
            <div style={inputContainerStyle}>
              <FaUser style={iconStyle} />
              <input
                type="text"
                id="name"
                name="name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
                placeholder="Name"
              />
            </div>
            <div style={inputContainerStyle}>
              <FaEnvelope style={iconStyle} />
              <input
                type="email"
                id="email"
                name="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
                placeholder="Email"
              />
            </div>
            <div style={inputContainerStyle}>
              <FaHeading style={iconStyle} />
              <select
                id="subject"
                name="subject"
                value={Subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                style={inputStyle}
              >
                <option value="" disabled>Select Subject</option>
                <option value="paymentRelatedIssues">Payment Related Issues</option>
                <option value="courseAcessing">Course Accessing</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div style={inputContainerStyle}>
              <FaComment style={iconStyle} />
              <textarea
                id="message"
                name="message"
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={inputStyle}
                placeholder="Message"
              />
            </div>
            <button type="submit" style={buttonStyle}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportForm;
