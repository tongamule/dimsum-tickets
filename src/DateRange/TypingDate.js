import React, { useState } from 'react';
import DSDateRangePicker from '@elliemae/ds-date-range-picker';

// PUI-4561
const TypingDate = () => {
  const [[startDate, endDate], setDates] = useState([null, null]);
  const updateDates = (startDate, endDate) => {
    const newDates = [startDate, endDate];
    console.log(
      'Updating date range:',
      newDates.map((d) => d.format('MM/DD/YYY')),
    );
    setDates(newDates);
  };
  return (
    <>
      <p>
        Clear fields and type date values. Console should log new
        values but 'onDatesChange' is not called.
      </p>
      <DSDateRangePicker
        firstDayOfWeek={0}
        isOutsideRange={false}
        keepOpenOnDateSelect={false}
        screenReaderInputMessage="Select date"
        transitionDuration={0}
        verticalSpacing={0}
        startDate={startDate}
        endDate={endDate}
        onDatesChange={updateDates}
      />
    </>
  );
};

export default TypingDate;
