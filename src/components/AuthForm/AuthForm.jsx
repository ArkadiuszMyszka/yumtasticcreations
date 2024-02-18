import { Form, Header, InputBox, Input, Button, Icon } from "./AuthForm.styled";
import input_user from '../../images/ui/input/input_user.svg';
import input_mail from '../../images/ui/input/input_mail.svg';
import input_lock from '../../images/ui/input/input_lock.svg';

export const AuthForm = () => {
    return (<Form>
        <Header>Registration</Header>
        <InputBox>
            <Input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="off"
            />
            <Icon><use href={`${input_user}#input_user`}></use></Icon>
        </InputBox>
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
        <Button>Sign up</Button>
    </Form>);
}