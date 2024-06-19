import classNames from 'classnames';
import AntdLayout from 'antd/lib/layout';

import Theme, { ThemeProps } from '@Components/layout/themes';
import OverallTop, { OverallTopProps } from '@Components/layout/overall-top';
import { memo } from 'react';

type Props = ThemeProps & {
  overallTop?: {
    overallTopContent?: OverallTopProps['content'];
    hasContentDark?: OverallTopProps['contentDark'];
  };
  hasOverallTop?: boolean;
};

const Layout = ({ overallTop, hasOverallTop, ...others }: Props) => {
  const css = classNames({
    'rdb-layout': true,
    'has-overall-top': hasOverallTop,
    'has-left-column': others.hasLeftColumn,
    'has-right-column': others.hasRightColumn,
    'has-secondary-column': others.hasSecondaryColumn,
    'has-main-column': others.hasMainColumn, // TODO: Need CSS
    'is-left-column-collapsed':
      others.left && others.left.hasLeftColumnCollapsed,
    'is-right-column-collapsed':
      others.right && others.right.hasRightColumnCollapsed,
    'is-secondary-column-collapsed':
      others.secondary && others.secondary.hasSecondaryColumnCollapsed,
  });

  const overallTopContent = overallTop?.overallTopContent;
  const hasContentDark = overallTop?.hasContentDark;

  return (
    <>
      {hasOverallTop && (
        <OverallTop content={overallTopContent} contentDark={hasContentDark} />
      )}

      <AntdLayout className={css}>
        <Theme {...others} />
      </AntdLayout>
    </>
  );
};

export default memo(Layout);
