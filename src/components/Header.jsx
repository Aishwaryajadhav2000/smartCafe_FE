import React, { useEffect, useState } from 'react'
import Login from './Login';
import { useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate = useNavigate();
  // loginStatus should be false by default
  const [loginStatus, setLoginStatus] = useState(true);
  const [loginPage , setLoginPage] = useState(false);

  useEffect(()=>{
    const getLoginStatus = localStorage.getItem("loginstatus");
    if(getLoginStatus){
      setLoginStatus(true)
    }
  },[])

  const logout = ()=>{
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }


  return (
    <>
      <header className="w-full bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-xl font-bold text-indigo-600 cursor-pointer" onClick={() => navigate("/")}>
            Gold Rush Café ☕
          </h1>

          {
            !loginStatus ? (
              <button className="login" onClick={() => setLoginPage(true)}>
                Login
              </button>
            ) : (
              <nav className="flex flex-wrap gap-3">
                <button className="headerBtn" onClick={() => navigate("/")}>
                  Home
                </button>
                <button className="headerBtn" onClick={() => navigate("/allorders")}>
                  Orders
                </button>
                <button className="headerBtn" onClick={() => navigate("/neworder")}>
                  New Order
                </button>
                <button className="headerBtn" onClick={() => navigate("/food")}>
                  Food
                </button>
                <button
                  className="headerBtn bg-red-500 hover:bg-red-600"
                  onClick={logout}
                >
                  Logout
                </button>
              </nav>
            )
          }
        </div>
      </header>

      {loginPage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-96 relative">
            <Login pageDisplay={setLoginPage} />
          </div>
        </div>
      )}


    </>
  )
}
