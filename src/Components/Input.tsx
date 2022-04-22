type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

//Destructuring Props in Typescript 
export const Input = ({value, handleChange}: InputProps) => { 
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }
  return (
    <div>
        <input type="text" value={value} onChange={handleInputChange}/>
    </div>
  )
}
