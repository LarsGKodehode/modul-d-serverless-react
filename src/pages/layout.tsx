import { Outlet, Link, NavLink } from "react-router-dom";
export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-rose-950 text-amber-50">
      <header className="flex justify-between px-4 py-2">
        <Link to="/">
          {import.meta.env.VITE_APP_TITLE}
          <span className="ml-1 text-xs italic">
            -v{import.meta.env.VITE_APP_VERSION}
          </span>
        </Link>

        <nav>
          <ul className="flex gap-2 font-semi-bold">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex items-center justify-center bg-amber-100 text-neutral-900 grow">
        <Outlet />
      </div>

      <footer>
        <p className="text-center">Jobloop</p>
      </footer>
    </div>
  );
}
