import Page from '@/components/Page';
import {buildToc} from '@/utils';

import Content from './content.mdx';

export default () => (
  <Page
    title='Optional Rules' 
    breadcrumbs={[{title: 'Rules', href: '/rules'}]}
    toc={buildToc('/src/app/rules/optional-rules/content.mdx')}
  >
    <Content />
  </Page>
);

