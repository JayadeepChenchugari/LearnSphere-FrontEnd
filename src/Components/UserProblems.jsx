import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Modal from 'react-modal';

const UserProblem = () => {
  const [userRequests, setUserRequests] = useState([]);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [answerModalIsOpen, setAnswerModalIsOpen] = useState(false);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    // Fetch user requests from the server
    const fetchUserRequests = async () => {
      try {
        const response = await Axios.get("https://learnsphere-backend-1-494r.onrender.com/supportRoute/get-requests");
        if (response.status === 200) {
          // Add "isAnswered" property to each request
          const requestsWithAnswer = response.data.map(request => ({ ...request, isAnswered: false }));
          setUserRequests(requestsWithAnswer);
        } else {
          console.error('Failed to fetch user requests');
        }
      } catch (error) {
        console.error('Error fetching user requests', error);
      }
    };

    fetchUserRequests();
  }, []);

  const handleDeleteRequest = async (requestId) => {
    // Implement the logic to delete the user request
    try {
      const response = await Axios.delete(`https://learnsphere-backend-1-494r.onrender.com/supportRoute/delete-request/${requestId}`);
      if (response.status === 200) {
        const updatedRequests = userRequests.filter(request => request._id !== requestId);
        setUserRequests(updatedRequests);
        console.log('Request deleted successfully');
      } else {
        console.error('Failed to delete user request');
      }
    } catch (error) {
      console.error('Error deleting user request', error);
    }
  };

  const handleAnswerButtonClick = (requestId) => {
    setSelectedRequestId(requestId);
    setAnswerModalIsOpen(true);
  };

  const handleAnswerModalClose = () => {
    setSelectedRequestId(null);
    setAnswerModalIsOpen(false);
    setAnswer('');
  };

  const handleAnswerSubmit = async () => {
    // Implement the logic to submit the answer
    try {
      const response = await Axios.post(`https://learnsphere-backend-1-494r.onrender.com/supportRoute/answer-request/${selectedRequestId}`, {
        answer,
      });
      if (response.status === 200) {
        const updatedRequests = userRequests.map(request =>
          request._id === selectedRequestId ? { ...request, isAnswered: true, Answer: answer } : request
        );
        setUserRequests(updatedRequests);
        console.log('Answer submitted successfully');
        handleAnswerModalClose();
      } else {
        console.error('Failed to submit answer');
      }
    } catch (error) {
      console.error('Error submitting answer', error);
    }
  };

  return (
    <div style={pageStyle}>
      <h2 style={headerStyle}>User Requests</h2>
      <table style={tableStyle}>
        <thead>
          <tr style={tableHeaderRowStyle}>
            <th style={tableHeaderCellStyle}>Name</th>
            <th style={tableHeaderCellStyle}>Email</th>
            <th style={tableHeaderCellStyle}>Subject</th>
            <th style={tableHeaderCellStyle}>Message</th>
            <th style={tableHeaderCellStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userRequests.map((request, index) => (
            <tr key={index} style={request.isAnswered ? answeredTableRowStyle : tableRowStyle}>
              <td style={tableCellStyle}>{request.Name}</td>
              <td style={tableCellStyle}>{request.Email}</td>
              <td style={tableCellStyle}>{request.Subject}</td>
              <td style={tableCellStyle}>{request.Message}</td>
              <td style={tableCellStyle}>
                <button onClick={() => handleAnswerButtonClick(request._id)} style={answerButtonStyle}>
                  Answer
                </button>
                <button onClick={() => handleDeleteRequest(request._id)} style={deleteButtonStyle}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={answerModalIsOpen}
        onRequestClose={handleAnswerModalClose}
        style={modalStyle}
        contentLabel="Answer Modal"
      >
        <h2 style={modalHeaderStyle}>Answer Request</h2>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
          style={modalTextareaStyle}
        />
        <button onClick={handleAnswerSubmit} style={modalButtonStyle}>
          Submit Answer
        </button>
      </Modal>
    </div>
  );
};

const pageStyle = {
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  color: '#333',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const tableHeaderRowStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
};

const tableHeaderCellStyle = {
  border: '1px solid #ddd',
  padding: '12px',
  textAlign: 'left',
};

const tableRowStyle = {
  ':nth-child(even)': {
    backgroundColor: '#f2f2f2',
  },
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '12px',
  textAlign: 'left',
};

const answeredTableRowStyle = {
  backgroundColor: '#C8E6C9', // Set the background color for answered rows
  // other styles as needed
};

const answerButtonStyle = {
  backgroundColor: '#2196F3',
  color: 'white',
  border: 'none',
  padding: '8px 12px',
  marginRight: '8px',
  borderRadius: '4px',
  cursor: 'pointer',
};

const deleteButtonStyle = {
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '4px',
  cursor: 'pointer',
};

const modalStyle = {
  content: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
  },
};

const modalHeaderStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  color: '#333',
};

const modalTextareaStyle = {
  width: '100%',
  height: '100px',
  marginBottom: '20px',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ddd',
};

const modalButtonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  padding: '10px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default UserProblem;
