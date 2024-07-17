const MultiNestedDropdownNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ minHeight: "90vh" }}
    >
      <a className="navbar-brand" href="#home">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#link">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#dropdown"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="dropdown-submenu">
                <a className="dropdown-item dropdown-toggle" href="#action/3.1">
                  Action
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#action/3.1">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action/3.2">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action/3.3">
                      Something else here
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="#action/3.4"
                    >
                      Another nested action
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#action/3.4">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#action/3.5">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#action/3.6">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MultiNestedDropdownNavbar;
