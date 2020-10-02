import React, { useState, useRef, useEffect } from "react";
import {
  TreeView,
  SelectablePluginTree,
  TreeDndPlugin,
} from "@elliemae/ds-treeview";
import Folder from "@elliemae/ds-icons/Folder";
import FilePdf from "@elliemae/ds-icons/FilePdf";
import { getDeepNodes } from './nodes';

const nodes = [
  ...getDeepNodes(),
  ...getDeepNodes(),
  ...getDeepNodes(),
  ...getDeepNodes(),
  ...getDeepNodes(),
]

const onItemClick = item => {
  console.log(111, item);
};

const Overview = () => {
  const [data, setData] = useState(nodes);
  const ref = useRef(null);

  const expandAll = () => {
    const toggleExpandAll = ref.current.actions.toggleExpandAll;
    if (toggleExpandAll) toggleExpandAll()
  }

  useEffect(() => {
    expandAll();
  }, []);

  const onOrderChange = (data, ...rest) => {
    console.log('Reordering tree. New data:', data);
    console.log('Other dnd params:', rest);
    setData(data)
  }
  return (
    <TreeView
      data={data}
      fluid
      instanceRef={ref}
      groupIcon={<Folder />}
      itemIcon={<FilePdf />}
      onOrderChange={onOrderChange}
      onItemClick={onItemClick}
      plugins={[SelectablePluginTree, TreeDndPlugin]}
      restrictDragAndDrop
    />
  );
};

export default Overview;
