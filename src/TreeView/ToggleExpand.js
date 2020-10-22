import React, { useRef, useState, useEffect } from 'react';
import {
  TreeView,
  SelectablePluginTree,
  SearchableTreePlugin,
} from '@elliemae/ds-treeview';
import Folder from '@elliemae/ds-icons/Folder';
import FilePdf from '@elliemae/ds-icons/FilePdf';
import { TreeToolbar } from '../components/TreeToolbar';
import { randomEntitiesMoreGroups } from '../utils/randomTreeNodes';
import { TreeContainer } from '../components/TreeContainer';
// import { SearchableTreePlugin } from './SearchableTreePlugin';

const nodes = randomEntitiesMoreGroups(100);

const ToggleExpand = (props) => {
  const instanceRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleExpandAll = () => {
    instanceRef.current.actions.toggleExpandAll();
  };

  useEffect(() => {
    toggleExpandAll();
    return () => {}; // fixes modal error
  }, []);

  return (
    <TreeContainer offsetHeight={48}>
      <div style={{ height: '100%' }}>
        <TreeToolbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          toggleExpandAll={toggleExpandAll}
        />
        <TreeView
          data={nodes}
          fluid
          groupIcon={<Folder />}
          instanceRef={instanceRef}
          isMultiSelect
          itemIcon={<FilePdf />}
          plugins={[SelectablePluginTree, SearchableTreePlugin]}
          searchQuery={searchQuery}
          showChildrenAmount
          {...props}
        />
      </div>
    </TreeContainer>
  );
};

export default ToggleExpand;
