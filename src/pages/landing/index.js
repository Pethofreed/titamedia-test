import Footer from '../../components/footer/footer'
import Navbar from '../../components/navegation/Navbar'
import Gallery from '../../components/Gallery'
import './styles.css'

function LandingPage() {
  return(
    <>
      <Navbar />
      <section className="main-section">
        <section className="content-main">
          <h3>EXPLORE BEYOND HORIZON</h3>
          <p>Magna mundi referrentur quo, no rebum dignissim qui.</p>
          <p>Per quodsi accusata id, agam labores.</p>
          <div className="btn">
            <a className="btn-work" href="/photography">VIEW OUR WORK</a>
          </div>
        </section>
      </section>

      <section className="second-section">
        <Gallery />
      </section>

      <section className="btn-more">
        <a href="/app">Show Me More</a>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default LandingPage