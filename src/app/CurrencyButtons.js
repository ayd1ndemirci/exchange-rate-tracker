"use client";

import React, { useState } from "react";

const API_URL = "https://api.exchangerate-api.com/v4/latest";

export default function CurrencyButtons() {
  const [rate, setRate] = useState(null);
  const [rateBgColor, setRateBgColor] = useState("#01161e"); 

  const fetchRate = async (baseCurrency, targetCurrency, currencyName, bgColor) => {
    try {
      const response = await fetch(`${API_URL}/${baseCurrency}`);
      const data = await response.json();
      
      const currencyRate = data.rates[targetCurrency];
      const tlAmount = currencyRate.toFixed(2);
      setRate(`${currencyName} ${tlAmount} TL`);
      setRateBgColor(bgColor);
    } catch (error) {
      console.error("Kuru alırken bir hata oluştu:", error);
    }
  };

  const handleDollarClick = () => {
    fetchRate("USD", "TRY", "Dolar", "#4e594a");
  };

  const handleEuroClick = () => {
    fetchRate("EUR", "TRY", "Euro", "#203e5f"); 
  };

  return (
    <div className="currency-buttons">
      <div className="buttons">
        <button className="dollar" onClick={handleDollarClick}>Dolar</button>
        <button className="euro" onClick={handleEuroClick}>Euro</button>
      </div>
      {rate && (
        <p className="rate" style={{ backgroundColor: rateBgColor }}>
          {rate}
        </p>
      )}
    </div>
  );
}
