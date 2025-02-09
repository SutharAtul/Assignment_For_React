import React from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from './ProgressBar';

const StudentDashboard = () => {
  const enrolledCourses = useSelector(state => state.students.enrolledCourses);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
      {enrolledCourses.length === 0 ? (
        <p>You have not enrolled in any courses yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {enrolledCourses.map(course => (
            <div key={course.id} className="border p-4 rounded shadow">
              <h2 className="font-bold text-lg">{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <p>Status: {course.completed ? 'Completed' : 'In Progress'}</p>
              <ProgressBar progress={course.completed ? 100 : 50} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
