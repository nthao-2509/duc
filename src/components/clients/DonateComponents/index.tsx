import React from "react";
import { DonateStyled } from "../styles/Donate";
import Container from "../Container";
import { Button, Checkbox, Upload, message } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { dataLogin } from "modules/data-fake";

const DonateComponent = (props: {
  image: string;
  heading: string | undefined;
  title: string | undefined;
  desc: string | undefined;
  donateForm: boolean;
  OTP: boolean;
  signIn: boolean;
  signUp: boolean;
  reverse: boolean;
}) => {
  const [checked, setChecked] = React.useState(true);
  const [signin_userName, setSignin_userName] = React.useState<string>("");
  const [signin_password, setSignin_password] = React.useState<string>("");
  const navigate = useNavigate();
  const onHandleLogin = () => {
    if (!signin_userName || !signin_password) {
      return message.error("123");
    } else {
      if (
        signin_userName === dataLogin?.[0].userName &&
        signin_password === dataLogin?.[0].password
      ) {
        localStorage.setItem(
          "user_login",
          JSON.stringify({ user: signin_userName, password: signin_password })
        );
        navigate("/admin");
        return;
      }
    }
  };

  return (
    <DonateStyled
      orderLeft={props.reverse ? 2 : 1}
      orderRight={props.reverse ? 1 : 2}
    >
      <Container>
        <div className='donate'>
          <div className='donate__left'>
            <img src={props.image} alt='donate' />
            <div className='content__image'>
              <div className='content'>
                {props.heading && (
                  <div className='heading'>
                    <h3>{props.heading}</h3>
                  </div>
                )}
                {props.title && (
                  <div className='title'>
                    <h1>{props.title}</h1>
                  </div>
                )}
                {props.desc && (
                  <div className='desc'>
                    <p>{props.desc}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='donate__right'>
            <div className='content'>
              {props.signIn && (
                <>
                  <div className='input'>
                    <input
                      type='text'
                      onChange={(value) =>
                        setSignin_userName(value.target.value)
                      }
                      placeholder='Username'
                    />
                  </div>
                  <div className='input'>
                    <input
                      type='password'
                      placeholder='Password'
                      onChange={(value) =>
                        setSignin_password(value.target.value)
                      }
                    />
                  </div>
                  <Checkbox checked={checked}>Remember me</Checkbox>
                  <button onClick={onHandleLogin} className='donate'>
                    Login
                  </button>
                  <NavLink to={"/auth/sign-up"}>Don’t have an account?</NavLink>
                </>
              )}
              {props.signUp && (
                <>
                  <div className='input'>
                    <input type='text' placeholder='Username' />
                  </div>
                  <div className='input'>
                    <input type='password' placeholder='Password' />
                  </div>
                  <div className='input'>
                    <input
                      type='password'
                      placeholder='Password Confirmation'
                    />
                  </div>
                  <div className='input'>
                    <input type='email' placeholder='Email' />
                  </div>
                  <div className='input'>
                    <input type='text' placeholder='Number Phone' />
                  </div>
                  <div className='input'>
                    <input type='date' />
                  </div>
                  <div className='input'>
                    <input type='text' placeholder='Your City' />
                  </div>
                  <div className='input'>
                    <input type='text' placeholder='Your Province' />
                  </div>
                  <div className='input'>
                    <input type='text' placeholder='Address' />
                  </div>
                  <div className='input'>
                    <input type='text' placeholder='Bank Account' />
                  </div>
                  <Upload>
                    <Button className='button__upload'>
                      Upload your avatar
                    </Button>
                  </Upload>
                  <button className='donate'>Sign Up</button>
                </>
              )}
              {props.OTP && (
                <>
                  <div className='input'>
                    <input type='text' placeholder='OTP' />
                  </div>
                  <button className='donate'>Confirm</button>
                </>
              )}
              {props.donateForm && (
                <>
                  <div className='input'>
                    <input type='text' placeholder='Donate Amount' />
                  </div>
                  <div className='input'>
                    <textarea rows={10} placeholder='Message' />
                  </div>
                  <button className='donate'>Donate Now</button>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </DonateStyled>
  );
};

export default DonateComponent;
