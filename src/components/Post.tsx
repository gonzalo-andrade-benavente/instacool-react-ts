import * as React from 'react';
import Footer from './Footer';

const style = {
    backgroundColor: '#ffff',
    border: '1px solid #ddd',
    padding: '10px 15px',
    marginBottom: '10px'
    
}

interface IPostProps {
    image: string
}

export default class Post extends React.Component<IPostProps> {

    public render() {
        const { image } = this.props;
        return(
            <div style={style}>
                <img src={image} alt=""/>
                <Footer />
            </div>
        );
    }


}