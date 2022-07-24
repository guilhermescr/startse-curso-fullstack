import { getPeople } from "./StarWarsService.js";

async function main() {
  const starWarsPeople = await getPeople(1);
  const totalHeight = starWarsPeople.reduce((total, person) => {
    total += Number(person.height);

    return total;
  }, 0);

  console.log('Média da altura', totalHeight / starWarsPeople.length);

  /* ForOF
  for (let person of starWarsPeople) {
    console.log(person);
  }
  */
  
  /* ForIN
  for (let propPerson in starWarsPeople[0]) {
    console.log(starWarsPeople[0][propPerson]);
  }
  */

  /* FOR
  for (let i=0; i<starWarsPeople.length; i++) {
    console.log(starWarsPeople[i].name);
  }
  */
}

main();