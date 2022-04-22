type PersonProps = {
    name:{
        firstName: string;
        lastName: string;
    }
}


export const Person = (props: PersonProps) => {
  return (
    <div>
        {props.name.firstName} {props.name.lastName}
    </div>
  )
}
