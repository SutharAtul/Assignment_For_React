import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseCompleted } from '../redux/studentSlice';

const DashboardPage = () => {
  const enrolledCourses = useSelector(state => state.students.enrolledCourses);
  const dispatch = useDispatch();

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
              <button
                onClick={() => dispatch(markCourseCompleted(course.id))}
                className={`mt-2 px-4 py-2 text-white rounded ${course.completed ? 'bg-green-500' : 'bg-blue-500'}`}
                disabled={course.completed}
              >
                {course.completed ? 'Completed' : 'Mark as Completed'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
