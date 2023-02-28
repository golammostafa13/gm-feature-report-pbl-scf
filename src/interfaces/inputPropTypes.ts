export interface CommonInputProps {
  label: string,
  required?: boolean,
  toolTipText?: string,
  disabled?: boolean,
  setData: Function,
  stateName: string,
  value: any,
  placeholder?: string
}

export interface SelectInputProps extends CommonInputProps {
  dataList: any
  field_prefix?: string
  idPrefix?: string
  multiple?: boolean
  defaultValue?: string
}

export interface TextInputProps extends CommonInputProps {
  inputType?: string
  helperText?: any
}

export interface CheckboxInputProps extends CommonInputProps {
  checked: boolean
}