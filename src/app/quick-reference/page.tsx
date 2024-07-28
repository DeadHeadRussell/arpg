import Page from '@/components/Page';
import {buildToc} from '@/utils';

import Content from './content.mdx';

export default () => (
  <Page
    title='Quick Reference'
    toc={buildToc('/src/app/quick-reference/content.mdx')}
  >
    <Content />
  </Page>
);

