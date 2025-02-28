import About from "./components/about";
import CallToDownload from "./components/call-to-download";
import Contact from "./components/contact";
import WhoAre from "./components/who-are";

export default function Home() {
  return (
    <div>
      <CallToDownload />
      <About />
      <Contact />
      <WhoAre/>
    </div>
  )
}
