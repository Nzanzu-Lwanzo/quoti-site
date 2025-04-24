import LandingHero from "../components/landing/hero"
import PreviewSample from "../components/landing/preview"
import PreviewSummaries from "../components/landing/sums"
import Footer from "../components/__global__/footer"

const Homepage = () => {
  return (
    <>
      <LandingHero />
      <PreviewSample />
      <PreviewSummaries />
      <Footer />
    </>
  )
}

export default Homepage