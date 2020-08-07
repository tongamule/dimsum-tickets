import { v4 as uuidv4 } from 'uuid';

const getNode = ({ children = [], ...rest }) => ({
  id: uuidv4(),
  name: `${children.length ? 'Group' : 'Child'}`,
  children,
  ...rest,
});

export default [
  {
    id: '4548a528-a0b2-4ee5-8fb3-94628e3320a6',
    name: 'Test123 (1)',
    type: 'task',
    parent: 'fd28f6e5-d055-4ed8-b3f1-a4c2473876a4',
    children: [
      {
        id: '4548a528-a0b2-4e44-8fb3-94628e3320a6',
        name: 'Child 1 (1)',
        type: 'task',
        parent: 'fd28f6e5-d055-4ed8-b3f1-a4c2473876a4',
        children: [],
      },
      {
        id: '0ba3e4bb-bce5-4c33-aafc-2f79670ac3b6',
        name: 'Child 2 (1)',
        type: 'task',
        parent: 'fd28f6e5-d055-4ed8-b3f1-a4c2473876a4',
        children: [],
      },
    ],
  },
  {
    id: '0ba3e4bb-bce5-4c3c-aafc-2f79670ac3b6',
    name: 'Test (1)',
    type: 'task',
    parent: 'fd28f6e5-d055-4ed8-b3f1-a4c2473876a4',
    children: [],
  },
];

export const deepNodes = [
  getNode({
    children: [
      getNode({ children: [] }),
      getNode({ children: [] }),
      getNode({ children: [] }),
    ],
  }),
  getNode({
    children: [
      getNode({
        children: [
          getNode({
            children: [
              getNode({ children: [] }),
              getNode({ children: [] }),
            ],
          }),
          getNode({
            children: [getNode({ children: [] })],
          }),
        ],
      }),
      getNode({
        children: [
          getNode({
            children: [
              getNode({ children: [] }),
              getNode({ children: [] }),
              getNode({ children: [] }),
            ],
          }),
          getNode({
            children: [getNode({ children: [] })],
          }),
        ],
      }),
      getNode({ children: [] }),
    ],
  }),
];
