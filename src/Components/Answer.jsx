import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Answer = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await Axios.get('https://learnsphere-backend-1-494r.onrender.com/supportRoute/get-answers');
        if (response.status === 200) {
          setAnswers(response.data);
        } else {
          console.error('Failed to fetch answers');
        }
      } catch (error) {
        console.error('Error fetching answers', error);
      }
    };

    fetchAnswers();
  }, []);

  const dynamicHeading = "Resolved Querys"; // Replace with your dynamic heading

  return (
    <div style={pageStyle}>
      <h2 style={headerStyle}>{dynamicHeading}</h2>
      <ul style={listStyle}>
        {answers.map((answer, index) => (
          <li key={index} style={listItemStyle}>
            {answer.Answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

const pageStyle = {
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
  backgroundColor: '#f5f5f5', // Light gray background color
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  color: '#333',
  backgroundColor: '#4CAF50', // Dark green background color
  padding: '10px',
  borderRadius: '8px',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const listItemStyle = {
  border: '1px solid #ddd',
  padding: '12px',
  marginBottom: '8px',
  borderRadius: '4px',
  backgroundColor: '#fff', // White background color
};

export default Answer;
