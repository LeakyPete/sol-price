import React, { useState, useEffect } from 'react';

export default function Price() {
    const [solPrice, setSolPrice] = useState(null)

    useEffect(() => {
        function updatePrice() {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd')
        .then(response => response.json())
        .then(json => setSolPrice(json))
        .catch(error => console.error(error))
        }
        updatePrice()
        const update = setInterval(() => updatePrice(), 15000)
        return () => {
            clearInterval(update)
        }
    }, [])

    return(
        <div>
            {solPrice ? <pre>{JSON.stringify(solPrice.solana.usd, null, 2)}</pre> : 'Loading...'}
        </div>
    )
}
