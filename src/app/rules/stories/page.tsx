import Page from '@/components/Page';
import {buildToc} from '@/utils';

import Content from './content.mdx';

export default () => (
  <Page
    title='Stories' 
    breadcrumbs={[{title: 'Rules', href: '/rules'}]}
    toc={buildToc('/src/app/rules/stories/content.mdx')}
  >
    <Content />
  </Page>
);

