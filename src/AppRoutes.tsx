import {
    Routes,
    Route, Navigate
} from "react-router-dom";
import {useSelector} from "react-redux";
import ProtectedRoute from "./component/ProtectedRoute";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import _404 from "./pages/_404";
import ClientList from "./pages/bank/ClientList";
import FactoringLimit from "./pages/bank/FactoringLimit";
import InvoiceList from "./pages/invoice/InvoiceList";
import InvoicesDetails from "./pages/invoice/InvoicesDetails";
import { ReportSummary } from "./component/reportSummary/ReportSummary";
import { PranRfl } from "./component/reportSummary/pranRfl/PranRfl";
import { Berger } from "./component/reportSummary/berger/Berger";
import { SKF } from "./component/reportSummary/skf/SKF";

function AppRouter() {
    const {token} = useSelector((state: any) => state.userInfo)
    const routes = [
        {
            path: "/dashboard",
            element: <Dashboard/>,
        },
        {
            path: "/profile",
            element: <Profile/>,
        },
        {
            path: "/client-list",
            element: <ClientList/>,
        },
        {
            path: "/factoring-limit",
            element: <FactoringLimit/>,
        },
        {
            path: "/factoring-limit/:companyId",
            element: <FactoringLimit/>,
        },
        {
            path: "/invoice-list",
            element: <InvoiceList/>,
        },
        {
            path: "/invoice-details",
            element: <InvoicesDetails/>,
        },
        {
            path: "/report-summary",
            element: <ReportSummary/>
        },
        {
            path: "/report-summary/pran-rfl",
            element: <PranRfl/>
        },
        {
            path: "/report-summary/berger",
            element: <Berger/>
        }
        ,
        {
            path: "/report-summary/skf",
            element: <SKF/>
        }
    ];

    return (
        <Routes>
            <Route path="/" element={!!token ? <Navigate to="/dashboard"/> : <Navigate to="/login"/>}/>
            <Route path={'/login'} element={<Login/>}/>
            {
                routes.map((r, i) =>
                    <Route key={i} path={r.path} element={
                        <ProtectedRoute authenticated={!!token}>
                            {r.element}
                        </ProtectedRoute>
                    }/>
                )
            }
            <Route path={'/*'} element={<_404/>}/>
        </Routes>
    );
}

export default AppRouter;
