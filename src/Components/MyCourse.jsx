import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrashAlt, FaArrowLeft } from "react-icons/fa";
import {
  faCreditCard as creditCardIcon,
  faMobileAlt as upiIcon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar"; // Replace with the actual path to your Sidebar component.
import { SidebarData } from "./SidebarData";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [upiId, setUpiId] = useState("");
  const [debitCardNumber, setDebitCardNumber] = useState("");
  const [debitCardName, setDebitCardName] = useState("");
  const [debitExpiry, setDebitExpiry] = useState("");
  const [debitCvv, setDebitCvv] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardName, setCreditCardName] = useState("");
  const [creditExpiry, setCreditExpiry] = useState("");
  const [creditCvv, setCreditCvv] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    // Fetch courses from the API endpoint and update the courses state
    axios
      .get("https://learnsphere-backend-1-494r.onrender.com/cartRoute")
      .then((res) => {
        if (res.status === 200) {
          setCourses(res.data);
        } else {
          console.error("Failed to fetch courses.");
        }
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
      });
  }, []);

  const handleDeleteCourse = (courseId) => {
    axios
      .delete(`https://learnsphere-backend-1-494r.onrender.com/cartRoute/delete-course/${courseId}`)
      .then((res) => {
        if (res.status === 200) {
          setCourses(courses.filter((course) => course._id !== courseId));
        } else {
          console.error("Failed to delete course.");
        }
      })
      .catch((err) => {
        console.error("Error deleting course:", err);
      });
  };

  const handlePayment = (paymentOption, course) => {
    setSelectedPaymentOption(paymentOption);
    setSelectedCourse(course);
    setIsModalVisible(true);
  };

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();
   
    try {
      const response = await axios.post(
        "https://learnsphere-backend-1-494r.onrender.com/paidRoute/add-paid-course",
        {
          CourseName: selectedCourse.CourseName,
          CourseDescription: selectedCourse.CourseDescription,
          Price: selectedCourse.Price,
          imageUrl:selectedCourse.imageUrl,
        }
      );

      if (response.status === 200) {
        alert("Payment successful");
        navigate("/paid-course");

      } else {
        console.log("Payment failed");
      }
    } catch (error) {
      console.error("Error occurred while processing payment:", error);
    }
  };

  const validateUPI = () => {
    // Basic validation for UPI ID (you can add more specific validation rules)
    return upiId.length > 0;
  };

  const validateCardDetails = () => {
    // Basic validation for card details (you can add more specific validation rules)
    return (
      debitCardNumber.length >= 6 &&
      debitCardName.length > 0 &&
      debitExpiry.length >= 5 &&
      debitCvv.length === 3
    );
  };

  const validateCreditCardDetails = () => {
    // Basic validation for credit card details (you can add more specific validation rules)
    return (
      creditCardNumber.length >= 6 &&
      creditCardName.length > 0 &&
      creditExpiry.length >=5 &&
      creditCvv.length === 3
    );
  };

  return (
    <div>
      <Sidebar sidebarData={SidebarData} />
      <div>
        <h1 className="mb-4">My Courses</h1>
        {courses.length === 0 ? (
          <p>No courses registered.</p>
        ) : (
          <div className="row">
            {courses.map((course) => (
              <div key={course._id} className="col-lg-4 mb-4">
                <div className="card" style={{ backgroundColor: "#f5f5f5" }}>
                  <div className="card-body">
                    <h2 className="card-title">{course.CourseName}</h2>
                    <img
                      src={course.imageUrl}
                      alt="Course"
                      className="card-img-top"
                      height={200}
                    />
                    <p className="card-text">{course.CourseDescription}</p>
                    <p className="card-text">₹{course.Price}</p>
                    <div className="d-flex flex-column">
                      <button
                        className="btn btn-danger mb-2"
                        onClick={() => handleDeleteCourse(course._id)}
                      >
                        <FaTrashAlt /> <span>Delete</span>
                      </button>
                      <div className="btn-group">
                        <button
                          className="btn btn-primary mb-2"
                          onClick={() => handlePayment("upi", course)}
                          disabled={selectedPaymentOption === "upi"}
                        >
                          <FontAwesomeIcon icon={upiIcon} /> UPI
                        </button>
                        <button
                          className="btn btn-primary mb-2"
                          onClick={() => handlePayment("debit_card", course)}
                          disabled={selectedPaymentOption === "debit_card"}
                        >
                          <FontAwesomeIcon icon={creditCardIcon} /> Debit Card
                        </button>
                        <button
                          className="btn btn-primary mb-2"
                          onClick={() => handlePayment("credit_card", course)}
                          disabled={selectedPaymentOption === "credit_card"}
                        >
                          <FontAwesomeIcon icon={creditCardIcon} /> Credit Card
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {isModalVisible && (
          <div
            className="modal"
            tabIndex="-1"
            role="dialog"
            style={{ display: "block" }}
          >
            <div className="modal-dialog" role="document">
              <div
                className="modal-content p-4"
                style={{ backgroundColor: "black", color: "white" }}
              >
                <button
                  className="btn btn-secondary mb-4"
                  onClick={() => setIsModalVisible(false)}
                >
                  <FaArrowLeft /> Back
                </button>
                {selectedPaymentOption === "upi" && selectedCourse && (
                  <div>
                    <h2>
                      <FontAwesomeIcon icon={upiIcon} /> UPI Payment
                    </h2>
                    <p>Course Name: {selectedCourse.CourseName}</p>
                    <p>Course Description: {selectedCourse.CourseDescription}</p>
                    <p>Price: ₹{selectedCourse.Price}</p>
                    <input
                      type="text"
                      placeholder="Enter UPI ID"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="form-control mb-2"
                    />
                    <button
                      className="btn btn-primary me-2"
                      onClick={handlePaymentSubmit}
                      disabled={!validateUPI()}
                    >
                      Pay
                    </button>
                  </div>
                )}
                {selectedPaymentOption === "debit_card" && selectedCourse && (
                  <div>
                    <h2>
                      <FontAwesomeIcon icon={creditCardIcon} /> Debit Card Payment
                    </h2>
                    <p>Course Name: {selectedCourse.CourseName}</p>
                    <p>Course Description: {selectedCourse.CourseDescription}</p>
                    <p>Price: ₹{selectedCourse.Price}</p>
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={debitCardNumber}
                      onChange={(e) => setDebitCardNumber(e.target.value)}
                      className="form-control mb-2"
                    />
                    <input
                      type="text"
                      placeholder="Card Holder Name"
                      value={debitCardName}
                      onChange={(e) => setDebitCardName(e.target.value)}
                      className="form-control mb-2"
                    />
                    <div className="row mb-2">
                      <div className="col">
                        <input
                          type="text"
                          placeholder="Expiry (MM/YYYY)"
                          value={debitExpiry}
                          onChange={(e) => setDebitExpiry(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          placeholder="CVV"
                          value={debitCvv}
                          onChange={(e) => setDebitCvv(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={handlePaymentSubmit}
                      disabled={!validateCardDetails()}
                    >
                      Pay
                    </button>
                  </div>
                )}
                {selectedPaymentOption === "credit_card" && selectedCourse && (
                  <div>
                    <h2>
                      <FontAwesomeIcon icon={creditCardIcon} /> Credit Card Payment
                    </h2>
                    <p>Course Name: {selectedCourse.CourseName}</p>
                    <p>Course Description: {selectedCourse.CourseDescription}</p>
                    <p>Price: ₹{selectedCourse.Price}</p>
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={creditCardNumber}
                      onChange={(e) => setCreditCardNumber(e.target.value)}
                      className="form-control mb-2"
                    />
                    <input
                      type="text"
                      placeholder="Card Holder Name"
                      value={creditCardName}
                      onChange={(e) => setCreditCardName(e.target.value)}
                      className="form-control mb-2"
                    />
                    <div className="row mb-2">
                      <div className="col">
                        <input
                          type="text"
                          placeholder="Expiry (MM/YYYY)"
                          value={creditExpiry}
                          onChange={(e) => setCreditExpiry(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          placeholder="CVV"
                          value={creditCvv}
                          onChange={(e) => setCreditCvv(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={handlePaymentSubmit}
                      disabled={!validateCreditCardDetails()}
                    >
                      Pay
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;


