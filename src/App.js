import React, { Component } from 'react'
import Octi from './components/Octi'
import Top from './components/Top'
import GitLogo from './images/GitLogo.png'
import Adacats from './images/Adacats.png'
import Brennatocat from './images/Brennatocat.png'
import filmtocats from './images/filmtocats.png'
import Fintechtocat from './images/Fintechtocat.png'
import hula_loop_octodex03 from './images/hula_loop_octodex03.gif'
import Octogatos from './images/Octogatos.png'
import puddle_jumper_octodex from './images/puddle_jumper_octodex.jpg'
import scubatocat from './images/scubatocat.png'
import Sentrytocat_octodex from './images/Sentrytocat_octodex.jpg'
import surftocat from './images/surftocat.png'
import Terracottocat_Single from './images/Terracottocat_Single.png'
import bouncercat from './images/bouncercat.png'
import ironcat from './images/ironcat.jpg'
import octobiwan from './images/octobiwan.jpg'
import xtocat from './images/xtocat.jpg'
import icon1 from './images/18125109.jpeg'
import icon2 from './images/2053865.jpeg'
import icon3 from './images/19292210.jpeg'
import icon4 from './images/20879614.jpeg'

class App extends React.Component {
  render() {
    return (
      <>
        <Top />
        <main>
          <Octi
            octiCatName="Boxterocat"
            octiCatLink={Adacats}
            octiCatNumber="149"
            octiCatIcon={icon1}
          />
          <Octi
            octiCatName="Boxterocat2"
            octiCatLink={Brennatocat}
            octiCatNumber="150"
            octiCatIcon={icon2}
          />
          <Octi
            octiCatName="Boxterocat3"
            octiCatLink={filmtocats}
            octiCatNumber="151"
            octiCatIcon={icon3}
          />

          <article class="content">
            <section>
              <img class="main-image" src={Fintechtocat} />
            </section>
            <div class="number">#149</div>
            <div class="image-name">Boxertocat</div>
            <img class="bottom-icon" src={icon4} />
          </article>

          <article class="content">
            <section>
              <img class="main-image" src={hula_loop_octodex03} />
            </section>
            <div class="number">#149</div>
            <div class="image-name">Boxertocat</div>
            <img class="bottom-icon" src={icon1} />
          </article>

          <article class="content">
            <section>
              <img class="main-image" src={Octogatos} />
            </section>
            <div class="number">#149</div>
            <div class="image-name">Boxertocat</div>
            <img class="bottom-icon" src={icon2} />
          </article>

          <article class="content">
            <section>
              <img class="main-image" src={puddle_jumper_octodex} />
            </section>
            <div class="number">#149</div>
            <div class="image-name">Boxertocat</div>
            <img class="bottom-icon" src={icon3} />
          </article>

          <article class="content">
            <section>
              <img class="main-image" src={scubatocat} />
            </section>
            <div class="number">#149</div>
            <div class="image-name">Boxertocat</div>
            <img class="bottom-icon" src={icon4} />
          </article>

          <article class="content">
            <section>
              <img class="main-image" src={Sentrytocat_octodex} />
            </section>
            <div class="number">#149</div>
            <div class="image-name">Boxertocat</div>
            <img class="bottom-icon" src={icon1} />
          </article>

          <article class="content">
            <section>
              <img class="main-image" src={surftocat} />
            </section>
            <div class="number">#149</div>
            <div class="image-name">Boxertocat</div>
            <img class="bottom-icon" src={icon2} />
          </article>

          <article class="content">
            <section>
              <img class="main-image" src={Terracottocat_Single} />
            </section>
            <div class="number">#149</div>
            <div class="image-name">Boxertocat</div>
            <img class="bottom-icon" src={icon3} />
          </article>

          <article class="content">
            <section>
              <img class="main-image" src={bouncercat} />
            </section>
            <div class="number">#149</div>
            <div class="image-name">Boxertocat</div>
            <img class="bottom-icon" src={icon4} />
          </article>

          <article class="content">
            <section>
              <img class="main-image" src={ironcat} />
            </section>
            <div class="number">#149</div>
            <div class="image-name">Boxertocat</div>
            <img class="bottom-icon" src={icon1} />
          </article>

          <article class="content">
            <section>
              <img class="main-image" src={octobiwan} />
            </section>
            <div class="number">#149</div>
            <div class="image-name">Boxertocat</div>
            <img class="bottom-icon" src={icon2} />
          </article>

          <article class="content">
            <section>
              <img class="main-image" src={xtocat} />
            </section>
            <div class="number">#149</div>
            <div class="image-name">Boxertocat</div>
            <img class="bottom-icon" src={icon3} />
          </article>
        </main>

        <div class="div-test"></div>
        <footer>
          <p class="footer-text">
            &copy; 2013 – 2020 GitHub, Inc. All rights reserved.
          </p>
        </footer>
      </>
    )
  }
}

export default App
