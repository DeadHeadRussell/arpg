'use client';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import {useTheme} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import Content from './content.mdx';

function Header(variant) {
  return ({children}) => (
    <Typography component='p' variant={variant}>{children}</Typography>
  );
}

export default () => {
  const theme = useTheme();
  return (
    <div style={{width: 'fit-content', margin: 'auto'}}>
      <Content components={{h3: Header('h3'), h4: Header('h4')}}/>
      <Stack
        direction='row'
        spacing={2}
        useFlexGap
        justifyContent='space-evenly'
        sx={{marginTop: 4}}
      >
        <Card sx={{width: 200}}>
          <CardActionArea component={Link} href='/rules'>
            <CardContent>
              <Typography variant='h5' gutterBottom>Rules</Typography>
              <Typography variant='body1'>Get started learning the system!</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{width: 200}}>
          <CardActionArea component={Link} href='/quick-reference'>
            <CardContent>
              <Typography variant='h5' gutterBottom>Reference</Typography>
              <Typography variant='body1'>High level overview of the gameplay.</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </div>
    );
};

