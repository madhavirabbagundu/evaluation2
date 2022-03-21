import React from "react";
 import './App.css';
import data from "./mock-data.json";
const App =()=> {
   const [contacts,setcontacts] = useState(data);
   const [addFormData,setADDFormData] = useState({
    name:'',
    department:'',
    salary:'',
    userId:''
   })
   const handleAddFormChange = (event) =>{
     event.preventDefault();
     const fieldName = event.target.getAtrribute('name');
     const fieldValue = event.target.value;
     const newForceDate = { ... addFormData};
     newFormData[fileName] = fieldvalue;
     setAddFormData(newFormData);
   };

  

  return (
    <div className="App">
      <input type = "text"
       name="Name"
        placeholder="enter name"
        onChange = {handleAddForChange}
        />
      <input type = "text"
       name="salary"
        placeholder="salary"
        onChange = {handleAddForChange}

        />

      <input type = "text"
       name="department" 
       placeholder="departmnent"
       onChange = {handleAddForChange}

       />
      <input type = "text" name="userid" placeholder="userid"></input>
      <button>ADD</button>
   <table>
     <thead>
     <tr>
       <th>Nmae</th>
       <th>salary</th>
       <th>gender</th>
       <th>department</th>
       <th>userId</th>
     </tr>
     </thead>
     
     
     
     <tbody>
     <tr>
       <th>raghu</th>
       <th>30000</th>
       <th>male</th>
       <th>science</th>
       <th>109</th>
     </tr>
       {contacts.map((contact) => (
         <tr>
           <td>{contact.name}</td>
           <td>{contact.salary}</td>
           <td>{contact.gender}</td>
           <td>{contact.department}</td>
           <td>{contact.userId}</td>
         </tr>
       ))};
     </tbody>
   </table>
   

    </div>
  );
}
export default App;
