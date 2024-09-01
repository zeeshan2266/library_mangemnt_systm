import { Route, 
        Routes,
        Navigate,
       BrowserRouter} from 'react-router-dom';
// import {supabase} from "./supabaseCliennt"
import  Dashboard  from './components/custom/dashboard/Dashboard';
import  AddStudent  from './components/custom/add-student/AddStudent';
import  AddBook  from './components/custom/add-book/AddBook';
// import  EditBook  from './components/custom/edit-book/EditBook';
import  Chart  from './components/custom/chart/Chart';
import  StudentList  from './components/custom/student-list/StudentList';
import  IssueBook  from './components/custom/issue-book/IssueBook';
import ReturnBook  from './components/custom/return-book/ReturnBook';
import  ProtectedRoute from './components/custom/protected-route/ProtectedRoute';
import Analytics from './components/custom/analytics/Analytics';
import Header from './components/custom/header/Header';
import React from 'react';
import { QueryClient, QueryClientContext,QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header/>
      <BrowserRouter>
   <Routes>
   <Route path="/" element={<Navigate to="/dashboard" />} />
   <Route element = {<ProtectedRoute />}>
  <Route path="/dashboard" element={<Dashboard />}/>
  <Route path="/addBook" element={<AddBook />}/>
  <Route path="/addStudent" element={<AddStudent />}/>
  <Route path="/analytics" element={<Analytics />}/>
  <Route path="/chart" element={<Chart />}/>
  <Route path="/studentList" element={<StudentList />}/>
  <Route path="/issueBook" element={<IssueBook />}/>
  <Route path="/returnBook" element={<ReturnBook />}/>
  <Route path="*" element={<Navigate to ="/" />}/>
  </Route>
   </Routes>
   </BrowserRouter>
   </QueryClientProvider>
  );
}
export default App;

