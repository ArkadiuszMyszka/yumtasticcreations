import { Form, Header, InputBox, Input, Button, Icon } from "../AuthForm/AuthForm.styled.jsx";
import input_mail from '../../images/ui/input/input_mail.svg';
import input_lock from '../../images/ui/input/input_lock.svg';

export const LoginForm = () => {
    return (<Form>
        <Header>Sign In</Header>
        <InputBox>
            <Input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                autoComplete="off"
            />
            <Icon><use href={`${input_mail}#input_mail`}></use></Icon>
        </InputBox>
        <InputBox>
            <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="off"
            />
            <Icon><use href={`${input_lock}#input_lock`}></use></Icon>
        </InputBox>
        <Button>Sign In</Button>
    </Form>);
}