// import React, { useEffect, useState } from 'react'
// import './List.css'
// import axios from 'axios'
// import { toast } from 'react-toastify'



// const List = ({url}) => {

    

//     const [list, setList] = useState([])

//     const fetchList = async () => {
//         const response = await axios.get(`${url}/api/food/list`)
//         console.log(response.data);
//         if (response.data.success) {
//             setList(response.data.data)
//         } else {
//             toast.error('error')
//         }
//     }

//      const removeFood = async(foodId) => {
//         const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
//         await fetchList();
//         if (response.data.success) {
//             toast.success(response.data.message)
//         }
//         else {
//             toast.error("error")
//         }
//      }

 
//     useEffect(() => {
//         fetchList()
//     }, [])

//     return (
//         <div className='list-add flex-col'>
//             <p>All Item List</p>
//             <div className='list-table'>
//                 <div className='list-table-format title'>
//                     <b>Image</b>
//                     <b>Name</b>
//                     <b>Category</b>
//                     <b>Price</b>
//                     <b>Action</b>
//                 </div>
//                 {list.map((item, index) => {
//                     return (
//                         <div key={index} className='list-table-format'>
//                             <img src={item.image} />
//                             <p>{item.name}</p>
//                             <p>{item.category}</p>
//                             <p>${item.price}</p>
//                             <p onClick={()=>removeFood(item._id)} className='cursor' >X</p>

//                         </div>
//                     )

//                 })}
//             </div>
//         </div>
//     )
// }

// export default List







import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {
    const [list, setList] = useState([]);
    const [editingItemId, setEditingItemId] = useState(null);
    const [editData, setEditData] = useState({
        name: '',
        category: '',
        price: '',
        description: '',
        discount:'',
        initprice: '',
    });

    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`);
        if (response.data.success) {
            setList(response.data.data);
        } else {
            toast.error('error');
        }
    };

    const removeFood = async (foodId) => {
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
        await fetchList();
        if (response.data.success) {
            toast.success(response.data.message);
        } else {
            toast.error('error');
        }
    };

    const startEditing = (item) => {
        setEditingItemId(item._id);
        setEditData({
            name: item.name,
            category: item.category,
            price: item.price,
            description: item.description,
            discount: item.discount,
            initprice: item.initprice,
        });
    };

    const saveEdit = async (itemId) => {
        const { name, category, price, discount, initprice, description } = editData;
        const response = await axios.post(`${url}/api/food/update`, {
            id: itemId,
            name,
            category,
            description,
            price,
            discount,
            initprice,
        });

        if (response.data.success) {
            toast.success('Item updated successfully');
            await fetchList();
            setEditingItemId(null); // Exit edit mode
        } else {
            toast.error('Error updating item');
        }
    };

    const cancelEdit = () => {
        setEditingItemId(null); // Exit edit mode without saving
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div className='list-add flex-col'>
            <p>All Item List</p>
            <div className='list-table'>
                <div className='list-table-format title'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>description</b>
                    <b>Price</b>
                    <b>discount</b>
                    <b>initprice</b>
                    <b>Action</b>
                </div>
                {list.map((item, index) => (
                    <div key={index} className='list-table-format'>
                        <img src={item.image} alt={item.name} />
                        {editingItemId === item._id ? (
                            <>
                                <input
                                    type='text'
                                    value={editData.name}
                                    onChange={(e) =>
                                        setEditData({ ...editData, name: e.target.value })
                                    }
                                />
                                <input
                                    type='text'
                                    value={editData.category}
                                    onChange={(e) =>
                                        setEditData({ ...editData, category: e.target.value })
                                    }
                                />
                                <input
                                    type='number'
                                    value={editData.price}
                                    onChange={(e) =>
                                        setEditData({ ...editData, price: e.target.value })
                                    }
                                />
                                <input
                                    type='text'
                                    value={editData.discount}
                                    onChange={(e) =>
                                        setEditData({ ...editData, discount: e.target.value })
                                    }
                                />
                                <input
                                    type='text'
                                    value={editData.initprice}
                                    onChange={(e) =>
                                        setEditData({ ...editData, initprice: e.target.value })
                                    }
                                />
                                <input
                                    type='text'
                                    value={editData.description}
                                    onChange={(e) =>
                                        setEditData({ ...editData, description: e.target.value })
                                    }
                                />

                                <button onClick={() => saveEdit(item._id)}>Save</button>
                                <button onClick={cancelEdit}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <p>{item.name}</p>
                                <p>{item.category}</p>
                                <p>₦ {item.price}</p>
                                <p>{item.discount}</p>
                                <p>{item.initprice}</p>
                                <p>{item.description}</p>
                                 <div>
                                <button onClick={() => startEditing(item)}>Edit</button>
                                <p onClick={() => removeFood(item._id)} className='cursor'>
                                    Delete
                                </p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
