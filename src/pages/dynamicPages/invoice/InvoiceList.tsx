import CustomButton from "../../../component/importComponents/CustomButton";
import CustomTable from "../../../component/importComponents/CustomTable";
import { Box, Button, Stack, Divider, Typography } from "@mui/material";
import CustomSearchIcon from "../../../component/importComponents/CustomSearchIcon";
import { invoiceMakerClientList } from "../../../utils/table/invoice/InvoiceList";
import {useGetInvoiceListQuery, useGetRecordsQuery} from "../../../services/api/invoiceApiSlice";
import { useNavigate } from "react-router-dom";
import CustomIcon from "../../../component/customIcons/CustomIcon";
import { useSelector } from "react-redux";

function InvoiceList() {
  // const { data, error, isLoading } = useGetInvoiceListQuery();
  const { data, error, isLoading } = useGetRecordsQuery();
  const navigate = useNavigate();
  const { role } = useSelector((state: any) => state.userInfo);

  const action = (id: string) => {
    const viewHandler = () => {
      navigate("/invoice-details/" + id);
    };
    return (
      <Box>
        <Box onClick={viewHandler}>
          <CustomIcon iconName={"DocumentView"} />
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ mx: 7, mt: 4.5 }}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
      >
        <Box width={"100%"}>
          <Box display={"flex"} justifyContent={"space-between"} sx={{ mb: 2 }}>
            <Box>
              <Typography sx={{ px: 0, fontSize: "26px", fontWeight: "700" }}>
                Outstanding Invoices
              </Typography>
            </Box>
            <Box>
              <CustomSearchIcon />
            </Box>
          </Box>
          <Divider sx={{ border: "1", borderColor: "#06283D" }}></Divider>
          <Box>
            {role === "supplier_invoice_maker" ? (
              <Stack spacing={2} direction="row" sx={{ my: 2 }}>
                <CustomButton
                  name="+ Create Invoice"
                  clickFunction={() => navigate(`/invoice-details`)}
                />
              </Stack>
            ) : (
              ""
            )}
          </Box>
          <Box>
            {!isLoading && (
              <CustomTable
                listControllerArray={invoiceMakerClientList}
                tableData={data}
                action={action}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default InvoiceList;
