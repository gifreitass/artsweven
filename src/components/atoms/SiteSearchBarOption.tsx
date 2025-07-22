import React from "react"

const SiteSearchBarOption: React.FC<{ image: string, imageDescription: string, title: string }> = (props) => {
    return (
        <div className="flex flex-col items-center gap-1.5">
            <img className="w-7" src={props.image} alt={props.imageDescription} />
            <p className="text-white text-xs">{props.title}</p>
        </div>
    )
}

export default SiteSearchBarOption