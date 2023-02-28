export const FIMakerFormBuyerLeft = [
  { required: true, label: 'Name of Supplier', stateName: 'mother_limit_setup_id', inputType: 'string', disabled: true ,toolTipText:'Name of Supplier'},
  {
    required: true,
    label: 'Buyer Name',
    stateName: 'company_profile_id',
    inputType: 'select',
    field_prefix: 'buyer',
    dataList: [],
    toolTipText:'Buyer Name'
  },
  { required: true, label: 'Advanced Payment', stateName: 'advance_payment', inputType: 'number',toolTipText:'Advanced Payment' },
  { label: 'Remarks', stateName: 'remarks',toolTipText:'Required for On holding and Rejecting' },
]

export const FIMakerFormBuyerRight = [
  { required: true, label: 'Buyer Limit', stateName: 'anchor_limit', inputType: 'number',toolTipText:'Buyer Limit' },
  { required: true, label: 'Effective Date', stateName: 'effective_date', inputType: 'date',toolTipText:'Effective Date' },
  {
    label: 'Status',
    required: true,
    stateName: 'status',
    inputType: 'select',
    defaultValue:'ACTIVE',
    dataList: [{id:'ACTIVE',name:'ACTIVE'},{id:'INACTIVE',name:'INACTIVE'},{id:'ON_HOLD',name:'ON_HOLD'},],
    toolTipText:'Status of Buyer Limit'
  },
]

