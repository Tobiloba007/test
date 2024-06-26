import About from "./screens/About";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Support from "./screens/Support";
import OurMetals from "./screens/OurMetals";
import Locations from "./screens/Locations";
import RegForm from "./screens/registration/RegForm";
import Verification from "./screens/registration/Verification";
import Login from "./screens/Login";
import SelectRole from "./screens/SelectRole";
import BuyerDashboard from "./screens/dashboards/BuyerDashboard";
import SellerDashboard from "./screens/dashboards/SellerDashboard";
import RecoverPassword from "./screens/registration/RecoverPassword";
import RecoverySuccess from "./screens/registration/RecoverySuccess";
import ChangePassword from "./screens/registration/ChangePassword";
import BuyerRequestFlow from "./screens/BuyerRequestFlow";
import SellerRequestFlow from "./screens/SellerRequestFlow";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import AdminLogin from "./screens/admin/AdminLogin";
import AdminLayout from "./screens/admin/AdminLayout";

function App() {
  return (
    <Router>
         <Routes>
            <Route path="/" Component={Home} />
            <Route path="/our-metals" Component={OurMetals} />
            <Route path="/locations" Component={Locations} />
            <Route path="/about" Component={About} />
            <Route path="/support" Component={Support} />
            <Route path="/register" Component={RegForm} />
            <Route path="/verification" Component={Verification} />
            <Route path="/login" Component={Login} />
            <Route path="/recoverPassword" Component={RecoverPassword} />
            <Route path="/recoverySuccess" Component={RecoverySuccess} />
            <Route path="/changePassword" Component={ChangePassword} />
            <Route path="/select-role" Component={SelectRole} />
            <Route path="/buyer-request-flow" Component={BuyerRequestFlow} />
            <Route path="/seller-request-flow" Component={SellerRequestFlow} />
            <Route path="/buyer-dashboard" Component={BuyerDashboard} />
            <Route path="/seller-dashboard" Component={SellerDashboard} />
            <Route path="/dashboard-layout" Component={DashboardLayout} />
            <Route path="/admin" Component={AdminLogin} />
            <Route path="/admin-Layout" Component={AdminLayout} />
         </Routes>
    </Router>
  );
}

export default App;
