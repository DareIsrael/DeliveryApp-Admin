import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {
    
    

   const [image, setImage] = useState (false)
   const [data, setData] = useState ({
    name:"",
    description:"",
    price:"",
    discount:"",
    category:"PlasmaTV"
   })

 const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData (data => ({...data,[name]:value}))
 }

 const onSubmitHandler = async (event) => {
   event.preventDefault();
   const formData = new FormData();
   formData.append ("name", data.name)
   formData.append ("description", data.description)
   formData.append ("price", data.price)
   formData.append ("initprice", data.initprice)
   formData.append ("discount", data.discount)
   formData.append ("category", data.category)
   formData.append ("image", image)
   const response = await axios.post(`${url}/api/food/add`, formData);
   if (response.data.success) {
    setData ({
            name:"",
            description:"",
            price:"",
            initprice:"",
            discount:"",
            category:"PlasmaTV"
           })
           setImage(false)
           toast.success(response.data.message)
   } else {
        toast.error(response.data.message)
   }
 }


  return (
    <div className='add'>
    <form className='flex-col'  onSubmit={onSubmitHandler}>
      <div className='add-img-upload flex-col'>
      <p>Upload Image</p>
      
      <label htmlFor='image'>
          <img src={image?URL.createObjectURL(image):assets.upload_area} />

      </label>
      <input onChange={(e)=> setImage(e.target.files[0])} type='file' id='image' hidden required />

      </div>
      <div className='add-product-name flex-col'>
       <p>Product name</p>
       <input onChange={onChangeHandler} value={data.name} type='text'  name='name' placeholder='Type here' />
      </div>

      <div className='add-product-description flex-col'>
       <p>Product description</p>
       <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='write content here' required />
      </div>

      <div className='add-category-price' >
       <div className='add-category flex-col'>
       <p>Product category</p>
       <select  onChange={onChangeHandler} value={data.category}  name='category' >
       <option value='PlasmaTV' >PlasmaTV</option>
       <option value='Sound' >Sounds</option>
       <option value='Cooker' >Cooker</option>
       <option value='Fan' >Fan</option>
       <option value='Freezer' >Freezer</option>
       <option value='Table' >Table</option>
       <option value='Iron' >Iron</option>
       <option value='Washing-Machine' >Washing</option>
       <option value='AC' >AC</option>
       <option value='Generator' >Generator</option>

       </select>
       </div>
       <div className='add-price flex-col'>
        <p>Product price</p>
        <input onChange={onChangeHandler} value={data.price} type='number' name='price' placeholder='#20' />
        </div>
        <div className='add-price flex-col' >
        <p>Initial Price</p>
        <input onChange={onChangeHandler} value={data.initprice} type='text' name='initprice' placeholder='' />

        </div>
        <div className='add-price flex-col' >
        <p>Discount</p>
        <input onChange={onChangeHandler} value={data.discount} type='text' name='discount' placeholder='#20' />

        </div>
      </div>
      <button type='submit' className='add-btn' >ADD</button>
    </form>
      
    </div>
  )
}

export default Add





