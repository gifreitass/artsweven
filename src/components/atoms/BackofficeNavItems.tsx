const BackofficeNavItems: React.FC<{ children: string, image: string }> = (props) => {
    return (
        <div className="flex gap-3 items-center">
            <img src={props.image} alt="logo" className="w-5 h-5" />
            <p className="cursor-pointer font-medium text-[#273056]">{props.children}</p>
        </div>
    )
}

export default BackofficeNavItems