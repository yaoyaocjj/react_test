import React from 'react';
import Link from './link.js';
import { FilterTypes } from './constants';

const filter = () => {
  return (
    <p className="filter">
      <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
      <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
      <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
    </p>
  )
};
 export default filter;