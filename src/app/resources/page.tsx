import Page from '@/components/Page';
import {buildToc} from '@/utils';

import Content from './content.mdx';

export default () => (
  <Page
    title='Resources'
    toc={buildToc('/src/app/resources/content.mdx')}
  >
    <Content />
  </Page>
);

