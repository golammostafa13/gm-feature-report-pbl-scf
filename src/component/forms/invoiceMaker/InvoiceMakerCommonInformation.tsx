import { Box, Grid, Button } from "@mui/material";
import CustomInput from "../../customInputComponents/CustomInput";
import {
  useGetBranchLimitQuery,
  useGetClientListQuery,
} from "../../../services/api/bankApiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  CommonInformationLeft,
  CommonInformationRight,
} from "../../../utils/form/InvoiceMaker/commonDataList";
import {setInvoiceInfo} from "../../../services/slices/invoiceSlice";

function InvoiceMakerCommonInformation({
  setIsPreview,
}: {
  setIsPreview: Function;
}) {
  const dispatch = useDispatch();
  const formData = useSelector((state: any) => state.limitInfo.motherLimit);
  const {
    data,
    error: clientListError,
    isLoading,
  } = useGetClientListQuery("0");
  const { data: branchListData } = useGetBranchLimitQuery();

  const setData = (stateName: string, value: any, selectName?: string) => {
    if (stateName === "company_profile_id") {
      dispatch(setInvoiceInfo({ stateName: "supplier_name", data: selectName }));
    }
    dispatch(setInvoiceInfo({ stateName, data: value }));
  };
  return (
    <>
      <Grid xs={12} md={6} sx={{ px: 10 }}>
        {CommonInformationLeft.map((field, i) => {
          let value = formData[field.stateName as keyof typeof formData];
          if (field.stateName === "branch_id") {
            field.dataList = branchListData;
          }
          if (field.stateName === "company_profile_id") {
            field.dataList = data;
          }
          if (field.stateName === "address") {
            value = data?.find(
              (cl: any) =>
                cl.id.toString() === formData.company_profile_id?.toString()
            )?.address;
          }
          return (
            <Box>
              <CustomInput {...field} key={i} value={value} setData={setData} />
            </Box>
          );
        })}
      </Grid>
      <Grid xs={12} md={6} sx={{ px: 10 }}>
        {CommonInformationRight.map((field, i) => {
          return (
            <Box>
              <CustomInput
                {...field}
                key={i}
                value={formData[field.stateName as keyof typeof formData]}
                setData={setData}
              />
            </Box>
          );
        })}
      </Grid>

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
        onClick={() => setIsPreview(false)}
      >
        Next
      </Button>
    </>
  );
}

export default InvoiceMakerCommonInformation;
