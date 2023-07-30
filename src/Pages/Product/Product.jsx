import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import Chart from '../../Components/Chart/Chart'
import { productData } from '../../DummyData'
import { Publish } from '@material-ui/icons'
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Product = () => {
  return (
    <>
     <Topbar />
      <div className="container">
        <Sidebar />
    <div className='product'>
      <div className="productTitleContainer">
        <h3 className="productTitle">Product</h3>
        <Link to='/newproduct'>
        <button className="productAddButton">Add</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey='Sales' title='Sales Performance'/>
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="productInfoImg" />
            <span className="productName">Iphone 11 Pro</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">1</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form  className="productForm">
          <div className="productFormLeft">
            <label >Product Name</label>
            <input type="text" placeholder='Iphone 11 Pro'/>
            <label >In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label >Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id='file' style={{display:'none'}} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Product
