import Link from "next/link";
import MainLayout from "../components/Layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/contact.jsx</code>
        </p>
        <div>
          <Link href="/">ir al home</Link>
        </div>
      </div>
    </MainLayout>
  );
}
