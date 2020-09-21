import * as React from 'react';
import {Link} from 'react-router-dom';

import { faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
    navbar: {
        borderBottom: 'solid 1px #aaa',
        padding: '10px 15px'
    },
    link: {
        color: '#555',
        textDecoration: 'none'

    }
    
}

export default class Navbar extends React.Component {

    public render() {
        return(
            
            <div style={styles.navbar}>
                <Link to='/app/newsfeed' style={styles.link}><FontAwesomeIcon icon={faNewspaper }/>Instacool</Link>
                <div style={{ float: 'right'}}>
                    <Link to='/app/profile' style={styles.link}><FontAwesomeIcon icon={faUser}/>Perfil</Link>
                </div>
            </div>
        )
    }
}