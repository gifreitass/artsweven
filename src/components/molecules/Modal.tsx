interface IProps extends React.PropsWithChildren {
    handleClickButton: () => void
}

const Modal: React.FC<IProps> = (props) => {
    return (
        <div className="w-full h-screen fixed left-0 top-0 bg-black bg-opacity-30 flex justify-center items-center">
            <div className="w-1/4 h-1/4 relative bg-white rounded-md shadow-md pt-9">
                <img onClick={props.handleClickButton} className="w-4 absolute right-3 top-3 cursor-pointer" src="/images/close.png" alt="close button" />
                {props.children}
            </div>
        </div>
    )
}

export default Modal