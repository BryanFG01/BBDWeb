import { useState } from "react";
import { LandingPage } from "@/presentation/pages/LandingPage";
import { IntroSplash } from "@/presentation/components/intro/IntroSplash";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroSplash onDismiss={() => setShowIntro(false)} />}
      <LandingPage />
    </>
  );
}

export default App;
