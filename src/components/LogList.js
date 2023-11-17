// src/components/LogList.js
import React from 'react';
import LogItem from './LogItem';

const LogList = ({ logs }) => {
  return (
    <ul>
      {logs.map((log) => (
        <LogItem key={log.traceId} log={log} />
      ))}
    </ul>
  );
};

export default LogList;
