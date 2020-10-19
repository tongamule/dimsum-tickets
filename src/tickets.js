import { getEndpoint } from './utils/strings';

const getDefaults = (path) => ({
  id: path,
  name: getEndpoint(path),
  type: 'ticket',
  children: [],
});

export default [
  {
    ...getDefaults('ComboBox'),
    type: 'group',
    children: [getDefaults('ComboBox/Bottom')],
  },
  {
    ...getDefaults('DataGrid'),
    type: 'group',
    children: [
      getDefaults('DataGrid/Overview'),
      getDefaults('DataGrid/PUI-2089'),
      getDefaults('DataGrid/PUI-2090'),
      getDefaults('DataGrid/PUI-2098'),
      getDefaults('DataGrid/PUI-2512'),
      getDefaults('DataGrid/PUI-2604'),
      getDefaults('DataGrid/PUI-3317'),
      getDefaults('DataGrid/ToolbarIssues'),
      getDefaults('DataGrid/WithToggles'),
      getDefaults('DataGrid/PUI-4239'),
      getDefaults('DataGrid/WithGroups'),
    ],
  },
  {
    ...getDefaults('DateTimePicker'),
    type: 'group',
    children: [
      getDefaults('DateTimePicker/PUI-3728'),
      getDefaults('DateTimePicker/PUI-3880'),
      getDefaults('DateTimePicker/PUI-3993'),
    ],
  },
  {
    ...getDefaults('Date'),
    type: 'group',
    children: [getDefaults('Date/PUI-4076')],
  },
  {
    ...getDefaults('DateRange'),
    type: 'group',
    children: [getDefaults('DateRange/TypingDate')],
  },
  {
    ...getDefaults('TextBox'),
    type: 'group',
    children: [getDefaults('TextBox/example')],
  },
  {
    ...getDefaults('FormItemLayout'),
    type: 'group',
    children: [
      getDefaults('FormItemLayout/LargeInputText'),
      getDefaults('FormItemLayout/ComboBox2_Bottom'),
    ],
  },
  {
    ...getDefaults('PageHeader'),
    type: 'group',
    children: [
      getDefaults('PageHeader/PUI-2920'),
      getDefaults('PageHeader/PUI-2976'),
    ],
  },
  {
    ...getDefaults('Toggle'),
    type: 'group',
    children: [getDefaults('Toggle/Overview')],
  },
  {
    ...getDefaults('TooltipTextProvider'),
    type: 'group',
    children: [getDefaults('TooltipTextProvider/PUI-2468')],
  },
  {
    ...getDefaults('TreeView'),
    type: 'group',
    children: [
      getDefaults('TreeView/Overview'),
      getDefaults('TreeView/PUI-2579'),
      getDefaults('TreeView/PUI-2690-B'),
      getDefaults('TreeView/PUI-2690'),
      getDefaults('TreeView/PUI-4504'),
      getDefaults('TreeView/MultiSelect'),
      getDefaults('TreeView/SingleSelect'),
      getDefaults('TreeView/LotsOfData'),
      getDefaults('TreeView/ToggleExpand'),
      getDefaults('TreeView/DragAndDrop'),
      {
        ...getDefaults('InModal'),
        type: 'group',
        children: [
          getDefaults('TreeView/InModal/ToggleExpand'),
          getDefaults('TreeView/InModal/InitialSelections'),
        ],
      },
      {
        ...getDefaults('AutoScroll'),
        type: 'group',
        children: [
          getDefaults('TreeView/AutoScroll/Overview'),
          getDefaults('TreeView/AutoScroll/SingleSelect'),
          getDefaults('TreeView/AutoScroll/MultiSelect'),
        ],
      },
      getDefaults('TreeView/Highlighted'),
    ],
  },
  {
    ...getDefaults('Shuttle'),
    type: 'group',
    children: [getDefaults('Shuttle/Overview')],
  },
  {
    ...getDefaults('SearchBox'),
    type: 'group',
    children: [getDefaults('SearchBox/PUI-3638')],
  },
  {
    ...getDefaults('Grid'),
    type: 'group',
    children: [getDefaults('Grid/Overview')],
  },
];
