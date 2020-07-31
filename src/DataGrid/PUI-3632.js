import React from 'react';
import { DSDataGrid } from '@elliemae/ds-datagrids';
import DSToolbar, { ToolbarItem } from '@elliemae/ds-basic/Toolbar';
import EditPencil from '@elliemae/ds-icons/EditPencil';
import Delete from '@elliemae/ds-icons/Delete';

const columns = [
  {
    property: 'rank',
    label: 'ORDER',
    visible: true,
    resizable: true,
    width: '10%',
  },
  {
    property: 'type',
    label: 'CODE ID',
    visible: true,
    resizable: true,
    width: '10%',
  },
  {
    property: 'description',
    label: 'DESCRIPTION',
    visible: true,
    resizable: true,
    width: '50%',
  },
  {
    property: 'category',
    label: 'TYPE',
    visible: true,
    resizable: true,
    width: '10%',
    valueTransformation: (val = 'Regular') => val,
  },
  {
    property: 'autoCreate',
    label: 'ALWAYS CREATE WHEN PARENT IS CREATED',
    visible: true,
    resizable: true,
    valueTransformation: (val) => {
      return val ? 'Yes' : 'No';
    },
  },
];

const rows = [
  {
    id: 'b74c3f76-f423-4250-9c0f-bcf18c4f11ce',
    type: 'Test2907_Subtask_07',
    description: 'Test2907_Subtask_07',
    rank: 1,
    required: true,
    autoCreate: true,
    category: 'Regular',
  },
  {
    id: 'cd8e30f6-8fd0-467f-a381-921a50c78ac1',
    type: 'Test2907_Subtask_06',
    description: 'Test2907_Subtask_06',
    rank: 2,
    required: true,
    autoCreate: true,
    category: 'Regular',
  },
  {
    id: '55354a3b-2c34-43a8-ba99-006669144233',
    type: 'Test2907_Subtask_08',
    description: 'Test2907_Subtask_08',
    rank: 3,
    required: true,
    autoCreate: true,
    category: 'Regular',
  },
  {
    id: '20838a49-902e-44fc-8f1a-d025a428d22c',
    type: 'Test2907_Subtask_01',
    description: 'Test2907_Subtask_01',
    rank: 4,
    required: true,
    autoCreate: true,
    category: 'Regular',
  },
  {
    id: '38e7ea89-d32d-44ee-bbcc-1080b8f4ba1e',
    type: 'Test2907_Subtask_02',
    description: 'Test2907_Subtask_02',
    rank: 5,
    required: true,
    autoCreate: true,
    category: 'Regular',
  },
  {
    id: '298d1a73-bb25-4d5a-9159-883b67e26dcb',
    type: 'Test2907_Subtask_03',
    description: 'Test2907_Subtask_03',
    rank: 6,
    required: true,
    autoCreate: true,
    category: 'Regular',
  },
  {
    id: '6388e9d8-ace6-4082-8faf-d740b4e55ee1',
    type: 'Test2907_Subtask_04',
    description: 'Test2907_Subtask_04',
    rank: 7,
    required: true,
    autoCreate: true,
    category: 'Regular',
  },
  {
    id: 'dc2c1efb-f1f4-4110-85e4-97f0846fdb99',
    type: 'Test2907_Subtask_05',
    description: 'Test2907_Subtask_05',
    rank: 8,
    required: true,
    autoCreate: true,
    category: 'Regular',
  },
];

export default () => {
  const handleDragAndDropRows = ({ fromIndex, targetIndex }) => {
    console.log('onMoveRowEnd::fromIndex', fromIndex);
    console.log('onMoveRowEnd::targetIndex', targetIndex);
  };

  return (
    <DSDataGrid
      key={rows.length} // Fix dimsum not updating toolbar items onClick functions
      columns={columns}
      dragAndDropRows
      onMoveRowEnd={handleDragAndDropRows}
      renderToolbar={({ rowData }) => (
        <DSToolbar
          containerProps={{
            'data-testid': 'subtasklist-grid-toolbar',
          }}
          withDepth
        >
          <ToolbarItem
            icon={
              <Delete
                containerProps={{
                  'data-testid': 'subtasklist-grid-delete',
                }}
              />
            }
            onClick={console.log('Delete')}
          />
          <ToolbarItem
            icon={
              <EditPencil
                containerProps={{
                  'data-testid': 'subtasklist-grid-edit',
                }}
              />
            }
            onClick={() => console.log('Task edit')}
          />
        </DSToolbar>
      )}
      resizeableColumns
      rows={rows}
      sortable
    />
  );
};
