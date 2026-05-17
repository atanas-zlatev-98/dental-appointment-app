import AuthMenu from "./auth-menu/AuthMenu";
import MenuBar from "./menu-bar/MenuBar";

export default function NavigationBar() {
  return (
    <nav className="w-full z-10 flex flex-row justify-between absolute">
      <div className="max-w-360 w-full mx-auto flex items-center flex-row">
          <MenuBar auth={<AuthMenu/>}/>
      </div>
    </nav>
  );
}
