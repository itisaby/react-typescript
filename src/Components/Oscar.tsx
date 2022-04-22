type OscarProps = {
    children: React.ReactNode   //came react@types
}

export const Oscar = (props: OscarProps) => {
  return (
    <div>{props.children}</div>
  )
}
