import React from 'react';
import { randomEntities } from '../utils/randomTreeNodes';
import ToggleExpand from './ToggleExpand';

const rows = 12000;
const nodes = randomEntities(rows);

const LotsOfElements = () => <ToggleExpand data={nodes} />;

export default LotsOfElements;
