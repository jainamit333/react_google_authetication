import { firebaseAuth, provider} from './config'
import {alreadyLogin, authError, authSuccess, startAuth} from "../../redux/actions/auth";
import store from '../../redux/store'


export function logout () {

    return firebaseAuth().signOut()
}

function doLogin() {

    firebaseAuth().signInWithPopup(provider).then(function(result) {
        store.dispatch(authSuccess(result.user))

    }).catch(function(error) {
        store.dispatch(authError(error))
    });
}

export function login () {

    firebaseAuth().onAuthStateChanged((response) => {
        if(response){
            store.dispatch(alreadyLogin(response))
        }else{
            store.dispatch(startAuth())
            doLogin()
        }
    });
    return
}