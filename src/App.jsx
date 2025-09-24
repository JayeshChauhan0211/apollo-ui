import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import FiltersPanel from "./components/FiltersPanel";

export default function App() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Find people</h2>
            <FiltersPanel />
            {/* placeholder for results */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({length:6}).map((_,i)=>(
                <div key={i} className="bg-[#0e1116] p-4 rounded-2xl shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted">Name {i+1}</div>
                      <div className="font-medium">Job Title</div>
                    </div>
                    <div className="text-sm text-muted">Location</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}




















































































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
