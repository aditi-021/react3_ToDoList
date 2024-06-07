// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// function App(){
//   return (
//     <div className = "App">
//         <h1>React TO DO LIST</h1>

//         <div className='row justify-content-center'>

//           <input type='text' placeholder='taskname' className='form-control col-md-6'/>

//           <button className='btn btn-success col-md-1'>ADD TASKS</button>

//         </div>


//     </div>
//   );
   
// }

// export default App;


// CODE 2 :
// import React, {useState} from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; 

// function App() {

//   const[newtask, setnewtask] = useState('')
//   const[tasks, settasks]=useState([]);

//   function addtask(){

//     // alert(newtask);

//     settasks([...tasks, newtask])
//     setnewtask('');
//   }

//   function deletetask(index){

//     var duplicatearray=[...tasks]

//     duplicatearray.splice(index, 1)

//     settasks(duplicatearray)

//   }

//   const taskslist = tasks.map((object, index)=>{

//     return <div className='row justify-content-center m-1' key={index}>
//       <div className='input-group'>
//       <h1 className='col-md-6'>{index+1} {object}</h1>
//       <button onClick={()=>deletetask(index)} className='col-md-1 btn btn-danger m-1'>DELETE</button>
//     </div>
//     </div>
//   })
//   return (
//     <div className="App">
//       <h1>React To Do List</h1>

//       {/* Use a container to center the content */}
//       <div className='container'>
//         <div className='row justify-content-center'>

//           {/* Wrap the input field in a div with col-md-6 */}
//           <div className='col-md-6'>
//             <div className='input-group'>
//               <input type='text' placeholder='taskname' className='form-control m-1'
//               value = {newtask} onChange={(e)=>{setnewtask(e.target.value)}}
//               />
//               <button onClick={addtask} className='btn btn-success m-1'>ADD TASKS</button>



//             </div>


            

//         </div>

//       </div>
//       {taskslist}


//     </div>

//   </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [newtask, setnewtask] = useState('');
//   const [tasks, settasks] = useState([]);

//   function addtask() {
//     settasks([...tasks, newtask]);
//     setnewtask(''); // Clear the input field after adding a task
//   }

//   function deletetask(index) {
//     var duplicatearray = [...tasks];
//     duplicatearray.splice(index, 1);
//     settasks(duplicatearray);
//   }

//   // const taskslist = tasks.map((object, index) => {
//   //   return (
//   //     <div className='row justify-content-center' key={index}>
//   //       <div className='col-md-6'>
//   //         <div className='input-group'>
//   //           <h1 className='form-control text-left m-1'>{index + 1}. {object}</h1>
//   //           <button onClick={() => deletetask(index)} className='btn btn-danger m-1'>DELETE</button>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );
//   // });

//   const taskslist = tasks.map((object, index) => {
//     return (
//       <div className='row justify-content-center' key={index}>
//         <div className='input-group'> 
//         <div className='col-md-6 text-left'>
//           <h1 className='m-1'>{index + 1}. {object}</h1>
//         </div>
//         <div className='col-md-1'>
//           <button onClick={() => deletetask(index)} className='btn btn-danger m-1'>DELETE</button>
//         </div>
//         </div>
//       </div>
//     );
//   });
  

//   return (
//     <div className="App">
//       <h1>React To Do List</h1>

//       {/* Use a container to center the content */}
//       <div className='container'>
//         <div className='row justify-content-center'>
//           {/* Wrap the input field and button in a div with col-md-6 */}
//           <div className='col-md-6'>
//             <div className='input-group'>
//               <input
//                 type='text'
//                 placeholder='taskname'
//                 className='form-control m-1'
//                 value={newtask}
//                 onChange={(e) => setnewtask(e.target.value)}
//               />
//               <button onClick={addtask} className='btn btn-success m-1'>
//                 ADD TASKS
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Render the tasks list within the same container */}
//         {taskslist}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [newtask, setnewtask] = useState('');
  const [tasks, settasks] = useState([]);

  function addtask() {
    settasks([...tasks, newtask]);
    setnewtask(''); // Clear the input field after adding a task
  }

  function deletetask(index) {
    var duplicatearray = [...tasks];
    duplicatearray.splice(index, 1);
    settasks(duplicatearray);
  }

  const taskslist = tasks.map((object, index) => {
    return (
      <div className='row justify-content-center mt-2' key={index}>
        <div className='col-md-7'>
          <div className='input-group'>
            <div className='form-control text-left m-1'>{index + 1}. {object}</div>
            <button onClick={() => deletetask(index)} className='btn btn-danger m-1'>DELETE</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>React To Do List</h1>

      {/* Use a container to center the content */}
      <div className='container'>
        <div className='row justify-content-center'>
          {/* Wrap the input field and button in a div with col-md-7 */}
          <div className='col-md-7'>
            <div className='input-group'>
              <input
                type='text'
                placeholder='taskname'
                className='form-control m-1'
                value={newtask}
                onChange={(e) => setnewtask(e.target.value)}
              />
              <button onClick={addtask} className='btn btn-success m-1'>
                ADD TASKS
              </button>
            </div>
          </div>
        </div>

        {/* Render the tasks list within the same container */}
        {taskslist}
      </div>
    </div>
  );
}

export default App;



