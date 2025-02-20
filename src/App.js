import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewUserForm from './Components/Newuserform';
import Nav from './Components/Nav';
import UserForm from './Components/UserForm';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './Components/About';
import Services from './Components/Services';
import Dashboard from './Components/UserDashboard';
import Admin from './Components/Admin';
import AdminDashboard from './Components/AdminDashboard';
import CourseAddForm from './Components/CourseAddForm';
import CourseList from './Components/CourseList';
import EditCourse from './Components/EditCourse';
import ViewCourse from './Components/ViewCourse';
import MyCourses from './Components/MyCourse';
import PaymentPage from './Components/Payment';
import PaidCourse from './Components/PaidCourse';
import CourseContent from './Components/CourseContent';
import Test from './Components/Test';
import Video from './Components/Video';
import SupportForm from './Components/SupportForm';
import UserProblem from './Components/UserProblems';
import Answer from './Components/Answer';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/user-login" element={<UserForm />} />
          <Route path="/user-registration" element={<NewUserForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/add-course" element={<CourseAddForm/>}/>
          <Route path="/course-list" element={<CourseList />} />
          <Route path="/edit-course/:id" element={<EditCourse />} />
          <Route path="/view-courses" element={<ViewCourse />} />
          <Route path="/my-courses" element={<MyCourses/>} />
          <Route path="/payment" element={<PaymentPage/>} />
          <Route path="/paid-course" element={<PaidCourse/>}/>
          <Route path="/course-content" element={<CourseContent/>}/>
          <Route path="/Test" element={<Test/>}/>
          <Route path ="/Video" element={<Video/>}/>
          <Route path ="/support-form" element={<SupportForm/>}/>
          <Route path='/user-problems' element={<UserProblem/>}/>
          <Route path='Answer' element={<Answer/>}/>
          


        </Routes>
      </div>
    </Router>
  );
}
export default App;