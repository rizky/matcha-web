import { configure } from '@storybook/react';

function loadStories() {
  require('../src/tests/stories.js');
}

configure(loadStories, module);