//You need to provide the structure of the props you are passing
type GreetProps = {
    name: string;
    messageCount: number;
    isLogged: boolean;
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            {
                props.isLogged ? <h1>Hello {props.name} I am {props.messageCount}</h1> : <h1>"Welcome Guest"</h1>
            }
            <h1></h1>
        </div>
    );
};
