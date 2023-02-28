export const CommonInformationLeft = [
    { required: true, label: 'Types of Invoices', stateName: 'types_of_invoices', inputType: 'string', toolTipText:'Types of Invoices'},
    { required: true, label: 'Name of Supplier', stateName: 'name_of_supplier', inputType: 'string', toolTipText:'Name of Supplier'},
    { required: true, label: 'Invoice Number', stateName: 'invoice_number', inputType: 'number',toolTipText:'Invoice Number' },
    { required: true, label: 'Invoice Date', stateName: 'invoice_date', inputType: 'date',toolTipText:'Invoice Date' },
  
    {
      required: true,
      label: 'Buyer',
      stateName: 'buyer',
      inputType: 'select',
      field_prefix: 'buyer',
      dataList: [],
      toolTipText:'Buyer'
    },
    { required: true, label: 'PO Number', stateName: 'po_number', inputType: 'number',toolTipText:'PO Number' },
  ]
  
  export const CommonInformationRight = [
    { required: true, label: 'PO Date', stateName: 'po_date', inputType: 'date',toolTipText:'PO Date' },
    { required: true, label: 'Challan Number', stateName: 'challan_payment', inputType: 'number',toolTipText:'Challan Number' },
    { required: true, label: 'Delivery Date', stateName: 'delivery_date', inputType: 'date',toolTipText:'Delivery Date' },
    { required: true, label: 'Currency', stateName: 'currency', inputType: 'string', toolTipText:'Currency'},
    {
      required: true,
      label: 'Attachment',
      stateName: 'attachment',
      inputType: 'file',
      disable: true,
      toolTipText:'Select Attachment',
      dataList: [
        { id: '1', name: "Attachment 1" },
        { id: '2', name: "Attachment 2" },
      ]
    },
    
  ]
  
  