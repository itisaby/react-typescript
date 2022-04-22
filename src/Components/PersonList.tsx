type PersonsProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
}

//Array of objects

export const PersonList = (props: PersonsProps) => {
  return (
    <div>
        <h2>List of people</h2>
        {props.names.map((name) => {
          return(
            <h3>{name.firstName}{name.lastName}</h3>
          )
        })}
    </div>
  )
}
