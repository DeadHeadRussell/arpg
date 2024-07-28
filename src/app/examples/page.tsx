import Page from '@/components/Page';
import {buildToc} from '@/utils';

import Content from './content.mdx';

export default () => (
  <Page
    title='Examples'
    toc={buildToc('/src/app/examples/content.mdx')}
  >
    <Content />
  </Page>
);

