import React, { useEffect, useState } from 'react'
import { ApolloConsumer, gql, useQuery } from '@apollo/client'
import { useContext } from 'react'

export const FetchData = () => {
    // const [rates, setRates] = useState([])
    const GET_DATA = gql`
        query GetExchangeRates {
            rates(currency: "USD") {
            currency
            rate
            }
        }
    
    `
    const { loading, error, data } = useQuery(GET_DATA)
    // setRates(data)
    

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data);

    return (
        <div>
            {data.rates.map(rate => (
                <div>
                    <option key={rate.currency} value={rate.rate}>
                        {rate._type } {rate.currency} : {rate.rate}
                    </option>
                    <br/>
                </div>
                
               
      ))}
        </div>
    )
}
