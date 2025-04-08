import { useState, useEffect } from 'react'
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import bgImage from './assets/bgImage.jpeg';
import './App.css'

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    if (!currencyInfo[to]) return;
    // if(amount == 0) setConvertedAmount(0);
    else setConvertedAmount(amount * currencyInfo[to]);
  }

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  useEffect(() => {
    if (amount && currencyInfo[to] || amount == 0) {
      convert();
    }
  }, [from, to, amount, currencyInfo, convertedAmount]);
  

    return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url(${bgImage})`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          // convert();
                         
                      }}
                  >
                      <div className="w-full mb-1">
                      <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setFrom(currency)}
                        onAmountChange={(amount) =>{ setAmount(amount); convert();}}
                        selectCurrency={from}
          
                      />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={() => swap()}
                            
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                      <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setTo(currency)}
                        onAmountChange={(amount) => setAmount(amount)}
                        selectCurrency={to}
                        amountDisable
                      />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );

}

export default App
