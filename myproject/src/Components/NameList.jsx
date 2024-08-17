import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Akilan',
      age: 30,
      skill: 'React' 
    },
    {
      id: 2,
      name: 'Kablian',
      age: 20,
      skill: 'JavaScript' }
  ];

  const personList = persons.map(person => (
    <Person key={person.id}  person={person}></Person>
  ));

  return <div>{personList}</div>;
}

export default NameList;