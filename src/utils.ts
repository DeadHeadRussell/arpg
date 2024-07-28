import fs from 'fs';

interface TocItem {
  id: string;
  title: string;
  children: TocItem[];
};

export function buildToc(path: string): TocItem[] {
  return fs.readFileSync(process.cwd() + path, 'utf-8')
    .split('\n')
    .filter(line => line.trim().startsWith('#'))
    .map(line => {
      const [level, ...rest] = line.trim().split(' ');
      return {
        id: rest.join('-').toLowerCase(),
        level: level.length,
        title: rest.join(' ')
      };
    })
    .reduce((toc, item) => {
      let topList = toc;
      let level = item.level;
      while (level > 1) {
        const topItem = topList.at(-1);
        if (!topItem) {
          break;
        }
        if (!topItem.children) {
          topItem.children = [];
        }
        topList = topItem.children;
        level--;
      }
      topList.push(item);
      return toc;
    }, []);
}

