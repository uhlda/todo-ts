import * as React from 'react';
import { NavLink } from 'react-router-dom';

// tslint:disable-next-line:no-any
const FilterLink: any = ({ filter, children }) => (
  <NavLink
    to={filter === 'SHOW_ALL' ? '/' : `/${ filter }`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
);

export default FilterLink;
