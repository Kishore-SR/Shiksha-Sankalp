import { SignIn } from "@clerk/clerk-react";
import { Title } from "../components/Title/Title";
import { Helmet } from "react-helmet-async";

export default function Login() {
  return (
    <>
      <Title />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
      >
        <SignIn />
      </div>
    </>
  );
}
