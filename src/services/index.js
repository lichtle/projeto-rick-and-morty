async function getCharacter(value) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${value}`
    );
    const json = response.json();
    console.log(json);
  } catch (error) {
    console.error("Erro ao fazer o fetch:", error);
  }
}

export default getCharacter;
