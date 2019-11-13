import React, { useState, useEffect } from 'react';
import '../styles/SelectDocuments.scss';
import '../styles/Button.scss';

function SelectDocuments() {
  const [selectedValues, setSelectedValues] = useState({
    drivingLicense: false,
    nationalID: false,
    biometric: false
  });

  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleRadioChange = (e) => {
    const radioButtonName = e.target.value;
    setSelectedValues(selectedValues => {
      const newSelectedValues = { ...selectedValues };
      newSelectedValues[radioButtonName] = !newSelectedValues[radioButtonName];
      return {...newSelectedValues}
    })
  }

  useEffect(() => {
    let checkedBoxes = 0;
    Object.values(selectedValues).map(selectedValue => {
      if (selectedValue) {
        checkedBoxes++
      }

      return checkedBoxes;
    })

    if (checkedBoxes > 1 && checkedBoxes < 3) {
      setSubmitDisabled(!submitDisabled);
    } else {
      setSubmitDisabled(true);
    }
  }, [selectedValues])

  return (
    <form className="select-documents">
      <label>
        <input type="checkbox" value="drivingLicense" checked={selectedValues.drivingLicense} onChange={handleRadioChange} />
        Driving license
      </label>
      <label>
        <input type="checkbox" value="nationalID" checked={selectedValues.nationalID} onChange={handleRadioChange} />
        National ID
      </label>
      <label>
        <input type="checkbox" value="biometric" checked={selectedValues.biometric} onChange={handleRadioChange} />
        Biometric
      </label>
      <button className="button button--submit" type="submit" disabled={submitDisabled}>Proceed with selected docs</button>
    </form>
  )
};

export default SelectDocuments;