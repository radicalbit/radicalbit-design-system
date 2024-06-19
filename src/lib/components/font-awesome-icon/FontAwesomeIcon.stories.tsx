import { Meta, StoryObj } from '@storybook/react';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import Search from '@Components/search';
import Tooltip from '@Components/tooltip';
import FontAwesomeIcon from '@Components/font-awesome-icon';

const meta: Meta<typeof FontAwesomeIcon> = {
  title: 'Components/FontAwesomeIcon',
  component: FontAwesomeIcon,

  tags: ['autodocs'],

  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: { ...icons },
    },
  },
};
type Story = StoryObj<typeof FontAwesomeIcon>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },

  args: {
    icon: icons.faClock,
  },
};

export const IconList = () => {
  const initialIcons = Object.entries(icons);

  const [filteredIcons, setIcons] = useState<typeof initialIcons>(initialIcons);

  const handleSearch = (s: string) => {
    setIcons(
      initialIcons.filter(([key]) => key.toLowerCase().includes(s.toLowerCase()))
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <>
      <Search onSearch={handleSearch} onChange={handleChange} />
      
      <div>
        {filteredIcons.map(([key, icon]) => (
          <div key={key} style={{ display: 'inline-block', margin: '1rem' }}>
            <Tooltip title={key}>
              {/* you need to cast this because of state giving IconDefinition */}
              <FontAwesomeIcon icon={icon as IconProp} size="2x" />
            </Tooltip>
          </div>
        ))}
      </div>
    </>
  );
};

export default meta;
