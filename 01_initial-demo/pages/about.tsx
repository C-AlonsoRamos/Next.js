import Link from "next/link";
import MainLayout from "../components/Layouts/MainLayout";
import DarkLayout from "../components/Layouts/DarkLayout";

export default function About() {
  return (
    <MainLayout>
      <DarkLayout>
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>pages/about.jsx</code>
          </p>
          <div>
            <Link href="/">ir al home</Link>
          </div>
        </div>
      </DarkLayout>
    </MainLayout>
  );
}
