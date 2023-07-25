import MainLayout from "../../components/Layouts/MainLayout";
import Link from "next/link";

export default function Contact() {
  return (
    <MainLayout>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/pricing/index.jsx</code>
        </p>
        <div>
          <Link href="/">ir al home</Link>
        </div>
      </div>
    </MainLayout>
  );
}
