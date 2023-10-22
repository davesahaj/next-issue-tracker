import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: "name" | "email";
}

const UserTable = async ({ sortOrder }: Props) => {
  function compare(a: User, b: User) {
    if (a[sortOrder] > b[sortOrder]) return 1;
    if (a[sortOrder] < b[sortOrder]) return -1;
    return 0;
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });

  const users: User[] = (await res.json()).sort(compare);

  return (
    <table className="table table-zebra">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, name, email }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
