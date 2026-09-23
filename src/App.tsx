// import { useState } from "react";
import { LandingPage } from "@/presentation/pages/LandingPage";
// import { IntroSplash } from "@/presentation/components/intro/IntroSplash";

function App() {
  // Intro splash temporarily disabled. To restore it, uncomment these lines
  // and pass `introDismissed={!showIntro}` to LandingPage again.
  // const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {/* {showIntro && <IntroSplash onDismiss={() => setShowIntro(false)} />} */}
      <LandingPage introDismissed />
    </>
  );
}

export default App;
