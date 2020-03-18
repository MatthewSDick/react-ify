import React, { Component } from 'react'
import Octi from '../components/Octi'
import Adacats from '../images/Adacats.png'
import Brennatocat from '../images/Brennatocat.png'
import filmtocats from '../images/filmtocats.png'
import Fintechtocat from '../images/Fintechtocat.png'
import hula_loop_octodex03 from '../images/hula_loop_octodex03.gif'
import Octogatos from '../images/Octogatos.png'
import puddle_jumper_octodex from '../images/puddle_jumper_octodex.jpg'
import scubatocat from '../images/scubatocat.png'
import Sentrytocat_octodex from '../images/Sentrytocat_octodex.jpg'
import surftocat from '../images/surftocat.png'
import Terracottocat_Single from '../images/Terracottocat_Single.png'
import bouncercat from '../images/bouncercat.png'
import ironcat from '../images/ironcat.jpg'
import octobiwan from '../images/octobiwan.jpg'
import xtocat from '../images/xtocat.jpg'
import icon1 from '../images/18125109.jpeg'
import icon2 from '../images/2053865.jpeg'
import icon3 from '../images/19292210.jpeg'
import icon4 from '../images/20879614.jpeg'

export class Octis extends Component {
  render() {
    const loopOcti = [
      {
        octiCatName: 'Boxterocat',
        octiCatLink: Adacats,
        octiCatNumber: 149,
        octiCatIcon: icon1,
      },
      {
        octiCatName: 'Boxterocat2',
        octiCatLink: Brennatocat,
        octiCatNumber: 150,
        octiCatIcon: icon2,
      },
      {
        octiCatName: 'Boxterocat3',
        octiCatLink: filmtocats,
        octiCatNumber: 151,
        octiCatIcon: icon3,
      },
      {
        octiCatName: 'Boxterocat4',
        octiCatLink: Fintechtocat,
        octiCatNumber: 152,
        octiCatIcon: icon4,
      },
      {
        octiCatName: 'Boxterocat5',
        octiCatLink: hula_loop_octodex03,
        octiCatNumber: 153,
        octiCatIcon: icon1,
      },
      {
        octiCatName: 'Boxterocat6',
        octiCatLink: Octogatos,
        octiCatNumber: 154,
        octiCatIcon: icon2,
      },
      {
        octiCatName: 'Boxterocat7',
        octiCatLink: puddle_jumper_octodex,
        octiCatNumber: 155,
        octiCatIcon: icon3,
      },
      {
        octiCatName: 'Boxterocat8',
        octiCatLink: scubatocat,
        octiCatNumber: 156,
        octiCatIcon: icon4,
      },
      {
        octiCatName: 'Boxterocat9',
        octiCatLink: Sentrytocat_octodex,
        octiCatNumber: 157,
        octiCatIcon: icon1,
      },
      {
        octiCatName: 'Boxterocat10',
        octiCatLink: surftocat,
        octiCatNumber: 158,
        octiCatIcon: icon2,
      },
      {
        octiCatName: 'Boxterocat11',
        octiCatLink: Terracottocat_Single,
        octiCatNumber: 159,
        octiCatIcon: icon3,
      },
      {
        octiCatName: 'Boxterocat12',
        octiCatLink: bouncercat,
        octiCatNumber: 160,
        octiCatIcon: icon1,
      },
      {
        octiCatName: 'Boxterocat13',
        octiCatLink: ironcat,
        octiCatNumber: 161,
        octiCatIcon: icon4,
      },
      {
        octiCatName: 'Boxterocat14',
        octiCatLink: octobiwan,
        octiCatNumber: 162,
        octiCatIcon: icon1,
      },
      {
        octiCatName: 'Boxterocat15',
        octiCatLink: xtocat,
        octiCatNumber: 163,
        octiCatIcon: icon2,
      },
    ]

    return (
      <main>
        {loopOcti.map(oct => {
          return (
            <Octi
              octiCatName={oct.octiCatName}
              octiCatLink={oct.octiCatLink}
              octiCatNumber={oct.octiCatNumber}
              octiCatIcon={oct.octiCatIcon}
            />
          )
        })}
      </main>
    )
  }
}

export default Octis
