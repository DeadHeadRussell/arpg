'use client';

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import {useState} from 'react';

import Table from './Table';

export default ({staticColumns, staticRows, tables}) => {
  const [tableName, setTable] = useState(tables[0].title);
  const table = tables.find(table => table.title == tableName);

  const columns = staticColumns.concat(table.columns);
  const rows = staticRows.map((row, i) => row.concat(table.rows[i]));
  
  return (
    <>
      <RadioGroup row value={tableName} onChange={e => setTable(e.target.value)}>
        {tables.map(table => (
          <FormControlLabel key={table.title} value={table.title} control={<Radio />} label={table.title} />
        ))}
      </RadioGroup>
      <Table columns={columns} rows={rows} />
    </>
  );
};

