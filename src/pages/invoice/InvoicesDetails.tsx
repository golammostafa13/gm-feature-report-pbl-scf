import {Divider} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BankMakerForm from "../../component/forms/bankMaker/BankMakerForm";
import InvoiceMakerForm from "./InvoiceMakerForm";
import {useGetInitialPageQuery} from "../../services/api/invoiceApiSlice";
import {useEffect, useState} from "react";

function InvoicesDetails() {
  const {data: pageData} = useGetInitialPageQuery()
  const [page, setPage] = useState(<>asd</>);
  console.log(pageData)
  useEffect(() => {
    const pageGetter = async (link: string) => {
      try {
        const p = await import('../../pages/dynamicPages/' + link )
        let SelectedPage = p.default;
        setPage(<SelectedPage/>)
      } catch (e) {
        console.log(e)
        const p = await import('../../pages/_404')
        let _404page = p.default
        setPage(<_404page/>)
      }
    }
    if (pageData?.action)
      pageGetter(pageData.action)
  }, [pageData])

  return (
      <Box sx={{mx: 7, mt: 4.5}}>
        <Box>
          <Box>
            <Typography sx={{display: "flex", mb: 1, fontSize: "25px"}}>
              Invoice Details
            </Typography>
            <Divider
                sx={{width: "100%", border: "1px solid  #06283D"}}
            ></Divider>
          </Box>
        </Box>
        <Box>
          {/*<InvoiceMakerForm/>*/}
          {page}
        </Box>
      </Box>
  );
}

export default InvoicesDetails