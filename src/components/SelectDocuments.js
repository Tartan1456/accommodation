import React, { useState, useEffect } from 'react';
import '../styles/SelectDocuments.scss';

function SelectDocuments() {
  const [selectedValues, setSelectedValues] = useState({
    drivingLicense: false,
    nationalID: false,
    biometric: false
  });

  const handleRadioChange = (e) => {
    console.log('yeet')
    const radioButtonName = e.target.value;
    setSelectedValues(selectedValues => selectedValues.radioButtonName = !selectedValues.radioButtonName)
  } 

  return (
    <form className="select-documents">
      <label>
        <input type="radio" value="drivingLicense" checked={selectedValues.drivingLicense} onChange={handleRadioChange} />
        Driving license
      </label>
      <label>
        <input type="radio" value="nationalID" checked={selectedValues.nationalID} onChange={handleRadioChange} />
        National ID
      </label>
      <label>
        <input type="radio" value="biometric" checked={selectedValues.biometric} onChange={handleRadioChange} />
        Biometric
      </label>
    </form>
  )
};

export default SelectDocuments;