import Main from "components/atoms/Main";
import About from "components/sections/content/containers/About";
import Jobs from "components/sections/content/containers/Jobs";
import Projects from "components/sections/content/containers/Projects";

import useScroll from "utils/hooks/useScroll";

function Content() {
  const { scrollScreen } = useScroll();

  return (
    <Main data-expanded={!!scrollScreen}>
      <About />
      <Projects />
      <Jobs />
    </Main>
  );
}

export default Content;
