/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react";
import AnchorsList from "./anchorsList/AnchorsList"
import SupplierInfoHeader from "./supplierInfoHeader/SupplierInfoHeader"
import axios from "axios";
import { baseURL } from "./utils";

const url = `${baseURL}/api/report/statement-of-outstanding-invoices-summary`

export const ReportSummary = () => {
    const [data, setData] = useState<any[]>([]);

    const getData = async () => {
        const { data }: any = await axios.get(url);
        setData(data?.data);
    }

    useEffect(() => {
        getData();
    }, [])

    const headerData: any[] = [];

    headerData.push({
        name: data[0]?.supplier_name,
        code: data[0]?.supplier_code
    })

    return (
        <>
            { data && <SupplierInfoHeader data={headerData} /> }
            { data && <AnchorsList data={data}/> }
        </>
    )
}