import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useTheme} from '@mui/material/styles';
import Link from 'next/link';
import React, {useState} from 'react';

interface MenuItem {
  title: string;
  href: string;
  children?: MenuItem[];
};

function createMenuItem(title: string, href: string, children?: MenuItem[]) {
  return {title, href, children};
}

const topLevelItems = [
  createMenuItem('Home', '/'),
  createMenuItem('Rules', '/rules', [
    createMenuItem('Setup', '/rules/setup'),
    createMenuItem('Tags', '/rules/tags'),
    createMenuItem('Characters', '/rules/characters'),
    createMenuItem('Scenes', '/rules/scenes'),
    createMenuItem('Factions', '/rules/factions'),
    createMenuItem('Actions', '/rules/actions'),
    createMenuItem('Stories', '/rules/stories'),
    createMenuItem('Optional Rules', '/rules/optional-rules')
  ]),
  createMenuItem('Quick Reference', '/quick-reference'),
  createMenuItem('FAQ', '/faq'),
  createMenuItem('Examples', '/examples'),
  createMenuItem('Resources', '/resources')
];

export default () => (
  <Menu items={topLevelItems} indent={0} />
);

function Menu({items, indent}: {items: MenuItem[], indent: number}) {
  const theme = useTheme();
  const [open, setOpen] = useState({});
  function toggleOpen(href) {
    setOpen({...open, [href]: !(open[href] !== false)});
  }

  const buttonStyles = {
    paddingTop: 0,
    paddingBottom: 0
  };

  const textStyles = {
    color: theme.palette.secondary.contrastText
  };

  return (
    <List sx={textStyles}>
      {items.map(item => {
        const hasChildren = item.children;
        const isOpen = open[item.href] !== false;

        return (
          <React.Fragment key={item.href}>
            {hasChildren ? (
              <>
                <ListItemButton sx={buttonStyles} onClick={() => toggleOpen(item.href)}>
                  <ListItemText primaryTypographyProps={{variant: 'subtitle1'}}>{item.title}</ListItemText>
                  {isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={isOpen} timeout='auto'>
                  <Menu items={item.children} indent={indent + 1} />
                </Collapse>
              </>
            ) : (
              <ListItemButton sx={buttonStyles} component={Link} href={item.href}>
                <ListItemText sx={{marginLeft: indent*2}} primaryTypographyProps={{variant: 'subtitle1'}}>{item.title}</ListItemText>
              </ListItemButton>
            )}
          </React.Fragment>
        );
      })}
    </List>
  );
}

