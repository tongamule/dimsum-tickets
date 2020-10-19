import React, { useState } from 'react';
import SearchBox from '@elliemae/ds-basic/form/SearchBox';
import DSToolbar from '@elliemae/ds-basic/Toolbar';
import DSSeparator from '@elliemae/ds-basic/Separator';
import DSButton from '@elliemae/ds-basic/Button';

import DSDropdownMenu from '@elliemae/ds-dropdownmenu';
import MoreOptionsVert from '@elliemae/ds-icons/MoreOptionsVert';
import { DSIconSizes } from '@elliemae/ds-basic/Icon';

const getOptions = (toggleExpandAll) => [
  {
    id: 'toggle-expand-collapse',
    label: 'Expand All / Collapse All',
    onClick: toggleExpandAll,
  },
];
const EllipsisMenu = ({ toggleExpandAll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOptionsClick = () => setIsOpen((isOpen) => !isOpen);
  return (
    <DSDropdownMenu
      containerProps={{ id: 'tree-options-dropdown' }}
      isOpen={isOpen}
      onClickOutsideMenu={onOptionsClick}
      options={getOptions(toggleExpandAll)}
      triggerComponent={
        <DSButton
          buttonType="link"
          icon={<MoreOptionsVert size={DSIconSizes.M} />}
          onClick={onOptionsClick}
        />
      }
    />
  );
};

export const TreeToolbar = ({
  searchQuery,
  setSearchQuery,
  toggleExpandAll,
}) => {
  return (
    <>
      <DSToolbar withDepth={false}>
        <SearchBox
          clearable
          containerProps={{ 'data-testid': 'tree-searchbox' }}
          onSearch={({ value }) => setSearchQuery(value)}
          placeholder="Search all"
          searchOnEnter={false}
          value={searchQuery}
        />
        <EllipsisMenu toggleExpandAll={toggleExpandAll} />
      </DSToolbar>
      <DSSeparator
        margin="none"
        orientation="horizontal"
        type="non-form"
      />
    </>
  );
};
