import React from "react";
import "antd/dist/antd.css";
import PageHeader from "./header";
import Search from "./search";
import "./App.css";
import { Layout } from "antd";
import ProfileCard from "./profileCard";

function App() {
  return (
    <Layout>
      <PageHeader />
      <Layout className="site-layout-background">
        <Search />
        <ProfileCard />
      </Layout>
    </Layout>
  );
}

export default App;
