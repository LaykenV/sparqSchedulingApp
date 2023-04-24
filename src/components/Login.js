import React, { useEffect } from "react";
import { Authenticator, useAuthenticator, View, translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useNavigate, useLocation } from "react-router-dom";
import { I18n } from "aws-amplify";
I18n.putVocabularies(translations);
I18n.setLanguage("en");

I18n.putVocabulariesForLanguage("en", {
    Username: "Enter your Email",
    "Given Name": "First Name",
    "Family Name": "Last Name"
})

const Login = () => {
    const { route } = useAuthenticator((context) => [context.route]);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (route === "authenticated") {
            navigate('/profile');
        }
    }, [route, navigate, from]);
    return (
        <View className="auth-wrapper">
            <Authenticator signUpAttributes={["given_name", "family_name"]}></Authenticator>
        </View>
    )
}

export { Login };