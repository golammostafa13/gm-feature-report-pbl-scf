import CustomButton from "../../component/importComponents/CustomButton";
import CustomTable from "../../component/importComponents/CustomTable";
import Box from "@mui/material/Box";
import {Divider, Typography} from "@mui/material";
import CustomSearchIcon from "../../component/importComponents/CustomSearchIcon";
import {bankMakerClientList} from "../../utils/table/ClientList";
import {useGetMotherLimitListQuery} from "../../services/api/bankApiSlice";
import {useNavigate} from "react-router-dom";
import CustomIcon from "../../component/customIcons/CustomIcon";
import {useDispatch, useSelector} from "react-redux";
import {resetLimitInfo} from "../../services/slices/limitSlice";
import {useEffect} from "react";

function ClientList() {
  const {data, error, isLoading} = useGetMotherLimitListQuery();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { role } = useSelector((state: any) => state.userInfo)
  const action = (id: string) => {
    const viewHandler = () => {
      navigate('/factoring-limit/' + id)
    }
    return <Box>
      <Box onClick={viewHandler}>
        <CustomIcon iconName={'DocumentView'}/>
      </Box>
    </Box>
  }
  useEffect(() => {
    dispatch(resetLimitInfo())
  }, []);

  return (
      <Box sx={{mx: 7, mt: 4.5}}>
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems="center"
            flexDirection={"column"}
        >
          <Box width={"100%"}>
            <Box display={"flex"} justifyContent={"space-between"} sx={{mb: 2}}>
              <Box>
                <Typography sx={{px: 0, fontSize: '26px', fontWeight: '700'}}>
                  Client List
                </Typography>
              </Box>
              <Box>
                <CustomSearchIcon/>
              </Box>
            </Box>
            <Divider sx={{border: '1', borderColor: '#06283D'}}></Divider>
            <Box>{
              role === 'bank_maker' ? <CustomButton name='+ Create Limit' clickFunction={() => navigate(`/factoring-limit`)}
              /> : ''
            }
            </Box>
            <Box>
              {!isLoading && <CustomTable listControllerArray={bankMakerClientList} tableData={data} action={action}/>}
            </Box>
          </Box>
        </Box>
      </Box>
  );
}

export default ClientList;
