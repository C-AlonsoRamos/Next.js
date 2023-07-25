import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline"
};

interface Props {
  text: string,
  href: string
}

const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link style={asPath === href ? style : undefined} href={href}>
      {text}
    </Link>
  );
};

export default ActiveLink;
