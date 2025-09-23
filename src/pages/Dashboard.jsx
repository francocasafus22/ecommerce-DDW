import Tabs from "../components/Tabs";
import { useState } from "react";
import FormProduct from "../components/FormProduct";
import TableProductList from "../components/TableProductList";
import FormCategory from "../components/FormCategory";

function Dashboard() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="bg-gray-700 min-h-screen flex flex-col justify-center">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}></Tabs>
      {activeTab === 1 && <FormProduct />}
      {activeTab === 2 && <TableProductList />}
      {activeTab === 3 && <FormCategory />}
    </div>
  );
}

export default Dashboard;
