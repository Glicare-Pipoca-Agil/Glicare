import About from "@/app/components/about";
import CallToDownload from "@/app/components/call-to-download";
import Contact from "@/app/components/contact";
import ToDoctors from "@/app/components/to-doctors";
import ToPacients from "@/app/components/to-pacients";
import WhoAre from "@/app/components/who-are";
import CallToDownloadSecondary from "@/app/components/call-to-download-secondary";
import Feedback from "@/app/components/feedback";
import StoresDownload from "./components/stores-download";

export default function Home() {
  return (
    <main className="max-w-[1440px]">
      <CallToDownload />
      <ToPacients />
      <ToDoctors />
      <Feedback />
      <CallToDownloadSecondary />
      <About />
      <Contact />
      <WhoAre />
      <StoresDownload/>
    </main>
  )
}
