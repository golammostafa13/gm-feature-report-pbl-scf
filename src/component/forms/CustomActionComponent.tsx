import React from 'react';
import {Box} from "@mui/material";
import CustomIcon from "../customIcons/CustomIcon";

function CustomActionComponent({id, }: { id: number | string }) {
  return (
      <Box><CustomIcon iconName={'DocumentView'}/></Box>
  );
}

export default CustomActionComponent;