import {
  faExpand, faMinimize,
} from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler, memo, useState } from 'react';
import FontAwesomeIcon from '@Components/font-awesome-icon';

type Props = {
  toggleFullScreen?: MouseEventHandler<SVGElement>
};

const IcoFullScreen = (props: Props) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleOnFullScreen: MouseEventHandler<SVGElement> = (e) => {
    setIsFullScreen((b: boolean) => !b);
    if (props.toggleFullScreen) props.toggleFullScreen(e);
  };

  return <FontAwesomeIcon icon={isFullScreen ? faMinimize : faExpand} onClick={handleOnFullScreen} />;
};

export default memo(IcoFullScreen);
