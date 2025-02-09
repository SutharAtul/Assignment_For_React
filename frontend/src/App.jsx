import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseListingPage from './pages/CourseListingPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Navbar from './components/Navbar';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
        </Routes>
        <Navbar />
        <Routes>
          <Route path="/courses" element={<CourseListingPage />} />
          <Route path="/course/:id" element={<CourseDetailsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
