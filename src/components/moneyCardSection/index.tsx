import React from 'react'
import { MoneyCard } from 'components'
import { HistoricalCoinService } from 'services/historicalCoinService';
import bitcoin from 'assets/images/bitcoin.svg'
import ethereum from 'assets/images/ethereum.svg'
import nem from 'assets/images/nem.svg'
import ripple from 'assets/images/ripple.svg'
import './index.scss'

export const MoneyCardSection = () => {
  const cardsConfig = [
    {
      crypto: "BTC",
      name: "Bitcoin",
      color: "#FFC246",
      image: bitcoin
    },
    {
      crypto: "ETH",
      name: "Ethereum",
      color: "#5470DE",
      image: ethereum
    },
    {
      crypto: "XEM",
      name: "NEM",
      color: "#47DFCF",
      image: nem
    },
    {
      crypto: "XRP",
      name: "Ripple",
      color: "#93D7FD",
      image: ripple
    }
  ]


  const config = cardsConfig.reduce((acum: any[], item, index) => {
    if (!(index % 2)) { acum.push([item, cardsConfig[index + 1]]) }
    return acum
  }, [])

  return <section className="moneyCardSection">
    {
      config.map((itemConfig) => <div>
        {itemConfig.map((card: any) =>
          <MoneyCard
            request={() => HistoricalCoinService({ crypto: card.crypto, currency: "EUR" })}
            name={card.name}
            contraction={card.crypto}
            color={card.color}
            image={card.image}
          />
        )}

      </div>
      )
    }
  </section>

}