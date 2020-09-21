import * as React from 'react';
import ProfileImg from '../../components/ProfileImg';
import Button from '../../components/Button';
import Card from '../../components/Card';

const styles = {
    container: {
        padding: '15px'
    }, 
    Row: {
       display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px'
    }
}

export default class Profile extends React.Component {
    public render() {
        return (
            <div style={styles.container}>
                <div style={styles.Row}>

                    <ProfileImg />
                    <Button>Agregar</Button>

                </div>

                <div style={styles.Row}>
                    <Card> <img src='http://placekitten.com/100/100'/> img 1</Card>
                    <Card> <img src='http://placekitten.com/100/100'/>img 2</Card>
                    <Card> <img src='http://placekitten.com/100/100'/>img 3</Card>
                </div>

                <div style={styles.Row}>
                    <Card> <img src='http://placekitten.com/100/100'/> img 1</Card>
                    <Card> <img src='http://placekitten.com/100/100'/>img 2</Card>
                    <Card> <img src='http://placekitten.com/100/100'/>img 3</Card>
                </div>

            </div>

        )
    }
}