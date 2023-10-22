import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="flex bg-slate-200">
      <Link href="/" className="mr-5">
        Next
      </Link>

      <Link href="/users">Users</Link>
    </div>
  );
};

export default NavBar;
