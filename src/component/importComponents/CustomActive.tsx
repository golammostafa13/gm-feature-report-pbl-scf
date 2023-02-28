import { Box } from "@mui/material";
import React, { ReactNode } from "react";

function CustomActive({
  children,
  status,
  lActive = false,
}: {
  children: ReactNode;
  status: boolean;
  lActive: boolean;
}) {
  if (status)
    return (
      <Box
        sx={{
          background:'#06283D',
          color:'white',
          borderWidth: "1px",
          borderStyle: lActive
            ? `solid none none solid`
            : `solid solid none none`,
        }}
      >
        {children}
      </Box>
    );
  return (
    <Box
      sx={{
        borderColor: "#256D85",
        borderWidth: "1px",
        borderStyle: lActive
          ? "none none solid solid"
          : "none solid solid none",
      }}
    >
      {children}
    </Box>
  );
}

export default CustomActive;
