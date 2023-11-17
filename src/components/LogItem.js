// src/components/LogItem.js
import React from 'react';

const LogItem = ({ log }) => {
  return (
    <li>
      <p>Level: {log.level}</p>
      <p>Message: {log.message}</p>
      {/* Render other log fields as needed */}
    </li>
  );
};

export default LogItem;
