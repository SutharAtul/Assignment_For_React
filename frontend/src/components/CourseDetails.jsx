import React from 'react';

const CourseDetails = ({ course }) => {
  if (!course) return <p>Course details are not available.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{course.name}</h1>
      <p className="text-gray-700 mb-4">Instructor: {course.instructor}</p>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <p>Status: <strong>{course.enrollmentStatus}</strong></p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <h2 className="text-xl mt-4">Prerequisites:</h2>
      <ul className="list-disc pl-5">
        {(course?.prerequisites || []).length > 0 ? (
          course.prerequisites.map((prereq, index) => (
            <li key={index}>{prereq}</li>
          ))
        ) : (
          <li>No prerequisites available.</li>
        )}
      </ul>
      <h2 className="text-xl mt-4">Syllabus:</h2>
      <ul className="list-decimal pl-5">
        {(course?.syllabus || []).length > 0 ? (
          course.syllabus.map((week, index) => (
            <li key={index} className="mb-2">
              <strong>Week {week.week}: </strong>
              {week.topic} - {week.content}
            </li>
          ))
        ) : (
          <li>No syllabus available.</li>
        )}
      </ul>
    </div>
  );
};

export default CourseDetails;
