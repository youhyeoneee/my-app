import React, { useState, useMemo } from "react";


function calculatePrimes(limit) {
    console.log(`limit: ${limit}에 대한 소수 계산`)
    const primes = [];
    for(let i=2; i<=limit; i++) {
        let isPrime = true;
        for(let j=2; j<i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primes.push(i);
        }
    }

    return primes;
}

export default function PrimeCalculator(props) {
    const [limit, setLimit] = useState(10);
    // const primes = calculatePrimes(limit);
    const primes = useMemo(() => calculatePrimes(limit), [limit]);
    return (
        <div>
            <input 
                type="number" 
                value={limit} 
                onChange={(e) => setLimit(Number(e.target.value))}/>
            <p>계산된 소수 : {primes.join(', ')}</p>
        </div>
    )
}