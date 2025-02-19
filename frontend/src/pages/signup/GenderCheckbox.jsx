import React from 'react'

const GenderCheckbox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${ selectedGender === "male" ? "selected" : "" }`}>
                <span className='label-text'>Male</span>
                <input type="checkbox" className='checkbox  checkbox-success border-slate-900'
                    checked={selectedGender === 'male'}
                    onChange={() =>onCheckBoxChange("male")}
                />
            </label>
        </div>
        <div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : "" }`}>
                <span className='label-text'>Female</span>
                <input type="checkbox" className='checkbox checkbox-success border-slate-900'
                    checked={selectedGender === 'female'}
                    onChange={() =>onCheckBoxChange("female")}
                />
            </label>
        </div>
        </div>
      
    </div>
  )
}

export default GenderCheckbox;
