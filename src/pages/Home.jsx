import React from "react";
import Layout from "../components/Layout/Layout";
import UserCard from "../components/UserCard/UserCard";

const Home = () => {
  return (
    <>
      <Layout>
        <h2>Body</h2>
        <div
          style={{
            margin: "50px 0px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <UserCard />
        </div>
      </Layout>
    </>
  );
};

export default Home;
