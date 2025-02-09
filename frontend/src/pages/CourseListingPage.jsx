import React from 'react';
import CourseList from '../components/CourseList';

const CourseListingPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Available Courses</h1>
      <CourseList />
    </div>
  );
};

export default CourseListingPage;
