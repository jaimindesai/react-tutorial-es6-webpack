import React from 'react';
import ReactDOM from 'react-dom';
import CommentsBox from './comments-box';
import './base.css';

ReactDOM.render(
      <CommentsBox pollInterval={2000} />,
      document.getElementById('app')
);
