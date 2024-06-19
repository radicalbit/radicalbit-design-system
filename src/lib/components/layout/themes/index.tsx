import * as React from 'react';
import LeftColumn, { LeftProps } from '../left-column';
import MainColumn from '../main-column';
import { MainProps } from '../main-nav';
import RightColumn, { RightProps } from '../right-column';
import SecondaryColumn, { SecondaryProps } from '../secondary-column';

export type ThemeProps = {
  hasHeader?: boolean;
  hasLeftColumn?: boolean;
  hasSecondaryColumn?: boolean;
  hasMainColumn?: boolean;
  hasRightColumn?: boolean;
  left?: LeftProps;
  secondary?: SecondaryProps;
  right?: RightProps;
  main?: MainProps;
};

export default ({
  hasHeader,
  hasLeftColumn,
  hasSecondaryColumn,
  hasMainColumn,
  hasRightColumn,
  left = {},
  secondary = {},
  right = {},
  main = {},
}: ThemeProps) => {
  const {
    backgroundColor: leftColumnBackgroundColor,
    backgroundImage: leftColumnBackgroundImage,
    bottomMenu,
    collapsible,
    hasHeaderLeftContentDark,
    hasLeftColumnCollapsed,
    hasLeftContentDark,
    leftColumnHeaderAltContent,
    leftColumnHeaderSecondaryContent,
    leftContent,
    mainMenu,
    onLeftColumnCollapse,
  } = left;

  const {
    hasHeaderSecondaryContentDark,
    hasSecondaryColumnCollapsed,
    hasSecondaryContentDark,
    headerContent: secondaryHeaderContent,
    mainContent: secondaryMainContent,
    onSecondaryColumnCollapse,
  } = secondary;

  const {
    styles: rightColumnStyles,
    backgroundColor: rightColumnBackgroundColor,
    backgroundImage: rightColumnBackgroundImage,
    hasHeaderRightContentDark,
    hasRightColumnCollapsed,
    hasRightContentDark,
    onRightColumnCollapse,
    rightColumnCollapsible,
    rightColumnHeaderAltContent,
    rightColumnWidth = '15rem',
    rightContent,
  } = right;

  const {
    headerContent,
    headerClassName,
    mainContent,
    mainClassName,
    hasHeaderContentDark,
    hasMainContentDark,
    bottomDrawerContent,
    bottomDrawerTitle,
    showBottomDrawerOnHover,
  } = main;

  return (
    <>
      {hasLeftColumn && (
        <LeftColumn
          backgroundColor={leftColumnBackgroundColor}
          backgroundImage={leftColumnBackgroundImage}
          bottomMenu={bottomMenu}
          collapsed={hasLeftColumnCollapsed}
          collapsible={collapsible}
          content={leftContent}
          contentDark={hasLeftContentDark}
          headerAltContent={leftColumnHeaderAltContent}
          headerContentDark={hasHeaderLeftContentDark}
          headerSecondaryContent={leftColumnHeaderSecondaryContent}
          menu={mainMenu}
          onCollapse={onLeftColumnCollapse}
        />
      )}

      {hasSecondaryColumn && (
        <SecondaryColumn
          collapsed={hasSecondaryColumnCollapsed}
          content={secondaryMainContent}
          contentDark={hasSecondaryContentDark}
          headerContent={secondaryHeaderContent}
          headerContentDark={hasHeaderSecondaryContentDark}
          onCollapse={onSecondaryColumnCollapse}
        />
      )}

      {hasRightColumn && (
        <RightColumn
          backgroundColor={rightColumnBackgroundColor}
          backgroundImage={rightColumnBackgroundImage}
          collapsed={hasRightColumnCollapsed}
          collapsible={rightColumnCollapsible}
          content={rightContent}
          contentDark={hasRightContentDark}
          headerAltContent={rightColumnHeaderAltContent}
          headerContentDark={hasHeaderRightContentDark}
          onCollapse={onRightColumnCollapse}
          styles={rightColumnStyles}
          width={rightColumnWidth}
        />
      )}

      {hasMainColumn && (
        <MainColumn
          bottomDrawerContent={bottomDrawerContent}
          bottomDrawerTitle={bottomDrawerTitle}
          content={mainContent}
          contentDark={hasMainContentDark}
          headerClassName={headerClassName}
          headerContent={hasHeader && headerContent}
          headerContentDark={hasHeaderContentDark}
          mainClassName={mainClassName}
          rightColumnWidth={hasRightColumn ? rightColumnWidth : undefined}
          showBottomDrawerOnHover={showBottomDrawerOnHover}
        />
      )}
    </>
  );
};
