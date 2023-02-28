import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function CustomRow({
                     row,
                     action,
                     rowFields,
                     actionFieldName,
                     idStateName
                   }: { row: any, action: any, rowFields: string[], actionFieldName: string, idStateName: string }) {
  return (
      <TableRow>
        {rowFields.map((f: string, i: number) => <StyledTableCell key={i}>{row[f]}</StyledTableCell>)}
        {actionFieldName && <StyledTableCell align="right">{action(row[idStateName])}</StyledTableCell>}
      </TableRow>
  );
}

export default CustomRow;
