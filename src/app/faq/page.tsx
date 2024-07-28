import Page from '@/components/Page';
import {buildToc} from '@/utils';

import Content from './content.mdx';

export default () => (
  <Page
    title='FAQ'
    toc={buildToc('/src/app/faq/content.mdx')}
  >
    <Content />
  </Page>
);

