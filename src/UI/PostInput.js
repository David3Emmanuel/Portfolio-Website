import "./PostInput.css";

export default function PostInput({ name, label, value, dispatch, password, disabled, className }) {
    return <div className={className ? "post-input " + className : "post-input"}>
        <p>{label}</p>
        <input
            type={password ? "password" : "text"}
            name={name.toLowerCase()}
            onInput={e => dispatch({ type: name, value: e.target.value })}
            value={value}
            disabled={disabled}
        />
    </div>
}