import React from 'react';
import LoggedBarPage from './LoggedBarPage';
import LoggedUserDataForm from './Data/LoggedUserDataForm';
import ImgThinking from '../../assets/thinking.svg';
import LeaguesPage from '../LeaguesP/LeaguesPage'

import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../../services/Firebase/FirebaseService';

function LoggedContentPage() {

    onAuthStateChanged(firebaseAuth, (user) => {
        if (!user) {
            window.location.href = '/Login';
        }
    });

    const USER_PAGE = '/User/';

    const componentUserDataForm = (<LoggedUserDataForm ></LoggedUserDataForm>);

    const componentHeaderNav = (<LoggedBarPage></LoggedBarPage>);

    const componentGeneric = (<><h3>Página seleccionada actualmente en contrucción...</h3><div><img src={ImgThinking} width="250" height="260"></img></div></>);

    function generateUserDataContent(): JSX.Element {
        switch (window.location.pathname) {
            case USER_PAGE: {
                return (componentUserDataForm);
            }
            case USER_PAGE + "Competiciones/": {
                document.title = document.title = 'Mis Competiciones';
                return (<LeaguesPage></LeaguesPage>)
            }
            default: {
                return (componentGeneric);
            }
        }
    }

    return (
        <React.Fragment>
            {componentHeaderNav}
            {generateUserDataContent()}
        </React.Fragment>
    );
}

export default LoggedContentPage;
