import AwesomeComponent from './AwesomeComponent';
import React from 'react';
import { render } from 'react-dom';
import FunctionAsChild from './FunctionAsChild';

render(<AwesomeComponent/>, <FunctionAsChild/>, document.getElementById('app'));
