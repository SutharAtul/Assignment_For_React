import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { setCourses } from '../redux/courseSlice';
import sampleCourses from '../data/sampleCourses';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(setCourses(sampleCourses));
    }
  }, [dispatch, courses]);

  useEffect(() => {
    if (courses.length > 0) {
      const selectedCourse = courses.find(c => c.id === parseInt(id));
      setCourse(selectedCourse);
    }
  }, [courses, id]);

  if (!course) return <p>Loading or Course not found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{course.name}</h1>
      <p className="text-gray-700 mb-4">Instructor: {course.instructor}</p>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <p>Status: <strong>{course.enrollmentStatus}</strong></p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <Link to="/" className="mt-4 inline-block text-blue-500 underline">Back to Course List</Link>
    </div>
  );
};

export default CourseDetailsPage;
