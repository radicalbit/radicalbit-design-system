import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { mapReactNodeArgsTypes } from '@Src/utils/storybook';
import RbitModal from './index';
import SectionTitle from '../section-title';
import NewHeader from '../header/newHeader';
import Button from '../button';

const meta: Meta<typeof RbitModal> = {
  title: 'Components/RbitModal',
  component: RbitModal,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    ...mapReactNodeArgsTypes(['header', 'icoActions', 'actions']),
  },
};

type Story = StoryObj<typeof RbitModal>;

export const Default: Story = {
  args: {
    dark: false,
    closable: true,
  },
  render: (props) => {
    const [open, setOpen] = useState(false);

    const handleOnCancel = () => { setOpen(false); };

    const text = 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.';

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <RbitModal
          actions={(
            <>
              <Button type="default" onClick={handleOnCancel}>Cancel</Button>
              <Button type="primary">Primary</Button>
            </>
          )}
          header={(
            <NewHeader
              title={(
                <SectionTitle
                  title="Modal Header"
                  subtitle="Modal subtitle and content description"
                />
              )}
            />
          )}
          open={open}
          onCancel={handleOnCancel}
          {...props}
        >
          <div>{text}</div>
        </RbitModal>
      </>
    );
  },
};

export const Maximizable: Story = {
  args: {
    dark: false,
    closable: true,
    maximizable: true,
  },
  render: (props) => {
    const [open, setOpen] = useState(false);

    const handleOnCancel = () => { setOpen(false); };

    const text = 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.';

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Maximizable Modal</Button>
        <RbitModal
          actions={(
            <>
              <Button type="default" onClick={handleOnCancel}>Cancel</Button>
              <Button type="primary">Primary</Button>
            </>
          )}
          header={(
            <NewHeader
              title={(
                <SectionTitle
                  title="Modal Header"
                  subtitle="Modal subtitle and content description"
                />
              )}
            />
          )}
          open={open}
          onCancel={handleOnCancel}
          {...props}
        >
          <div>{text}</div>
        </RbitModal>
      </>
    );
  },
};

export default meta;
