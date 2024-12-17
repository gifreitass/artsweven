const BackofficeNavItems: React.FC<{ children: string }> = (props) => {
    return (
        <p className="cursor-pointer">{props.children}</p>
    )
}

export default BackofficeNavItems