import React from 'react';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Titles from "./Titles"
import Form from "./Form"
import { Redirect } from "react-router-dom";





// Initialize Firebase
var config = {
    apiKey: "AIzaSyAN3AAPOYqIwoMoAvQS7wxFvGAKSdKMM2c",
    authDomain: "gradepro-fdd35.firebaseapp.com",
    databaseURL: "https://gradepro-fdd35.firebaseio.com",
    projectId: "gradepro-fdd35",
    storageBucket: "gradepro-fdd35.appspot.com",
    messagingSenderId: "111488404223"
};
firebase.initializeApp(config);




class Home extends React.Component {

    state = {
        user: undefined,
        pass: undefined,
        error: undefined,
        district: "Klein ISD", // temporary hard code,
        isSignedIn: false
    }


    // Configure FirebaseUI.
    uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/signedIn',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false
        }
    };

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }



    loginUser = async (e) => {
        e.preventDefault();

        const districtName = "Klein ISD" //Hard coded for now
        const userName = e.target.elements.user.value
        const password = e.target.elements.pass.value

        this.setState({
            user: userName,
            pass: password,
            district: districtName
        })

        const data = "Test"
        console.log(data);

        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })

    }



    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="bottom-btn-group">
                                {this.state.isSignedIn

                                    ?
                                    (
                                        // ui is user signs in
                                        <Redirect to="./gradebook"></Redirect>

                                    )

                                    :

                                    (
                                        //ui if user not signed in
                                        <StyledFirebaseAuth className="firebase-btn" uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}></StyledFirebaseAuth>
                                    )

                                }
                            </div>
                            <div className="col-xl form-container">
                                <Titles district={this.state.district} className="titleTag"></Titles>
                                <Form className="loginForm" loginUser={this.loginUser}></Form>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}

export default Home;
