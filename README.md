# Radicalbit Design System

Building design system in dev mode
===============

* Install dependencies with ```$ yarn```
* Start storybook server ```$ yarn storybook```
* Open the browser on ```http://localhost:6006```

Creating a new component
===============

- Create a new folder under `src/lib/components`, dashed-name as your component's name
- Develop your component in a file named `index.tsx`
- Integrate the styles for your component in a file named `_styles.less`
- Create some Storybook stories in a file named `<component-name>.stories.ts`
- In `src/lib/index.ts` add a new export line for the component (follow alphabetic order) `export { default as XXX } from './components/XXX';`
- In `src/styles/components.less` add a new import line for the component (follow alphabetic order) `@import 'XXX/_styles';`