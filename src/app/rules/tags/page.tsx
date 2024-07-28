import WidePage from '@/components/WidePage';
import {buildToc} from '@/utils';

import Content from './content.mdx';

export default () => (
  <WidePage
    title='Tags' 
    breadcrumbs={[{title: 'Rules', href: '/rules'}]}
    toc={buildToc('/src/app/rules/tags/content.mdx')}
    Content={Content}
  />
);

