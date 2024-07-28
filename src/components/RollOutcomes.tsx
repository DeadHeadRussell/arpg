'use client';

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import {useTheme} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {BarChart} from '@mui/x-charts/BarChart';
import {useState} from 'react';


const dataset = [
  {
    roll: 0,
    count: 1
  },
  {
    roll: 1,
    count: 3
  },
  {
    roll: 2,
    count: 6
  },
  {
    roll: 3,
    count: 10
  },
  {
    roll: 4,
    count: 15
  },
  {
    roll: 5,
    count: 21
  },
  {
    roll: 6,
    count: 28
  },
  {
    roll: 7,
    count: 36
  },
  {
    roll: 8,
    count: 42
  },
  {
    roll: 9,
    count: 46
  },
  {
    roll: 10,
    count: 48
  },
  {
    roll: 11,
    count: 48
  },
  {
    roll: 12,
    count: 46
  },
  {
    roll: 13,
    count: 42
  },
  {
    roll: 14,
    count: 36
  },
  {
    roll: 15,
    count: 28
  },
  {
    roll: 16,
    count: 21
  },
  {
    roll: 17,
    count: 15
  },
  {
    roll: 18,
    count: 10
  },
  {
    roll: 19,
    count: 6
  },
  {
    roll: 20,
    count: 3
  },
  {
    roll: 21,
    count: 1
  }
].map(roll => ({
  ...roll,
  '%': roll.count / (8*8*8) * 100
})).map((roll, i, rolls) => ({
  ...roll,
  atMost: rolls.slice(0, i + 1).reduce((t, r) => t + r['%'], 0)
}));

export default () => {
  const [target, setTarget] = useState(10);
  const [chartType, setChartType] = useState('%');
  const theme = useTheme();

  const colourValues = [
    [-7, theme.palette.success.dark],
    [-4, theme.palette.success.main],
    [-1, theme.palette.success.light],
    [3, theme.palette.secondary.main],
    [6, theme.palette.error.light],
    [9, theme.palette.error.main],
    [10, theme.palette.error.dark]
  ]
    .map(v => [v[0] + target, v[1]])
    .filter(v => v[0] >= 0 && v[0] <= 21);

  const colourThresholds = colourValues.map(v => v[0]);
  const colours = colourValues.map(v => v[1]);

  return (
    <div>
      <Typography variant='h5'>Roll outcomes</Typography>
      <Stack direction='row' spacing={4} useFlexGap alignItems='last baseline'>
        <RadioGroup row value={chartType} onChange={e => setChartType(e.target.value)}>
          <FormControlLabel value='%' control={<Radio />} label='%' />
          <FormControlLabel value='atMost' control={<Radio />} label='At Most' />
        </RadioGroup>
        <TextField
          variant='standard'
          type='number' 
          label='Target'
          value={target}
          onChange={e => setTarget(parseInt(e.target.value, 10))}
          sx={{width: 100}}
        />
      </Stack>
      <BarChart
        layout='horizontal'
        height={500}
        dataset={dataset}
        xAxis={[{label: '%'}]}
        yAxis={[{
          scaleType: 'band',
          dataKey: 'roll',
          colorMap: {
            type: 'piecewise',
            thresholds: colourThresholds,
            colors: colours
          }
        }]}
        series={[{
          dataKey: chartType,
          valueFormatter: v => `${v.toFixed(2)}%`
        }]}
      />
    </div>
  );
};

