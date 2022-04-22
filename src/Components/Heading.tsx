type HeeadingProps = {
    children: string;
}

export const Heading = (props: HeeadingProps) =>{
    return(
        <div>
            <h2>Hello World</h2>
            <h1>{props.children}</h1>
        </div>
    )
}