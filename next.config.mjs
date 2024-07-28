import nextMdx from '@next/mdx';
import remarkRehype from 'remark-rehype';
import remarkSlug from 'remark-slug';
import rehypeShiftHeading from 'rehype-shift-heading';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';

const withMdx = nextMdx({
  options: {
    remarkPlugins: [remarkSlug],
    rehypePlugins: [[rehypeShiftHeading, {shift: 2}], rehypeAutoLinkHeadings]
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = withMdx({
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js']
});

export default nextConfig;
