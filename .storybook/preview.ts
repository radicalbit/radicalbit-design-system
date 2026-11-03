/** @type { import('@storybook/react').Preview } */
import '../src/styles/index.less';

const withTheme = (Story, context) => {
  const isDark = context.globals.theme === 'dark';

  document.documentElement.classList.toggle('dark', isDark);
  document.body.style.background = isDark ? 'var(--coo-bk-lv0)' : '';

  return Story();
};

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  globalTypes: {
    theme: {
      description: 'Design system theme',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: 'light',
  },

  decorators: [withTheme],
};

export default preview;
