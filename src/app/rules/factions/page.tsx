import Page from '@/components/Page';
import {buildToc} from '@/utils';

import Content from './content.mdx';

export default () => (
  <Page
    title='Factions' 
    breadcrumbs={[{title: 'Rules', href: '/rules'}]}
    toc={buildToc('/src/app/rules/factions/content.mdx')}
  >
    <Content />
  </Page>
);

