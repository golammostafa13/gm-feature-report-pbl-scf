export const FIMakerFormSupplierLeft = [
  {
    required: true,
    label: 'Branch',
    stateName: 'branch_id',
    inputType: 'select',
    field_prefix: 'name',
    dataList: [],
    toolTipText:'Select A Branch'
  },
  { required: true, label: 'Loan Account Number', stateName: 'loan_account_number', inputType: 'string',toolTipText:'Account Number of Supplier' },
  {
    required: true,
    label: 'Name of Client',
    stateName: 'company_profile_id',
    inputType: 'select',
    field_prefix: 'client',
    toolTipText:'Select A Client',
    dataList: [
      { id: '1', name: "Client 1" },
      { id: '2', name: "Client 2" },
      { id: '3', name: "Client 3" },
    ]
  },
  { required: false, label: 'Address of Client', stateName: 'address', inputType: 'string', disabled: true },
  { required: true, label: 'Credit Limit', stateName: 'credit_limit', inputType: 'number',toolTipText:'Credit Limit of Supplier' },
  { required: true, label: 'Effective Date', stateName: 'effective_date', inputType: 'date',toolTipText:'Effective Date ' },
  { required: true, label: 'Sales Ledger Balance', stateName: 'sales_ledger_balance', inputType: 'number',toolTipText:'Sales Ledger Balance' }
]
export const FIMakerFormSupplierRight = [
  { required: true, label: 'Expiry Date', stateName: 'expiry_date', inputType: 'date',toolTipText:'Expiry Date' },
  { required: true, label: 'Credit Period', stateName: 'credit_period', inputType: 'string',toolTipText:'Credit Period' },
  { required: true, label: 'Grace Period', stateName: 'grace_period', inputType: 'string',toolTipText:'Grace Period' },
  { required: true, label: 'Interest Rate', stateName: 'interest_rate', inputType: 'number',toolTipText:'Interest Rate' },
  { required: true, label: 'Penalty Rate (%)', stateName: 'penalty_rate', inputType: 'number',toolTipText:'Penalty Rate (%)' },
  { required: true, label: 'Service Charge', stateName: 'service_charge', inputType: 'number',toolTipText:'Service Charge' },
  { required: true, label: 'SD Rate', stateName: 'safty_deposit_rate', inputType: 'number',toolTipText:'SD Rate' }
]

