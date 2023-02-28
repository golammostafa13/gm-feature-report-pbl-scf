import {useEffect, useState} from 'react';
import {Box, Grid, Button, Typography} from "@mui/material";
import {FIMakerFormBuyerLeft, FIMakerFormBuyerRight} from "../../../utils/form/FIMaker/buyerDataList";
import CustomInput from "../../customInputComponents/CustomInput";
import {
  useGetClientListQuery,
  useSetAnchorLimitMutation,
  useGetAnchorLimitMutation,
  useUpdateAnchorLimitMutation,
  useDeleteAnchorLimitMutation,
  useUpdateMotherLimitStatusMutation,
  useSetMotherLimitMutation, useUpdateMotherLimitMutation
} from "../../../services/api/bankApiSlice";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import CustomTable from "../../importComponents/CustomTable";
import {bankMakerBuyerList} from "../../../utils/table/ClientList";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import {useDispatch, useSelector} from "react-redux";
import CustomIcon from "../../customIcons/CustomIcon";
import {
  addToBuyerList,
  removeFromBuyerList,
  resetBuyerInfo,
  setBuyerInfo,
} from "../../../services/slices/limitSlice";
import {setUtilityErrorMessage, setUtilityMessage} from "../../../services/slices/UtilitySlice";

function BankMakerBuyer() {
  const {companyId} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {buyerLimit: formData, buyerList, motherLimit} = useSelector((state: any) => state.limitInfo)
  const {company_profile_id: supplier_id, name, supplier_name} = motherLimit
  const {role} = useSelector((state: any) => state.userInfo)

  const [setMotherLimit, {data: motherLimitData, error: motherLimitSetError}] = useSetMotherLimitMutation()
  const [updateMotherLimit, {
    data: updateMotherLimitData,
    error: updateMotherLimitError
  }] = useUpdateMotherLimitMutation()
  const [setAnchorLimit, {data: anchorLimitData, error}] = useSetAnchorLimitMutation();
  const {data, error: clientListError} = useGetClientListQuery();
  const [updateAnchorLimit, {data: anchorLimitUpdateData, error: updateError}] = useUpdateAnchorLimitMutation()
  const [deleteAnchorLimit, {data: anchorLimitDeleteData, error: deleteError}] = useDeleteAnchorLimitMutation()
  const [updateMotherLimitStatus, {
    data: motherLimitStatusData,
    error: motherLimitStatusError
  }] = useUpdateMotherLimitStatusMutation()

  const [updating, setUpdating] = useState(false);

  const setData = (stateName: string, value: any, selectName?: string) => {
    // setFormData(state => ({...state, [stateName]: value}))
    if (stateName === 'company_profile_id') {
      dispatch(setBuyerInfo({stateName: 'buyer_name', data: selectName}))
    }
    dispatch(setBuyerInfo({stateName, data: value}))
  }

  const addAnchorLimitHandler = async () => {
    dispatch(addToBuyerList(formData))
    formReset()
  }

  const formReset = () => {
    setUpdating(false)
    dispatch(resetBuyerInfo())
  }

  const updateMotherLimitStatusHandler = (status: string) => {
    updateMotherLimitStatus({id: motherLimit?.id, approval_status: status, remarks: formData.remarks})
  }

  const saveLimit = () => {
    if (motherLimit.id) {
      updateMotherLimit(motherLimit)
    } else {
      setMotherLimit(motherLimit)
    }
  }

  useEffect(() => {
    if (motherLimitStatusData)
      navigate('/client-list')
  }, [motherLimitStatusData]);


  useEffect(() => {
    if (supplier_id?.toString() === formData.company_profile_id) {
      formReset()
    }
  }, [supplier_id]);

  useEffect(() => {
    if (motherLimitData || updateMotherLimitData) {
      buyerList.map((buyer: any) => {
        if (buyer.id)
          updateAnchorLimit(buyer)
        else
          setAnchorLimit({...buyer, mother_limit_setup_id: motherLimitData?.id || motherLimit.id})
      })
    }
  }, [motherLimitData, updateMotherLimitData]);
// success messages
  useEffect(() => {
    if (updateMotherLimitData) {
      dispatch(setUtilityMessage(updateMotherLimitData))
    }
  }, [updateMotherLimitData]);

  useEffect(() => {
    if (motherLimitStatusData) {
      dispatch(setUtilityMessage(motherLimitStatusData))
    }
  }, [motherLimitStatusData]);

  useEffect(() => {
    if (anchorLimitData) {
      dispatch(setUtilityMessage(anchorLimitData))
    }
  }, [anchorLimitData]);

  useEffect(() => {
    if (anchorLimitUpdateData) {
      dispatch(setUtilityMessage(anchorLimitUpdateData))
    }
  }, [anchorLimitUpdateData]);
// error-messages
  useEffect(() => {
    if (motherLimitSetError) {
      dispatch(setUtilityErrorMessage(motherLimitSetError))
    }
  }, [motherLimitSetError]);


  useEffect(() => {
    if (error) {
      dispatch(setUtilityErrorMessage(error))
    }
  }, [error]);

  useEffect(() => {
    if (motherLimitStatusError) {
      dispatch(setUtilityErrorMessage(motherLimitStatusError))
    }
  }, [motherLimitStatusError]);


  useEffect(() => {
    if (updateMotherLimitError) {
      dispatch(setUtilityErrorMessage(updateMotherLimitError))
    }
  }, [updateMotherLimitError]);


  useEffect(() => {
    if (updateError) {
      dispatch(setUtilityErrorMessage(updateError))
    }
  }, [updateError]);

  const action = (id: string, updating?: string) => {
    const editButtonHandler = () => {
      setUpdating(true)
      const anchorData = buyerList?.find((ad: any) => (ad.id?.toString() === id?.toString() || ad.company_profile_id?.toString() === id?.toString()))
      if (anchorData) {
        dispatch(setBuyerInfo({
          fetchedDetails: {
            ...anchorData,
          }
        }))
      }
    }
    const deleteButtonHandler = () => {
      // deleteAnchorLimit(id)
      // getAnchorLimit(motherLimitId)
      dispatch(removeFromBuyerList({id}))
    }


    return <Box>
      <Box>
        <IconButton color="primary" onClick={editButtonHandler}>
          {role === 'bank_maker' ? <EditOutlinedIcon/> : <CustomIcon iconName={'DocumentView'}/>}
        </IconButton>
        {role === 'bank_maker' && <IconButton color="error" onClick={deleteButtonHandler}>
          <DeleteOutlinedIcon/>
        </IconButton>}
      </Box>
    </Box>
  }

  return (
      <>
        <Typography bgcolor={'primary.main'} width={'20%'} color={'#adefd1'} py={'5px'}>Mother Limit : {motherLimit.credit_limit}</Typography>
        <Grid container columns={{xs: 6, md: 12}}>
          <>
            <Grid xs={12} md={6} sx={{px: 10}}>
              {
                FIMakerFormBuyerLeft.map((field, i) => {
                  let value = formData[field.stateName as keyof typeof formData] || ''
                  if (field?.stateName === 'company_profile_id') {
                    field.dataList = data?.filter((c: any) => c.id?.toString() !== supplier_id?.toString())
                  }
                  if (field?.stateName === 'mother_limit_setup_id') {
                    value = name || supplier_name
                  }
                  return <Box>
                    <CustomInput {...field} key={i} value={value} setData={setData}/>
                  </Box>
                })
              }
            </Grid>
            <Grid xs={12} md={6} sx={{px: 10}}>
              {
                FIMakerFormBuyerRight.map((field, i) => {
                  if (field.stateName === 'remarks' && role !== 'bank_checker') return <></>
                  return <Box>
                    <CustomInput {...field} key={i} value={formData[field.stateName as keyof typeof formData]}
                                 setData={setData}/>
                  </Box>
                })
              }
            </Grid>
          </>
          {role === 'bank_maker' && <>
            <Button
                variant="contained"
                sx={{
                  px: 10,
                  py: 0.5,
                  mt: 5,
                  ml: 10,
                  fontSize: "20px",
                  fontWeight: 400,
                  background: "#06283D",
                  textTransform: "capitalize",
                  borderRadius: "8px",
                }}
                size="small"
                onClick={addAnchorLimitHandler}
            >
              {updating ? "Update" : "+ Add"}
            </Button>
            <Button
                variant="contained"
                sx={{
                  px: 10,
                  py: 0.5,
                  mt: 5,
                  ml: 10,
                  fontSize: "20px",
                  fontWeight: 400,
                  background: "#06283D",
                  textTransform: "capitalize",
                  borderRadius: "8px",
                }}
                size="small"
                onClick={formReset}
            >
              {formData.id ? 'Cancel' : "Clear"}
            </Button>
          </>}
        </Grid>

        <Box sx={{px: 10, mt: 5}}>
          <CustomTable action={action} listControllerArray={bankMakerBuyerList} tableData={buyerList}
                       idStateName={'company_profile_id'}/>
        </Box>
        {role === 'bank_checker' ? <Box width='100%' textAlign='left'>
              <Button variant='contained'
                      sx={{
                        px: 10,
                        py: 0.5,
                        mt: 5,
                        ml: 10,
                        fontSize: "20px",
                        fontWeight: 400,
                        background: "#5cb85c",
                        textTransform: "capitalize",
                        borderRadius: "8px",
                      }}
                      onClick={() => updateMotherLimitStatusHandler('accepted')}
                      color='primary'>Approve</Button>
              <Button variant='contained'
                      sx={{
                        px: 10,
                        py: 0.5,
                        mt: 5,
                        ml: 10,
                        fontSize: "20px",
                        fontWeight: 400,
                        background: "#06283D",
                        textTransform: "capitalize",
                        borderRadius: "8px",
                      }}
                      onClick={() => updateMotherLimitStatusHandler('on hold')}
                      color='primary'>On Hold</Button>
              <Button
                  variant='contained'
                  sx={{
                    px: 10,
                    py: 0.5,
                    mt: 5,
                    ml: 10,
                    fontSize: "20px",
                    fontWeight: 400,
                    background: "#ab0e4a",
                    textTransform: "capitalize",
                    borderRadius: "8px",
                  }}
                  onClick={() => updateMotherLimitStatusHandler('rejected')}
                  color='primary'>Reject</Button>
            </Box> :
            <Box width='100%' textAlign='left'>
              <Button
                  variant='contained'
                  sx={{
                    px: 10,
                    py: 0.5,
                    mt: 5,
                    ml: 10,
                    fontSize: "20px",
                    fontWeight: 400,
                    background: "primary",
                    textTransform: "capitalize",
                    borderRadius: "8px",
                  }}
                  onClick={() => saveLimit()}
                  color='primary'>Save</Button>
            </Box>
        }
      </>
  );
}

export default BankMakerBuyer;