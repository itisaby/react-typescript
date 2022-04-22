type StatusProps = {
    status: "success" | "error" | "loading";
}

export const Status = (props: StatusProps) => {
    let message;
    if(props.status === 'loading') {
        message = 'Loading...';
    } else if(props.status === 'success') {
        message = 'Success!';
    } else{
        message = 'Error!';
    }
  return (
    <div>
        <h2>{message}</h2>
        
    </div>
  )
}
