import Head from "next/head";
import "./styles.css";
import React from "react";
import CurrencyButtons from "./CurrencyButtons";
export default function Home() {
  return (
    <div className="content">
      <h1 className="title">Bugün Mutlu Musun?</h1>
      <p className="description">Kurların birine tıkla ve üzülmeye başla</p>
      <CurrencyButtons />
    </div>
  );
}
