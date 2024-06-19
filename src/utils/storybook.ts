export const mapReactNodeArgsTypes = (argTypes: string[]) => argTypes.reduce(
  (acc, argType) => ({ ...acc, [argType]: { control: { type: 'text' } } }),
  {}
);

export const mapBooleanArgsTypes = (argTypes: string[]) => argTypes.reduce(
  (acc, argType) => ({ ...acc, [argType]: { control: { type: 'boolean' } } }),
  {}
);

export const mapSelectArgsTypes = (
  argTypes: { title: string; options: string[] }[]
) => argTypes.reduce(
  (acc, argType) => ({
    ...acc,
    [argType.title]: { control: { type: 'radio' }, options: argType.options },
  }),
  {}
);
