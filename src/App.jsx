import classes from "./App.module.css";
import "./index.css";
import logo from "./assets/Images/logo.svg";
import graphs from "./assets/Images/illustration-intro.svg";
import burgerIcon from "./assets/Images/icon-hamburger.svg";
import closeIcon from "./assets/Images/icon-close.svg";

function App() {
  return (
    <div>
      <header className={classes.container}>
      <div className={classes.primary_header}>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <button className={classes.mobile_nav_toggle}>
          <img src={burgerIcon} alt="" className={classes.icon_burger} />
          <img src={closeIcon} alt="" className={classes.icon_close} />
        </button>
        <nav className={classes.primary_navgation}>
          <ul>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </nav>
        <button className={classes.button}>Get Started</button>
        </div>
      </header>
      <main>
        <section className="padding-block-900">
          <div className={classes.container}>
            <div className={classes.even_columns}>
              <div>
                <h1 className="fs_primary_heading text_primary">
                  Bring Everyone together to build better products
                </h1>
                <p>
                  Manage makes it simple for software teams to plan day-to-day
                  tasks while keeping the larger team goals in view.
                </p>
                <button className={classes.button}>Get Started</button>
              </div>
              <div>
                <img src={graphs} alt="graph" />
              </div>
            </div>
          </div>
        </section>
        <section className="padding-block-900">
          <div className={classes.container}>
            <div className={classes.even_container}>
              <div>
                <h2 className="fs_secondary_heading text_primary">
                  What’s different about Manage?
                </h2>
                <p>
                  Manage provides all the functionality your team needs, without
                  the complexity. Our software is tailor-made for modern digital
                  product teams.
                </p>
              </div>
              <div>
                <ul>
                  <li>
                    <h3 className="text_primary">
                      {" "}
                      Track company-wide progress
                    </h3>
                    <p>
                      See how your day-to-day tasks fit into the wider vision.
                      Go from tracking progress at the milestone level all the
                      way done to the smallest of details. Never lose sight of
                      the bigger picture again.
                    </p>
                  </li>
                  <li>
                    <h3 className="text_primary">Advanced built-in reports</h3>
                    <p>
                      Set internal delivery estimates and track progress toward
                      company goals. Our customisable dashboard helps you build
                      out the reports you need to keep key stakeholders
                      informed.
                    </p>
                  </li>
                  <li>
                    <h3 className="text_primary">
                      {" "}
                      Everything you need in one place
                    </h3>
                    <p>
                      Stop jumping from one service to another to communicate,
                      store files, track tasks and share documents. Manage
                      offers an all-in-one team productivity solution.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="carousel | padding-block-900">
          <h2 className="fs_secondary_heading text_primary">
            What they've said
          </h2>
          {/* carousel here */}
          <button className={classes.button}>Get Started</button>
        </section>
        <section
          className={classes.cta + " bg_secondary_600 padding-block-900"}
        >
          <div className={classes.container}>
            <div className={classes.even_column}>
              <div>
                <p className="fs_secondary_heading text_neutral_500">
                  Simplify how your team works today.
                </p>
              </div>
              <div>
                <button className={classes.button} data-type="inverted">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className={
          classes.footer + " bg_accent text_secondary_100 padding-block-900"
        }
      >
        <div className={classes.container}>
          <div className={classes.even_columns}>
            <div>
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
              <ul role="list">
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
            <div>
              <nav>
                <ul className={classes.footer_nav}>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                  <li>
                    <a href="">Porducts</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Community</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <form action="">
                <input type="email" />
                <button className={classes.button}>Go</button>
                <p> Copyright 2020. All Rights Reserved</p>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
