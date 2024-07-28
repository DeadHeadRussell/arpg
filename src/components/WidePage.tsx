import Page from './Page';

export default ({title, breadcrumbs, toc, Content}) => (
  <Page title={title} breadcrumbs={breadcrumbs} toc={toc}>
    <Content components={{wrapper: ({children}) => <main>{children}</main>}} />
  </Page>
);

