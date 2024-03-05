import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import myContext from "../../context/data/myContext";

function Order() {
  const dataContext = useContext(myContext);
  const { name } = dataContext.state;
  const {color}=dataContext
  return (
    <Layout>
      <h1>Order by {name}</h1>
      <h1>color {color}</h1>
    </Layout>
  );
}

export default Order;
