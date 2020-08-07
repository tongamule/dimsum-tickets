import React, { useState, useRef, useEffect } from 'react';
import {
  TreeView,
  SelectablePluginTree,
  // TreeDndPlugin,
  // TreeToolbarPlugin
} from '@elliemae/ds-treeview';
import Folder from '@elliemae/ds-icons/Folder';
import FilePdf from '@elliemae/ds-icons/FilePdf';
import { deepNodes } from './nodes';
// import { TooltipTextProvider } from "@elliemae/ds-basic/TruncatedTooltipText";
// import renderToolbar from "./renderToolbar";

const onItemClick = (item) => {
  console.log(111, item);
};

const Overview = () => {
  const [data, setData] = useState(deepNodes);
  const ref = useRef(null);

  const expandAll = () => {
    const toggleExpandAll = ref.current.actions.toggleExpandAll;
    console.log('REF', ref.current);
    if (toggleExpandAll) toggleExpandAll();
  };

  useEffect(() => {
    expandAll();
  }, []);

  return (
    <TreeView
      data={data}
      fluid
      instanceRef={ref}
      groupIcon={<Folder />}
      isSingleSelect
      itemIcon={<FilePdf />}
      // labelRenderer={value => value}
      // onOrderChange={setData}
      onItemClick={onItemClick}
      plugins={[SelectablePluginTree]}
      // renderToolbar={renderToolbar}
      showChildrenAmount
      // sortable
      // width={400}
    />
  );
};

export default Overview;
