import Typography from '@mui/material/Typography';
import type {MDXComponents} from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: props => <main {...props} style={{maxWidth: 800}} />,
    h1: props => <Typography variant='h1' {...props} />,
    h2: props => <Typography variant='h2' {...props} />,
    h3: props => <Typography variant='h3' {...props} />,
    h4: props => <Typography variant='h4' {...props} />,
    h5: props => <Typography variant='h5' {...props} />,
    h6: props => <Typography variant='h6' {...props} />,
    p: props => <Typography variant='p' component='p' sx={{marginBottom: 2}}>{props.children}</Typography>,
    ul: props => <Typography variant='p' component='ul' sx={{marginTop: 0, marginBottom: 2}}>{props.children}</Typography>
  };
}

