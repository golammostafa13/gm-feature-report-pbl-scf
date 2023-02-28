import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BankMakerForm from "../../component/forms/bankMaker/BankMakerForm";

function FactoringLimit() {
  return (
    <Box sx={{ mx: 7, mt: 4.5 }}>
      <Box>
        <Box>
          <Typography sx={{ display: "flex", mb: 1, fontSize: "25px" }}>
            Factoring Limit
          </Typography>
          <Divider
            sx={{ width: "100%", border: "1px solid  #06283D" }}
          ></Divider>
        </Box>
      </Box>
      <Box>
        <BankMakerForm />
      </Box>
    </Box>
  );
}

export default FactoringLimit;
