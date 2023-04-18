import { useState } from "react";
import "./App.css";
import Header from "./components/header/index.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main-container">
        <div className="intro-container">
          <h1 className="about">Sobre Rick and Morty</h1>
          <p className="synopsis">
            Rick Sanchez é um cientista genial e alcoólatra que foi morar com a
            família de sua filha Beth, uma cirurgiã cardíaca de equinos. Ele
            divide seu tempo entre desenvolver projetos altamente tecnológicos
            em seu laboratório (garagem da casa de Beth) e levar seu neto de 14
            anos Morty em aventuras perigosas e surreais pelo Multiverso.
            Combinados com tensões preexistentes dentro da família, esses
            eventos causam ao sensível Morty muito angústia em casa e na escola.
          </p>
          <h2 className="discover">Descubra personagens</h2>
          <p className="click-the-button-paragraph">
            Clique no portal para descobrir um personagem aleatório!
          </p>
          <div className="button-container">
            <p className="btn-paragraph">Get Schwifty!</p>
            <button>
              <img className="btn-portal" src="src/assets/portal.png" alt="" />
            </button>
          </div>
        </div>
        <div className="character-result-container">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            expedita quis ab nobis impedit saepe commodi tempore, reprehenderit
            error iusto reiciendis modi nihil autem tempora assumenda quia
            quibusdam amet aliquid.
          </p>
        </div>
      </main>
      <img
        className="morty-footer"
        src="src/assets/morty-footer.png"
        alt="Rick and Morty"
      />
    </div>
  );
}

export default App;
