import React from "react";
import fb from "../../images/fb.png";
import tw from "../../images/twitter.png";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        height: "100px",
        padding: "24px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>GulappX</h3>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <img src={fb} width="20px" alt="" />
          <img src={tw} width="20px" alt="" />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>Nosotros</span>
        <span>Ayuda</span>
        <span>Contacto</span>
      </div>
    </div>
  );
}
