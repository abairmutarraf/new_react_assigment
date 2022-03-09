import React, { useState } from 'react'
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const data = [
  {
    uid: uuidv4(),
    first_name: 'Ramesh',
    last_name: 'Fadatare',
    email_id: 'Ramesh@yahoo.com'
  },
  {
    uid: uuidv4(),
    first_name: 'John',
    last_name: 'Cena',
    email_id: 'John@yahoo.com'
  },
  {
    uid: uuidv4(),
    first_name: 'Tom',
    last_name: 'Cruise',
    email_id: 'Tom@gmail.com'
  },
  {
    uid: uuidv4(),
    first_name: 'Admin',
    last_name: 'admin',
    email_id: 'Admin@gmail.com'
  },
]

function App() {

  const [employees, setEmployees] = useState(data);
  const [addEmployees, setAddEmployees] = useState(false);
  const [viewEmployees, setViewEmployees] = useState(false);
  const [updateEmployees, setUpdateEmployees] = useState(false);


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [empEmail, setempEmail] = useState('');
  const [upUid, setUpUid] = useState('');

  const onAddHandler = () => {

    if (!firstName || !lastName || !empEmail) {
      alert('All input are requried');
      return;
    }

    let newEmployee = {
      uid: uuidv4(),
      first_name: firstName,
      last_name: lastName,
      email_id: empEmail
    }

    setEmployees([...employees, newEmployee]);

    setFirstName('');
    setLastName('');
    setempEmail('');
    setAddEmployees(false);
  }

  const onDeleteHandler = (d_uid) => {

    let newEmployeeDelete = employees.filter((employees) => employees.uid !== d_uid);
    setEmployees(newEmployeeDelete);
    setFirstName('');
    setLastName('');
    setempEmail('');
    setAddEmployees(false);
    setViewEmployees(false);
    setUpdateEmployees(false);
  }

  const onViewHandler = (item, index) => {
    setAddEmployees(false);
    setViewEmployees(true);
    setUpdateEmployees(false);

    setFirstName(item.first_name);
    setLastName(item.last_name);
    setempEmail(item.email_id);




  }

  const onUpdateHandler = (item, index) => {


    setUpdateEmployees(true);
    setAddEmployees(false);
    setViewEmployees(false);

    setUpUid(item.uid);
    setFirstName(item.first_name);
    setLastName(item.last_name);
    setempEmail(item.email_id);



  }

  const onDataUpdateHandler = () => {

    let newEmployee = {
      uid: upUid,
      first_name: firstName,
      last_name: lastName,
      email_id: empEmail,
    }

    let updateNewEmployee = employees.map( (item, index) => {
     
        if(item.uid === upUid){
          return newEmployee;
        }
        else
        {
          return item;
        };
    });

    setEmployees(updateNewEmployee);

    setFirstName('');
    setLastName('');
    setempEmail('');

    setUpdateEmployees(false);
  }





  return (
    <div className='container-fluid mt-2'>
      <h1 style={{ textAlign: "center" }}>Employee List</h1>
      <div className="container">
        {addEmployees ? <button type="button" onClick={(e) => { setAddEmployees(false) }} className="btn btn-dark">Hide Employee</button> : <button type="button" onClick={(e) => {
          setAddEmployees(true); setViewEmployees(false); setUpdateEmployees(false); setFirstName('');
          setLastName('');
          setempEmail('');
        }} className="btn btn-primary">Add Employee</button>}
      </div>

      {addEmployees ? <div className="container border mt-5 pb-2" style={{ width: '100%' }}>
        <div className="row mt-2">
          <div className="col-12">
            <h3 style={{ textAlign: "center" }}>Add Employee</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type='text' placeholder='Employee First Name' name='FIRST_NAME' />
            &nbsp;
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} type='text' placeholder='Employee Last Name' name='LAST_NAME' />
            &nbsp;
            <input onChange={(e) => setempEmail(e.target.value)} value={empEmail} type='email' placeholder='Email' name='EMP_EMAIL' />
            &nbsp;
            <button type="button" onClick={onAddHandler} class="btn btn-success">Add</button>
          </div>
        </div>
      </div> : ""}


      {viewEmployees ? <div className="container border mt-5 pb-2" style={{ width: '100%' }}>
        <div className="row mt-2">
          <div className="col-12">
            <h3 style={{ textAlign: "center" }}>View Employee</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type='text' placeholder='Employee First Name' name='FIRST_NAME' />
            &nbsp;
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} type='text' placeholder='Employee Last Name' name='LAST_NAME' />
            &nbsp;
            <input onChange={(e) => setempEmail(e.target.value)} value={empEmail} type='email' placeholder='Email' name='EMP_EMAIL' />
          </div>
        </div>
      </div> : ""}


      {updateEmployees ? <div className="container border mt-5 pb-2" style={{ width: '100%' }}>
        <div className="row mt-2">
          <div className="col-12">
            <h3 style={{ textAlign: "center" }}>Update Employee</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type='text' placeholder='Employee First Name' name='FIRST_NAME' />
            &nbsp;
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} type='text' placeholder='Employee Last Name' name='LAST_NAME' />
            &nbsp;
            <input onChange={(e) => setempEmail(e.target.value)} value={empEmail} type='email' placeholder='Email' name='EMP_EMAIL' />
            &nbsp;
            <button type="button" onClick={onDataUpdateHandler} class="btn btn-success">Update</button>
          </div>
        </div>
      </div> : ""}



      ٖ


      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <table className='border' style={{ width: '100%' }}>
              <tr>
                <th>
                  Employee First Name
                </th>
                <th>
                  Employee Last Name
                </th>
                <th>
                  Employee Email Id
                </th>
                <th>
                  Actions
                </th>

              </tr>
              {
                employees.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.email_id}</td>
                      <td>
                        <button type="button" onClick={() => onUpdateHandler(item, index)} class="btn btn-info my-2">Update</button>&nbsp;
                        <button type="button" onClick={() => { onDeleteHandler(item.uid) }} class="btn btn-danger">Delete</button>&nbsp;
                        <button type="button" onClick={() => onViewHandler(item, index)} class="btn btn-info">View</button>

                      </td>
                    </tr>

                  )
                })
              }
            </table>
          </div>
        </div>
      </div>




    </div>
  );
}

export default App;



