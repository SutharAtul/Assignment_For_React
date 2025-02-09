import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleEnroll = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to enroll in a course.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ courseId: course.id }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Enrolled successfully!');
      } else {
        alert(data.message || 'Failed to enroll');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md cursor-pointer">
      <img src={course.thumbnail} alt="Course thumbnail" className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{course.name}</h3>
        <p className="text-gray-600">{course.instructor}</p>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigating to the course details page
            handleEnroll();
          }}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Enroll
        </button>
      </div>
    </div>
  );
};

export default CourseCard;