import {Checkbox, FormControlLabel} from "@mui/material";

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {CheckboxInputProps} from "../../interfaces/inputPropTypes";

function CustomCheckBoxInput({label, setData, stateName, value, checked}: CheckboxInputProps) {
    const handleChange = (data: boolean) => {
        if (data) {
            setData((state: any) => ({...state, [stateName]: [...state[stateName], value]}))
        } else {
            setData((state: any) => {
                const newSelectedList = state[stateName].filter((d: string | number) => d !== value)
                return {
                    ...state, [stateName]:newSelectedList
                }
            })

        }
    }
    return (
        <>
            <FormControlLabel
                control={
                    <Checkbox
                        value={value}
                        checked={checked}
                        onChange={e => handleChange(e.target.checked)}
                        icon={<RadioButtonUncheckedIcon/>}
                        checkedIcon={<CheckCircleOutlineIcon/>}
                    />
                }
                label={label}
            />
        </>
    );
}

export default CustomCheckBoxInput;