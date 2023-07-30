import React, { useState } from 'react'
import './ProductList.css'
import { DataGrid } from '@material-ui/data-grid';
import {Delete} from "@material-ui/icons"
import { productRows } from '../../DummyData';
import { Link } from "react-router-dom";
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';

const ProductList = () => {
  const [data,setData]=useState(productRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'product', headerName: 'Product', width: 150 , renderCell:(params)=>{

      return(
        <div className='productListItem'>
           <img className='productListImg' src={params.row.img} alt="" />
           {params.row.name}
        </div>
      )
    }},
    { field: 'stock', headerName: 'Stock', width: 150},
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell:(params)=>{
        return(
          <div>
            <Link to={"/product/"+params.row.id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <Delete
              className="productListDelete"
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
    <div className='productList'>
    <h3 className="title">Inventory</h3>
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

export default ProductList
