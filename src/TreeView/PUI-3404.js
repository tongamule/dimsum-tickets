import React, { useState, useRef, useEffect, useCallback } from 'react';
import DSModal, { MODAL_TYPE_V2 } from '@elliemae/ds-modal';
import {
  TreeView,
  SelectablePluginTree,
  // TreeDndPlugin,
  // TreeToolbarPlugin
} from '@elliemae/ds-treeview';
import Folder from '@elliemae/ds-icons/Folder';
import FilePdf from '@elliemae/ds-icons/FilePdf';
// import { TooltipTextProvider } from "@elliemae/ds-basic/TruncatedTooltipText";
// import renderToolbar from "./renderToolbar";
import styled from 'styled-components';
import DSDropdownMenu from '@elliemae/ds-dropdownmenu';
import DSButton from '@elliemae/ds-basic/Button';
import MoreOptionsVert from '@elliemae/ds-icons/MoreOptionsVert';
import { DSIconColors } from '@elliemae/ds-basic/dsicon';
import { TooltipTextProvider } from '@elliemae/ds-basic/TruncatedTooltipText';

const node = {
  id: 'fd28f6e5-d055-4ed8-b3f1-a4c2473876a4',
  name: 'BridgeServices_RegressionSuite_QA (2)',
  type: 'taskgroup',
  parent: undefined,
  children: [
    {
      id: '4548a528-a0b2-4ee5-8fb3-94628e3320a6',
      name: 'Test123 (1)',
      type: 'task',
      parent: 'fd28f6e5-d055-4ed8-b3f1-a4c2473876a4',
      children: [],
    },
    {
      id: '0ba3e4bb-bce5-4c3c-aafc-2f79670ac3b6',
      name: 'Test (1)',
      type: 'task',
      parent: 'fd28f6e5-d055-4ed8-b3f1-a4c2473876a4',
      children: [],
    },
  ],
};

const getModalTitleProps = (props) =>
  props.modalType === MODAL_TYPE_V2.DECISION
    ? `.em-ds-modal-v2__modal-title {
      font-weight: bold;
    }`
    : '';

const StyledModal = styled(DSModal)`
${getModalTitleProps}
.em-ds-modal-v2__modal-feedback--warning .em-ds-icon {
  color: #fbb431;
}
`;

const Toolbar = styled.div`
  display: grid;
  grid-template-columns: auto 1rem;
  align-items: center;
`;

const TreeViewContainer = styled.div`
  overflow-y: auto;
  height: ${(props) => props.height || '100%'};
`;

const onItemClick = (item) => {
  console.log(111, item);
};

const getOptions = (toggleExpandAll) => [
  {
    id: 'toggle-expand-collapse',
    label: 'Expand All / Collapse All',
    onClick: toggleExpandAll,
  },
];

const Overview = () => {
  const [data] = useState(node.children);
  const ref = useRef(null);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const expandAll = () => {
    const toggleExpandAll = ref.current && ref.current.actions.toggleExpandAll;
    if (toggleExpandAll) toggleExpandAll()
  }

  useEffect(() => {
    expandAll();
  }, []);
  /* const handleSearch = useCallback(({ value }) => setSearchQuery(value), [
    setSearchQuery,
  ]); */
  const onOptionsClick = useCallback(() => setIsOptionsOpen(!isOptionsOpen), [
    isOptionsOpen,
  ]);

  const open = () => setModalIsOpen(true);
  const close = () => setModalIsOpen(false);
  const toggleExpand = () => {
    expandAll();
    setIsOptionsOpen(false);
  };
  
  return (
    <>
      <div style={{ padding: '2rem 0' }}>
        <DSButton labelText='Open modal' onClick={open} />
      </div>
      <StyledModal
      version={2}
      modalType={MODAL_TYPE_V2.FORM}
      centered
      shouldCloseOnOverlayClick
      showClose
      appElement="#root"
      modalTitle="PUI-3404"
      isOpen={modalIsOpen}
      onConfirm={close}
      >
        <TooltipTextProvider>
          <Toolbar space="xxs" t="0">
            <span>Select Tasks</span>
            <DSDropdownMenu
              containerProps={{ id: 'tree-options-dropdown' }}
              isOpen={isOptionsOpen}
              onClickOutsideMenu={onOptionsClick}
              options={getOptions(toggleExpand)}
              triggerComponent={
                <DSButton
                  buttonType="link"
                  icon={<MoreOptionsVert color={DSIconColors.PRIMARY} />}
                  onClick={onOptionsClick}
                />
              }
            />
          </Toolbar>
          <TreeViewContainer height="400px">
            <TreeView
            data={data}
            fluid
            instanceRef={ref}
            groupIcon={<Folder />}
            // isMultiSelect
            itemIcon={<FilePdf />}
            // labelRenderer={value => value}
            // onOrderChange={setData}
            onItemClick={onItemClick}
            plugins={[SelectablePluginTree]}
            // renderToolbar={renderToolbar}
            // showChildrenAmount
            // sortable
            // width={400}
            />
          </TreeViewContainer>
        </TooltipTextProvider>
      </StyledModal>
    </>
    );
  };
  
  export default Overview;
  