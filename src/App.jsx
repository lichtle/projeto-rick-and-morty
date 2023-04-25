import { useState } from "react";
import "./App.css";
import Header from "./components/header/index.jsx";
import getCharacter from "./services";

getCharacter(5);

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main-container">
        <div className="intro-container">
          <div className="about">
            <h1 className="about-title">Sobre Rick and Morty</h1>
            <p className="synopsis">
              Rick Sanchez é um cientista genial e alcoólatra que foi morar com a
              família de sua filha Beth, uma cirurgiã cardíaca de equinos. Ele
              divide seu tempo entre desenvolver projetos altamente tecnológicos
              em seu laboratório (garagem da casa de Beth) e levar seu neto de 14
              anos Morty em aventuras perigosas e surreais pelo Multiverso.
              Combinados com tensões preexistentes dentro da família, esses
              eventos causam ao sensível Morty muito angústia em casa e na escola.
            </p>
          </div>
          <div className="discover">
            <h2 className="discover-title">Descubra personagens</h2>
            <p className="click-the-button-paragraph">
              Clique no portal para descobrir um personagem aleatório!
            </p>
          </div>
          <div className="button-container">
            <p className="btn-paragraph">Get Schwifty!</p>
            <button>
              <img className="btn-portal" src="src/assets/portal.png" alt="" />
            </button>
          </div>
        </div>
        <div className="character-result-container">
          <h2>Jerry Smith</h2>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
            alt="Jerry Smith"
            width="250"
          />
          <p>Gênero: Masculino</p>
          <p>Espécie: Humano</p>
          <p>Origem: Planeta Terra</p>
          <p>Número de episódios em que aparece: xx</p>
        </div>
      </main>
    </div>
  );
}

export default App;
