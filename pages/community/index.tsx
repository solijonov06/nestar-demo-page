import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";

const Community : NextPage = () => {
    console.log("community component --- page routing ---");
  return (
    <div>
      <h1>community Page {""} <button onClick={()=> alert("Hello MIT30")} style = {{margin: "15px"}}>Press me</button></h1>
      <p>This is the community page.</p>
    </div>
  );
}

export default withLayoutBasic(Community);