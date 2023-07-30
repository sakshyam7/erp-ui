import React, { useState } from 'react'
import './UserList.css'
import { DataGrid } from '@material-ui/data-grid';
import {Delete} from "@material-ui/icons"
import { userRows } from '../../DummyData';
import { Link } from "react-router-dom";
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';

const UserList = () => {
  const [data,setData] = useState(userRows);

 const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'user', headerName: 'Customer', width: 250 , renderCell:(params)=>{

      return(
        <div className='userListUser'>
           <img className='userListImg' src={params.row.avatar} alt="" />
           {params.row.username}
        </div>
      )
    }},
    { field: 'email', headerName: 'Email', width: 200},
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell:(params)=>{
        return(
          <div>
            <Link to={"/user/"+params.row.id}>
              <button className='userListEdit'>Edit</button>
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
      <h3 className="title">Costumers</h3>
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

export default UserList
