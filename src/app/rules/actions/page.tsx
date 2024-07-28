import WidePage from '@/components/WidePage';
import {buildToc} from '@/utils';

import Content from './content.mdx';

export default () => (
  <WidePage
    title='Actions' 
    breadcrumbs={[{title: 'Rules', href: '/rules'}]}
    toc={buildToc('/src/app/rules/actions/content.mdx')}
    Content={Content}
  />
);

