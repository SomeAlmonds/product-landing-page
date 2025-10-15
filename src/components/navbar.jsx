
export default function Navbar() {

  function toggleNav() {
    const navMenu = document.getElementById("nav-menu-checkbox");
    const menuItems = document.getElementsByClassName("menu-item");

    if (navMenu.checked) {
      navMenu.checked = false;
      //  make menu items not tabable when nav menu is closed
      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].setAttribute("tabIndex", "-1");
      }
    } else {
      navMenu.checked = true;
      // make menu items tabalbe when nav menu is open
      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].setAttribute("tabIndex", "0");
      }
    }
  }

  return (
    <div className="navbar">
      <div className="nav-row-1">
        <div className="nav-logo">BRAND</div>

        <button className="btn">CONTACT US</button>
        <div className="nav-cart"></div>
        <label
          htmlFor="nav-menu-checkbox"
          className="nav-menu-toggle btn"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              toggleNav();
            }
          }}
        >
          <span className="nav-menu-icon"></span>
        </label>
      </div>

      <div className="nav-row-2">
        <input
          type="checkbox"
          id="nav-menu-checkbox"
          className="nav-menu-checkbox"
        />
        <div className="nav-menu">
          <a
            href="#home"
            className="menu-item"
            tabIndex={-1}
            onClick={() => toggleNav()}
          >
            Home
          </a>
          <a
            href="#about"
            className="menu-item"
            tabIndex={-1}
            onClick={() => toggleNav()}
          >
            About
          </a>
          <a
            href="#products"
            className="menu-item"
            tabIndex={-1}
            onClick={() => toggleNav()}
          >
            Products
          </a>
          <a
            href="#locations"
            className="menu-item"
            tabIndex={-1}
            onClick={() => toggleNav()}
          >
            Our Locations
          </a>
        </div>
      </div>
    </div>
  );
}
