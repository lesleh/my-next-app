import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

export function NavLink(props: ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      className="inline-block p-2 rounded-sm hover:bg-white hover:text-black"
      href={props.href}
    >
      {props.children}
    </Link>
  );
}
