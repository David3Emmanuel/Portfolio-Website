import { useReducer, useState } from "react";
import { auth, db } from "../utils/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ref, set } from "firebase/database";

export default function useSignIn(redirect, setSignIn) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [errorMessage, setErrorMessage] = useState("");

    function reducer(state, action) {
        setErrorMessage("");
        if (action.type === "EMAIL") return { ...state, email: action.value };
        if (action.type === "PASSWORD") return { ...state, password: action.value };
        if (action.type === "USERNAME") return { ...state, username: action.value };
        return state;
    }

    const [credentials, dispatch] = useReducer(reducer, { email: "", password: "", username: "" })
    const params = { continue: searchParams.get("continue"), message: searchParams.get("message") }

    function handleSignIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then(() => {
                if (redirect) navigate(redirect)
                else if (searchParams.has("continue")) navigate(searchParams.get("continue"))
                else navigate("/")
            })
            .catch(error => {
                if (error.code === "auth/user-not-found") setErrorMessage("Invalid login details.")
                else if (error.code === "auth/invalid-email") setErrorMessage("Invalid email.")
                else {
                    setErrorMessage("Something went wrong.");
                    console.log(error.code);
                }
            })
    }

    function handleSignUp(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredentials) => {
                const uid = userCredentials.user.uid;
                const newUserRef = ref(db, "users/" + uid);
                set(newUserRef, { username: credentials.username, role: "member" })
                if (redirect) navigate(redirect)
                else navigate("/")
            })
            .catch(error => {
                if (error.code === "auth/user-not-found") alert("User not found")
                console.log(error.code)
            })
    }

    return { params, credentials, dispatch, setSignIn, handleSignIn, handleSignUp, errorMessage }
}