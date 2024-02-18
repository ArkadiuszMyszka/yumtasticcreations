import { Form, Header, InputBox, Input } from "./AuthForm.styled"

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
            <Input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                autoComplete="off"
            />
            <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="off"
            />
        </InputBox>
    </Form>);
}