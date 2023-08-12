import "./PostInput.css";

export default function PostInput({ name, label, value, dispatch, password, disabled }) {
    return <div className="post-input">
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