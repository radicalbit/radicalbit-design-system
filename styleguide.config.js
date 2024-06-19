import path from 'path';
import webpackProd from './config/webpack.prod';

module.exports = {
  title: 'Radicalbit | Design System',
  assetsDir: path.join(__dirname, '/src/lib/resources'),
  require: [
    path.join(__dirname, 'src/styles/index.less'),
  ],
  styleguideDir: 'docs',
  pagePerSection: true,
  sections: [
    {
      name: 'Home',
      content: 'src/styleguidist/home/Readme.md',
    },
    {
      name: 'Brand',
      content: 'src/styleguidist/brand/Readme.md',
    },
    {
      name: 'Principles',
      content: 'src/styleguidist/principles/Readme.md',
    },
    {
      name: 'Components library',
      components: 'src/lib/components/*/index.js',
    },
  ],
  theme: {
    color: {
      base: '#9b9b9b',
      link: '#e7e7e7',
      linkHover: '#59b4e8',
      sidebarBackground: '#4a4a4a',
      baseBackground: '#fff',
    },
    fontSize: {
      base: 15,
      text: 15,
      small: 13,
      h1: 36,
      h2: 30,
      h3: 26,
      h4: 15,
      h5: 14,
      h6: 12,
    },
    fontFamily: {
      base: ['Lato'],
      monospace: ['Lato'],
    },
    sidebarWidth: 300,
    spaceFactor: 6,
  },
  styles: {
    Styleguide: {
      sidebar: {
        color: '#FFFFFF',
      },
    },
    Logo: {
      border: 'none',
      logo: {
        'text-indent': -999,
        background: 'url("/images/rbit-logo.png") no-repeat',
        'background-position': 0,
        'margin-left': 15,
        height: 70,
        width: 200,
        padding: 0,
      },
    },
  },
  webpackConfig: webpackProd,
};
