import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomRow from "./CustomRow";
import CustomIcon from "../customIcons/CustomIcon";
import {Box} from "@mui/material";
import {ReactNode} from "react";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    fontSize: '24px',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function CustomTable({
                       listControllerArray,
                       tableData,
                       action,
                       actionFieldName = "Action",
                       idStateName = 'id'
                     }: { listControllerArray: any, tableData: any, action?: any, actionFieldName?: string, idStateName?: string }) {

  return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 700}} aria-label="customized table">
            <TableHead>
              <TableRow>
                {listControllerArray.tableHeading.map((h: string, i: number) =>
                    <StyledTableCell key={i}>{h}</StyledTableCell>
                )}
                {actionFieldName && <StyledTableCell align="right">{actionFieldName}</StyledTableCell>}
              </TableRow>
            </TableHead>
            <TableBody
            >
              {tableData?.map((row: any, i: number) => (
                  <CustomRow
                      idStateName={idStateName}
                      key={i}
                      rowFields={listControllerArray.rowFieldsName}
                      row={row}
                      actionFieldName={actionFieldName}
                      // @ts-ignore
                      action={action}
                  ></CustomRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
  );
}

export default CustomTable;
