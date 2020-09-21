import * as React from 'react';

const style = (center: boolean): React.CSSProperties => ({
    alignItems: center ? 'center' : undefined,
    backgroundColor: '#eee',
    display: 'flex',
    height: 'calc(100vh - 20)',
    justifyContent: center ? 'center' : undefined,
    padding: '10px 15px',
    width: 'calc(100vw - 30)',
    flexDirection: 'column'
})

interface IContainerProps {
    center?: boolean
}

export default class Container extends React.Component<IContainerProps> {

    public render() {
        const { children, center = false} = this.props;
        return(
            <div style={style(center)}>
                {children}
            </div>
        );
    }


}