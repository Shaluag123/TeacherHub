import React from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';
import { AuthProvider,useAuth } from './context/AuthContext';

const ProtectedRoute = ({children})=>{
  const {auth} = useAuth();
  return auth.user? children:<Navigate to='/login'/>;
}

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Homepage/>

                
              </ProtectedRoute>
            }/>
        </Routes>

        
      </Router>
    </AuthProvider>
  )
}

export default App