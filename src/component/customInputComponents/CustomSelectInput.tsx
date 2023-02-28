import {Box, MenuItem, Select, Tooltip, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {SelectInputProps} from "../../interfaces/inputPropTypes";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

function CustomSelectInput({
                             placeholder = "",
                             label,
                             dataList = [],
                             setData,
                             stateName,
                             value: selectedId,
                             multiple = false,
                             required,
                             toolTipText = '',
                             defaultValue = ''
                           }: SelectInputProps) {
  const [value, setValue]: [
        string | number | Array<number | string>,
    Function
  ] = useState(multiple ? ["0"] : "0");

  useEffect(() => {
    setValue(selectedId);
  }, [selectedId]);

  useEffect(() => {
    if (defaultValue)
      setData(stateName, defaultValue);
  }, [defaultValue]);

  const changeHandler = (id: string | number, name: string) => {
    setData(stateName, id, name);
    if (multiple) setValue((state: any) => [...state, id]);
  };
  return (
      <Box textAlign="left">
        <Typography
            sx={{
              fontWeight: 500,
              fontSize: "20px",
              mt: "10px",
              color: "#06283D",
            }}
        >
          {label} {required && <span style={{color: "#ff0000"}}>*</span>}{toolTipText && <Tooltip title={toolTipText}>
          <HelpOutlineOutlinedIcon/>
        </Tooltip>}
        </Typography>
        <Select
            fullWidth
            size="small"
            labelId="demo-select-small"
            id="demo-select-small"
            value={value}
            multiple={multiple}
            sx={{
              mt: "4px",
              borderRadius: "2px",
            }}
            variant={"outlined"}
        >
          <MenuItem value="0">
            <em>{placeholder}</em>
          </MenuItem>
          {dataList.map((d: any) => (
              <MenuItem
                  key={d.id}
                  onClick={() =>
                      changeHandler(
                          d.id,
                          d.name
                      )
                  }
                  value={d.id}
              >
                {d.name}
              </MenuItem>
          ))}
        </Select>
      </Box>
  );
}

export default CustomSelectInput;
