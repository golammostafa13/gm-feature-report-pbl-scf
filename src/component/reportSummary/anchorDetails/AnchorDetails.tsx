import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import moment from "moment";
import { formatNumber } from '../shared/formatData';
import { baseURL } from '../utils';

const url: string = `${baseURL}/api/report/statement-of-outstanding-invoices`;

const convertReadableDateFormat = (date: string) => {
    if (!date) return null;
    return moment(date).utc().format('DD-MM-YYYY');
}

const totalAmountFormat = (stringNumber: string) => {
    return Number(stringNumber);
}

function content(row: any, sl_no: number){
  const { 
    invoice_number, 
    invoice_date, 
    maturity_date, 
    settled_invoice, 
    submitted_invoice,
    overdue_amount, 
    live_invoice, 
    max_allowable_dis_amount_invoice, 
    total_disbursement, 
    total_outstanding_amount, 
    penal_charge, 
    days_overdue, 
    collection_date, 
    collection_amount,
    invoice_disburement_value,
    invoice_processing_fees
    } = row;
    
  return (
    <TableRow
      key={sl_no}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      hover
    >
      <TableCell  align="center">{sl_no + 1}</TableCell>
      <TableCell  align="center">{invoice_number}</TableCell>
      <TableCell  align="center">{convertReadableDateFormat(invoice_date)}</TableCell>
      <TableCell  align="center">{}</TableCell>
      <TableCell  align="center">{convertReadableDateFormat(maturity_date)}</TableCell>
      <TableCell  align="center">{formatNumber(submitted_invoice)}</TableCell>
      <TableCell  align="center">{formatNumber(settled_invoice)}</TableCell>
      <TableCell  align="center">{formatNumber(overdue_amount)}</TableCell>
      <TableCell  align="center">{formatNumber(live_invoice)}</TableCell>
      <TableCell  align="center">{formatNumber(max_allowable_dis_amount_invoice)}</TableCell>
      <TableCell  align="center">{formatNumber(total_disbursement)}</TableCell>
      <TableCell  align="center">{formatNumber(invoice_disburement_value)}</TableCell>
      <TableCell  align="center">{formatNumber(invoice_processing_fees)}</TableCell>
      <TableCell  align="center">{formatNumber(collection_amount)}</TableCell>
      <TableCell  align="center">{convertReadableDateFormat(collection_date)}</TableCell>
      <TableCell  align="center">{formatNumber(total_outstanding_amount)}</TableCell>
      <TableCell  align="center">{formatNumber(days_overdue)}</TableCell>
      <TableCell  align="center">{formatNumber(penal_charge)}</TableCell>
    </TableRow>
  )
}

export default function AnchorDetails({ anchor }:{ anchor: string }) {
  let totalSubmittedInvoice: number = 0;
  let totalSettledInvoice: number = 0;
  let totalLiveInvoice: number = 0;
  let totalMaxAllowableDisAmountInvoice: number = 0;
  let totalDisbursement: number = 0;
  let totalInvoiceDisbursementValue: number = 0;
  let totalInvoiceProcessingFees: number = 0;
  let totalCollectionAmount: number = 0;
  let totalOutstandingAmount: number = 0;

  const [data, setData] = useState([]);

  useEffect(() => {
      const getData = async () => {
          const { data }:any = await axios.post(url, {
              "anchor": anchor
              })
          setData(data?.data);
      }
      getData();
  }, [anchor]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor: '#dff6fd', borderTop: '1px solid gray', boxShadow: '0 0 2px 1px gray'}}>
            <TableCell style={{fontWeight: 'bolder'}} align="center">SL No.</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Invoice Number</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Invoice Date</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Invoice Received Date</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Invoice Maturity Date</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Submitted Invoice</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Settled Invoice</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Value of Overdue Invoice</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Live Invoice</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Max Allowable Dis Amount-Per Invoice</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Total Disbursement</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Invoice Disburement Value</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Invoice Processing Fees</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Collection Amount</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Collection date</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Total Outstanding Amount</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Days Overdue</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">Penal Charge</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data && data.map ((row, sl_no) => {
              totalSubmittedInvoice = totalSubmittedInvoice + totalAmountFormat(row['submitted_invoice']);           

              totalSettledInvoice = totalSettledInvoice + totalAmountFormat(row['settled_invoice']);

              totalLiveInvoice = totalLiveInvoice + totalAmountFormat(row['live_invoice']);

              totalMaxAllowableDisAmountInvoice = totalMaxAllowableDisAmountInvoice + totalAmountFormat(row['max_allowable_dis_amount_invoice']);

              totalDisbursement = totalDisbursement + totalAmountFormat(row['total_disbursement']);

              totalOutstandingAmount = totalOutstandingAmount + totalAmountFormat(row['total_outstanding_amount']);

              totalInvoiceDisbursementValue = totalInvoiceDisbursementValue + totalAmountFormat(row['invoice_disburement_value']);

              totalCollectionAmount = totalCollectionAmount + totalAmountFormat(row['collection_amount']);

              totalInvoiceProcessingFees = totalInvoiceProcessingFees + totalAmountFormat(row['invoice_processing_fees'])

              return content(row, sl_no);
            })
          }
          
        </TableBody>
        <TableHead>
          <TableRow style={{backgroundColor: '#dff6fd', borderTop: '1px solid gray', boxShadow: '0 0 2px 1px gray'}}>
            <TableCell style={{fontWeight: 'bolder'}} align="center"></TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center"></TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{ "Total:" }</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center"></TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{ data && data.length } Invoice(s)</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{ formatNumber(totalSubmittedInvoice) }</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{ formatNumber(totalSettledInvoice) }</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{"-"}</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{ formatNumber(totalLiveInvoice) }</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{ formatNumber(totalMaxAllowableDisAmountInvoice) }</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{ formatNumber(totalDisbursement) }</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{ formatNumber(totalInvoiceDisbursementValue) }</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{ formatNumber(totalInvoiceProcessingFees) }</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{ formatNumber(totalCollectionAmount) }</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{"-"}</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{ formatNumber(totalOutstandingAmount) }</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{"-"}</TableCell>
            <TableCell style={{fontWeight: 'bolder'}} align="center">{"-"}</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
