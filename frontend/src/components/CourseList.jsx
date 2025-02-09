import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCourses } from '../redux/courseSlice';
import CourseCard from './CourseCard';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      const sampleCourses = [
        { id: 1, name: 'React Basics', instructor: 'John Doe', thumbnail: 'https://media.geeksforgeeks.org/wp-content/uploads/20241213125258294267/Best-React-JS-Courses-Online-with-Certificates-2.webp' },
        { id: 2, name: 'Advanced JavaScript', instructor: 'Jane Smith', thumbnail: 'https://media.geeksforgeeks.org/wp-content/uploads/20240726120852/Master-JavaScript---From-Beginner-to-Advanced-cta---Explore-now.webp' },
        { id: 3, name: 'Node.js Essentials', instructor: 'Mark Lee', thumbnail: 'https://media.geeksforgeeks.org/wp-content/uploads/20241016105256460477/NodeJS-Tutorial.webp' },
      ];
      dispatch(setCourses(sampleCourses));
    };

    fetchCourses();
  }, [dispatch]);

  // Filter courses based on search term
  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
