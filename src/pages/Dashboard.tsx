import React, {useState} from 'react';
import {Box} from "@mui/material";
// import {FIMakerFormLeft} from "../utils/formDataList";
import CustomInput from "../component/customInputComponents/CustomInput";

function Dashboard() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const setData = (stateName: string, value: any) => {
    setFormData(state => ({...state, [stateName]: value}))
  }

  return (
      <Box sx={{ml: '100px', width: '50%'}}>
        {/* {
          FIMakerFormLeft.map((field, i) => {
                return <Box sx={{maxWidth:'550px'}}>
                  <CustomInput {...field} key={i} value={formData[field.stateName as keyof typeof formData]}
                                    setData={setData}/>
                </Box>
              }
          )
        } */}
      </Box>
  );
}

export default Dashboard;