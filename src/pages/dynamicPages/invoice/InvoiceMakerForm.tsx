import {useEffect, useState} from "react";
import {Box, Grid, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import CustomActive from "../../../component/importComponents/CustomActive";
import InvoiceMakerCommonInformation from "../../../component/forms/invoiceMaker/InvoiceMakerCommonInformation";
import InvoiceMakerGoodsInformation from "../../../component/forms/invoiceMaker/InvoiceMakerGoodsInformation";

function InvoiceMakerForm() {
  const dispatch = useDispatch()
  const [isPreview, setIsPreview] = useState(true);
  const {companyId} = useParams()


  return (
      <Box sx={{mb: 12}}>
        <Box sx={{width: "100%"}}>
          <Grid
              container
              columns={{xs: 12, sm: 12, md: 12}}
              rowSpacing={1}
              sx={{mt: 4}}
          >
            <Grid xs={12} sm={6} md={6}>
              <CustomActive status={isPreview} lActive={isPreview}>
                <Typography
                    onClick={() => setIsPreview(true)}
                    sx={{
                      fontSize: "25px",
                      fontWeight: 400,
                      lineHeight: "30px",
                      py: 0.9,
                      cursor: "pointer",
                    }}
                >
                 Common Information
                </Typography>
              </CustomActive>
            </Grid>
            <Grid xs={12} sm={6} md={6}>
              <CustomActive status={!isPreview} lActive={isPreview}>
                <Typography
                    onClick={() => setIsPreview(false)}
                    sx={{
                      fontSize: "25px",
                      fontWeight: 400,
                      lineHeight: "30px",
                      py: 0.9,
                      cursor: "pointer",
                    }}
                >
                 Goods/Services Information
                </Typography>
              </CustomActive>
            </Grid>
          </Grid>
        </Box>

        {isPreview && ( 
            <Box
                sx={{
                  pt: 5,
                  pb: 8,
                  borderLeft: "1px solid #256D85",
                  borderRight: "1px solid #256D85",
                  borderBottom: "1px solid #256D85",
                }}
            >
              <Grid container columns={{xs: 6, md: 12}}>
                {/* <BankMakerSupplier setIsPreview={setIsPreview}/> */}
                <InvoiceMakerCommonInformation setIsPreview={setIsPreview}/>
              </Grid>
            </Box>
        )}
        {!isPreview && (
            <Box
                sx={{
                  pt: 5,
                  pb: 8,
                  borderLeft: "1px solid #256D85",
                  borderRight: "1px solid #256D85",
                  borderBottom: "1px solid #256D85",
                }}
            >
              <InvoiceMakerGoodsInformation/>
            </Box>
        )}
      </Box>
  );
}

export default InvoiceMakerForm;
