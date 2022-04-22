type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


export const Input = (props: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }
  return (
    <div>
        <input type="text" value={props.value} onChange={handleInputChange}/>
    </div>
  )
}
