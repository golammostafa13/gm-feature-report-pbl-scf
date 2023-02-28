import { useEffect, useState } from "react";
import AnchorDetails from "../anchorDetails/AnchorDetails";
import AnchorHeader from "../anchorHeader/AnchorHeader";
import SupplierInfoHeader from "../supplierInfoHeader/SupplierInfoHeader";
import axios from 'axios';
import { baseURL } from "../utils";

const url = `${baseURL}/api/report/statement-of-outstanding-invoices-summary`;

export const PranRfl = () => {
    const [data, setData] = useState<any[]>([]);

    const getData = async () => {
        const { data }:any = await axios.get(url);
        const pranRlfSummary = data?.data.filter((d: any) => d?.anchor === 'PRAN-RFL');
        setData(pranRlfSummary);
    }
    
    useEffect(() => {
        getData();
    }, [])
    
    return (
        <>
            <AnchorHeader />
            { data.length > 0 && <SupplierInfoHeader data={data}/> }
            <AnchorDetails anchor={"PRAN-RFL"} />
        </>
    )
}