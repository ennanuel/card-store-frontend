import React from 'react';
import { NavLink } from 'react-router-dom';

const OrdersFilters = ({ fetchTypes, currentPage }) => {
  return (
    <ul className="flex-row filters">
      {
        fetchTypes.map((fetchType, i) => (
          <li>
            <NavLink
              key={i}
              to={`/orders/${fetchType}/${currentPage}`}
              className={({ isActive }) => `sell-btn action-btn relative ${!isActive && 'remove-btn'}`}
            >{fetchType}</NavLink>
          </li>
        ))
      }
    </ul>
  )
};

export default OrdersFilters
