import React from 'react';
import CustomTextInput from "./CustomTextInput";
import CustomSelectInput from "./CustomSelectInput";

function CustomInput(props: any) {
  const {inputType} = props
  if (inputType === 'select')
    return <CustomSelectInput {...props}/>
  return (
      <CustomTextInput {...props} />
  );
}

export default CustomInput;