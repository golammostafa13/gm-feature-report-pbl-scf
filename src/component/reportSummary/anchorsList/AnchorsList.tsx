/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../shared/formatData';
import { styled } from '@mui/material/styles';

function content(row: any, navigate: any){

  const CustomizedTableCell = styled(TableCell)`
    :hover {
      color: #2e8b57;
      background: #cef6fd;
    }
  `;
  let lineStyle = {
    fontWeight: 'bolder',
    cursor: 'pointer'
  };

  const onNavigate = (param: string) => {
    navigate(`/report-summary/${param}`)
  }

  const { anchor, anchor_limit, gross_availability, live_invoice, total_outstanding, net_fund_fvailability, eligibility } = row;

  return (
    <TableRow
      key={anchor}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      hover
    >
      <CustomizedTableCell 
        align="center" 
        component="th" 
        scope="row" 
        style={lineStyle} 
        onClick={() => onNavigate(`${anchor.toLowerCase()}`)}
        >
        {anchor}
      </CustomizedTableCell>
      <TableCell align="center">{ formatNumber(anchor_limit) }</TableCell>
      <TableCell align="center">{ formatNumber(live_invoice) }</TableCell>
      <TableCell align="center">{ formatNumber(gross_availability) }</TableCell>
      <TableCell align="center">{ formatNumber(total_outstanding) }</TableCell>
      <TableCell align="center">{ formatNumber(net_fund_fvailability) }</TableCell>
      <TableCell align="center">{ eligibility }</TableCell>
    </TableRow>
  )
}

export default function AnchorsList({ data }: {data: any[]}) {

  let tAnchorLimit = 100000000;
  let tOutstanding = 0;
  let tGrossAvailability = 0;
  let tNetFundAvailability = 0;
  let tLiveInvoice = 0;
  const navigate = useNavigate();
  const [totalGrossAvailability, setTotalGrossAvailability] = useState(0);
  const [totalOutstanding, setTotalOutstanding] = useState(0);
  const [totalNetFundAvailability, setTotalNetFundAvailability] = useState(0);
  const [totalLiveInvoice, setTotalLiveInvoice] = useState(0);

  useEffect(() => {
    data.forEach((row) => {
      tGrossAvailability = tGrossAvailability + Number(row?.gross_availability);
      tOutstanding = tOutstanding + Number(row?.total_outstanding);
      tNetFundAvailability = tNetFundAvailability + Number(row?.net_fund_fvailability);
      tLiveInvoice = tLiveInvoice + Number(row?.live_invoice);
    });
    setTotalGrossAvailability(tGrossAvailability);
    setTotalOutstanding(tOutstanding);
    setTotalNetFundAvailability(tNetFundAvailability);
    setTotalLiveInvoice(tLiveInvoice);
  }, [data])
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor: '#dff6fd', borderTop: '1px solid gray', boxShadow: '0 0 2px 1px gray'}}>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Particulars</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Maximum Limit</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">TSLB</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Gross Availability</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Total Outstanding</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Net Fund Availability</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Eligibility</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>          
          {
            data && data.map((row) => content(row, navigate))
          }
        </TableBody>
        <TableRow
          key={1}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell 
            align="center" 
            component="th" 
            scope="row"
            style={{fontWeight: 'bolder'}} 
            >
            {"TOTAL"}
          </TableCell>
          <TableCell style={{fontWeight: 'bolder'}} align="center">{ formatNumber(tAnchorLimit) }</TableCell>
          <TableCell style={{fontWeight: 'bolder'}} align="center">{ formatNumber(totalLiveInvoice) }</TableCell>
          <TableCell style={{fontWeight: 'bolder'}} align="center">{ formatNumber(totalGrossAvailability) }</TableCell>
          <TableCell style={{fontWeight: 'bolder'}} align="center">{ formatNumber(totalOutstanding) }</TableCell>
          <TableCell style={{fontWeight: 'bolder'}} align="center">{ formatNumber(totalNetFundAvailability) }</TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
}
