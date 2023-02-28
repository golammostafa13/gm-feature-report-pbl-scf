import {Box, TextField, Tooltip, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {TextInputProps} from "../../interfaces/inputPropTypes";
import {inputFieldDesign, inputFieldLabelDesign} from "../../theme/customStyles/formStyles";
import styled from "@emotion/styled";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const CssTextField = styled(TextField)(inputFieldDesign);

function CustomTextInput({
                           placeholder = '',
                           label,
                           setData,
                           stateName,
                           inputType = 'text',
                           value: prevValue,
                           toolTipText = '',
                           required = false, disabled
                         }: TextInputProps) {
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (val: string) => {
    setData(stateName, val)
  }

  return (
      <Box textAlign='left'>
        <Typography sx={inputFieldLabelDesign}>{label} {required &&
            <span style={{color: '#ff0000'}}>*</span>}{toolTipText && <Tooltip title={toolTipText}>
          <HelpOutlineOutlinedIcon/>
        </Tooltip>} </Typography>
        <CssTextField
            disabled={disabled}
            onBlur={e => handleChange(e.target.value)}
            value={prevValue}
            type={inputType}
            onChange={e => handleChange(e.target.value)}
            // @ts-ignore
            onWheel={(e) => e.target.blur()}
            fullWidth
            error={!!errorMessage}
            variant='outlined'
            size='small'
            placeholder={placeholder}
            helperText={errorMessage}
        />
      </Box>
  );
}

export default CustomTextInput;
