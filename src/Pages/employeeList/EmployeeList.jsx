import {React,useState} from 'react'
import './EmployeeList.css'
import { DataGrid } from '@material-ui/data-grid';
import {Delete} from "@material-ui/icons"
import { employeeRows } from '../../DummyData';
import { Link } from "react-router-dom";
import Sidebar from '../../Components/Sidebar/Sidebar';
import Topbar from '../../Components/Topbar/Topbar';

const EmployeeList = () => {
  const [data,setData] = useState(employeeRows);

 const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'user', headerName: 'Employee', width: 200 , renderCell:(params)=>{

      return(
        <div className='userListUser'>
           <img className='userListImg' src={params.row.avatar} alt="" />
           {params.row.username}
        </div>
      )
    }},
    { field: 'email', headerName: 'Email', width: 200},
    {
      field: 'address',
      headerName: 'Address',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell:(params)=>{
        return(
          <div>
            <Link to={"/employee/"+params.row.id}>
              <button className='userListEdit'>View</button>
            </Link>
            <Delete
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        )
      }
    }, 
  ];
  return (
    <>
     <Topbar />
      <div className="container">
        <Sidebar />
    <div className='userList'>
    <h3 className="title">Employees</h3>
    <DataGrid
     rows={data}
     columns={columns}
     pageSize={8}
     checkboxSelection
     disableSelectionOnClick
     />
 </div>
 </div>
     </>
  )
}

export default EmployeeList
