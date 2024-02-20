interface MyButtonProps {
    onClick: () => void;
}


function MyButton({ onClick }: MyButtonProps) {
    return (
        <button onClick={onClick}>
            I'm a button
        </button>
    );
}

export default MyButton;
