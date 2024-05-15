import { NavLink } from "./NavLink";

export function Nav() {
  return (
    <nav className="flex gap-2">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/foo">Foo</NavLink>
      <NavLink href="/bar">Bar</NavLink>
      <NavLink href="/baz">Baz</NavLink>
      <NavLink href="/qux">Qux</NavLink>
    </nav>
  );
}
