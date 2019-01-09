import { configure } from '@storybook/react';

function loadStories() {
  const contexts = [
    require.context('../packages', true, /stories.*\.jsx$/),
  ];

  contexts.forEach(context => {
    context
      .keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context);
  });
}

configure(loadStories, module);
