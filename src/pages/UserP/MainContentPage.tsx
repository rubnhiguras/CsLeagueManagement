import React from 'react';
import LoggedBarPage from './LoggedBarPage'; 
import ImgThinking from '../../assets/thinking.svg';
import LeaguesPage from '../LeaguesP/LeaguesPage'
import FeedPage from '../Feed/FeedPage';

function MainContentPage() {
    const MAIN_PAGE = '/Main/'; 
    
    const componentHeaderNav = (<LoggedBarPage></LoggedBarPage>); 

    const componentGeneric = (<><h3>Página seleccionada actualmente en contrucción...</h3><div><img src={ImgThinking} width="250" height="260"></img></div></>);

    function generateUserDataContent(): JSX.Element {
        switch (window.location.pathname) {
            case MAIN_PAGE: {
                document.title = document.title = 'Feed';
                return (<FeedPage></FeedPage>)
            }
            case MAIN_PAGE + "Competiciones/": {
                document.title = document.title = 'Competiciones';
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

export default MainContentPage;
