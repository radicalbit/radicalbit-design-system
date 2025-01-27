import { faExpand, faMinimize } from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler, memo, useState } from 'react';
import FontAwesomeIcon from '@Components/font-awesome-icon';

type Props = {
  className?: string;
  modifier?: string;
  toggleFullScreen?: MouseEventHandler<SVGElement>;
};

const IcoFullScreen = ({
  className = '',
  modifier = '',
  toggleFullScreen,
}: Props) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleOnFullScreen: MouseEventHandler<SVGElement> = (e) => {
    setIsFullScreen((b: boolean) => !b);
    
    if (toggleFullScreen) {
      toggleFullScreen(e);
    }
  };

  return (
    <FontAwesomeIcon
      className={className}
      modifier={modifier}
      icon={isFullScreen ? faMinimize : faExpand}
      onClick={handleOnFullScreen}
    />
  );
};

export default memo(IcoFullScreen);
