import * as Vsc from "react-icons/vsc";
import Content from "./Content";
import Scroll_Indicator from "./Scroll_Indicator";

function App() {
  return (
    <>
      <header className="bg-dark text-white">
        <nav className="container">
          <ul className="list-unstyled d-flex align-items-center justify-content-start gap-2 m-0 p-0">
            <li>خانه</li>
            <li>پروژه ها</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
          </ul>
        </nav>
      </header>
      <Scroll_Indicator />
      <main className="container py-5">
        <Content />
      </main>
    </>
  );
}

export default App;
