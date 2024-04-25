import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>Sayfa Bulunamadı!</h1>
      <Link>Ana Sayfaya Geri Dön</Link>
    </div>
  );
};
