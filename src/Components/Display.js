import Card from './Card'

export default function Display({ pokemon, searchBy }) {
  console.log('card pokemon');
  console.log(pokemon);
  console.log('card searchBy ');
  console.log(searchBy);
  return (
    <div className="cards-containers-wrapper">
      {
        pokemon.map((value) =>
          <Card key={value} thisPokemon={value} searchBy={searchBy} />
        )
      }
    </div>
  )
}

