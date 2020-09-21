import * as React from 'react';

const styles = {

    img: {
        borderRadius: '100%'
    }


}

export default class ProfileImg extends React.Component {
    public render() {
        return (
            <div >
                <img style={styles.img} src='http://placekitten.com/100/100' />
            </div>
        )
    }
}