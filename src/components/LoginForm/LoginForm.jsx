import { Form, Header, InputBox, Input, Button, Icon } from "../AuthForm/AuthForm.styled.jsx";
import icons from "../../images/ui/input/icons.svg"

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
            <Icon><use href={`${icons}#icon-input_mail`}></use></Icon>
        </InputBox>
        <InputBox>
            <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="off"
            />
            <Icon><use href={`${icons}#icon-input_lock`}></use></Icon>
        </InputBox>
        <Button>Sign In</Button>
    </Form>);
}