import * as React from 'react';

import Input from './Input';
import Button from './Button';
import Center from './Center';
import { Link } from 'react-router-dom';

import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import  {ILogin} from '../ducks/Users';

class LoginForm extends React.Component<InjectedFormProps<ILogin>> {

    public render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}> 

                <Field label='Correo' placeholder='Correo' name='email' type='email' component={Input} />
                <Field label='Password' placeholder='Password' name='password' type='password' component={Input} />

                <Button block={true} >Enviar</Button>
                <Center>
                    <Link to='/register'>Ir al registro</Link>
                </Center>
            </form>
        )
    }
}

export default reduxForm<ILogin>({
    form: 'login',
})(LoginForm)