import React from "react";
import "./index.css";
import Header from "../../../../Header/MainHeader/Header";
import Footer from "../../../../Footer/Footer";
import OrganizingCommittee from "../../../../HomePage/Home/OrganizingCommittee";

function Org() {
  return (
    <div className="Orgcommittee">
      {" "}
      <Header />
      <h2 className="OrgHeading">Organizing Committee Members</h2>
      <div className="OrgMid">
        <OrganizingCommittee />
      </div>
      <Footer />
    </div>
  );
}

export default Org;
