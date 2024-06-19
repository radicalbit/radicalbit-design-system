import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import set from 'lodash/set';
import {
  mapReactNodeArgsTypes,
  mapSelectArgsTypes,
} from '@Src/utils/storybook';
import FormField from '../form-field';
import { Input } from '../input';
import FormMultiple from './index';

const meta: Meta<typeof FormMultiple> = {
  title: 'Components/FormMultiple',
  component: FormMultiple,

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['add', 'remove']),
    ...mapSelectArgsTypes([
      { title: 'align', options: ['center', 'flex-end', 'flex-start'] },
    ]),
  },
};

type Story = StoryObj<typeof FormMultiple>;

export const Default: Story = {
  render: (props) => (
    <FormMultiple
      add={<FontAwesomeIcon icon={faPlusCircle} />}
      remove={<FontAwesomeIcon icon={faMinusCircle} />}
      {...props}
    >
      <Input />
      <Input />
    </FormMultiple>
  ),
};

export const Implementation: Story = {
  parameters: {
    layout: 'centered',
  },
  render: (props) => {
    const [items, setItems] = useState([{ checked: true, name: 'Jane Doe' }]);
    return (
      <>
        {items.map((item, index) => {
          const handleOnAdd = () => setItems((i) => [...i, { checked: true, name: 'Jane Doe' }]);
          const handleOnRemove = () => setItems((i) => {
            i.splice(index, 1);
            return i.slice();
          });

          return (
            <FormField key={index} label="Form Multiple">
              <FormMultiple
                add={
                  <FontAwesomeIcon icon={faPlusCircle} onClick={handleOnAdd} />
                }
                remove={(
                  <FontAwesomeIcon
                    icon={faMinusCircle}
                    onClick={handleOnRemove}
                  />
                )}
                {...props}
              >
                <Input
                  value={item.name}
                  onChange={({ target: { value } }) => setItems((i) => set(i.slice(), `[${index}].name`, value))}
                />
              </FormMultiple>
            </FormField>
          );
        })}
      </>
    );
  },
  args: {},
};

export default meta;
