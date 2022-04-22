type PersonsProps = {
  names: {
    firstName: string;
    lastName: string;
    id: number;
  }[];
}

//Array of objects

export const PersonList = (props: PersonsProps) => {
  return (
    <div>
        <h2>List of people</h2>
        {props.names.map((name) => {
          return(
            <h3>{name.firstName}{name.lastName} {name.id}</h3>
          )
        })}
    </div>
  )
}
