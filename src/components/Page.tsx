import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';



export default ({title, breadcrumbs, toc, children}) => (
  <div style={{maxWidth: 'fit-content', margin: 'auto'}}>
    <Breadcrumbs>
      <Link href='/' color='inherit' underline='hover' component={NextLink}>ARPG</Link>
      {(breadcrumbs ?? []).map(crumb => (
        <Link key={crumb.href} href={crumb.href} color='inherit' underline='hover' component={NextLink}>{crumb.title}</Link>
      ))}
      <Typography>{title}</Typography>
    </Breadcrumbs>
    <Typography variant='h2'>{title}</Typography>
    <Typography variant='h4'>Contents</Typography>
    <ToC items={toc} />
    <div>
      {children}
    </div>
  </div>
);

function ToC({items}) {
  return (
    <Typography component='ul' sx={{marginLeft: 1, marginBottom: 2, paddingLeft: 2}}>
      {items.map(item => (
        <li key={item.id}>
          <Link href={`#${item.id}`} underline='hover'>{item.title}</Link>
          {item.children && <ToC items={item.children} />}
        </li>
      ))}
    </Typography>
  );
}

