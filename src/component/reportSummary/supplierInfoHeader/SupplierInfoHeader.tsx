import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { formatNumber } from '../shared/formatData';

function createData(
  key: string,
  value: string
) {
  return { key, value };
}

export default function SupplierInfoHeader({ data }: {data: any[]}) {

  let rows: any[] = [];

  if (data[0]?.anchor !== 'BERGER' && data[0]?.anchor !== 'PRAN-RFL' && data[0]?.anchor !== 'SKF'){
    const { name, code } = data[0];
    rows = [
      createData('Name of the Supplier', name),
      createData('CID', code),
      createData('OD A/C No:', '21022244487'),
      createData('Accrued Interest', '-'),
    ];
  } else {
    const { anchor, anchor_limit, gross_availability, code, total_outstanding, net_fund_fvailability } = data[0];
    rows = [
      createData('Detor Name', anchor),
      createData('Detor ID', code),
      createData('Maximum Limit:', formatNumber(anchor_limit)),
      createData('Gross Availbility', formatNumber(gross_availability)),
      createData('Total Outstanding Amount', formatNumber(total_outstanding)),
      createData('Net Fund Availability', formatNumber(net_fund_fvailability)),
    ];
  }
  return (
    <TableContainer component={Paper} style={{marginTop: '1.5rem'}}>
      <Table sx={{ maxWidth: 650, borderTop: '1px solid gray', borderRight: '1px solid gray' }} aria-label="simple table">
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" align='center' scope="row" style={{backgroundColor: '#cff6fd', fontWeight: '600'}}>
                {row.key}
              </TableCell>
              <TableCell align="center" style={{fontWeight: '600'}}>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}