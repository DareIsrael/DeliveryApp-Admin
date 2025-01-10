import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-options'>
                <NavLink to='/admin/add' className='sidebar-option'>
                    <img src={assets.add_icon_green} />
                    <p>Add Items</p>

                </NavLink>

                <NavLink  to= '/admin/list' className='sidebar-option'>
                    <img src={assets.order_icon} />
                    <p>List Items</p>

                </NavLink>

                <NavLink to='/admin/order' className='sidebar-option'>
                    <img src={assets.order_icon} />
                    <p>Orders</p>

                </NavLink>

                <NavLink to='/admin/customer' className='sidebar-option'>
                    <img src={assets.customers_icon} />
                    <p>Customers</p>

                </NavLink>


            </div>

        </div>
    )
}

export default Sidebar
