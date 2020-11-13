import axios from "axios";
import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      nickname: "",
      errorMessage: ""
    }
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleNicknameChange = (e) => {
    this.setState({
      nickname: e.target.value,
    });
  };

  handleSignup = (e) => {
    e.preventDefault();
    let error = document.getElementsByClassName('error')[0];
    const { email, password, nickname } = this.state;
    const signupData = { email: email, password: password, nickName: nickname };

    if (!signupData.email.includes('@')) {
      error.style.display = "block";
      this.setState({
        errorMessage: "이메일 형식에 맞지 않습니다."
      })
    }
    else if (signupData.password.length < 8) {
      error.style.display = "block";
      this.setState({
        errorMessage: "비밀번호는 8자리 이상이어야 합니다."
      })
    }
    else if (!signupData.nickname) {
      error.style.display = "block";
      this.setState({
        errorMessage: "닉네임을 입력해주세요."
      })
    }
    else {
      error.style.display = "none";
    }

    // axios.post("http://3.35.208.49:5000/signup", signupData)
    //   .then((res) => {
    //     // 회원가입에 성공하면 로그인 페이지로 이동
    //     if (res.status === 200) {
    //       document.location.href = "/login";
    //     }
    //     else if (res.status === 409) {
    //       error.style.display = "block";
    //       this.setState({
    //         errorMessage: "이메일 또는 닉네임이 이미 존재합니다."
    //       })
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
  }

  render() {
    const { email, password, nickname, errorMessage } = this.state;
    const { handleEmailChange, handlePasswordChange, handleNicknameChange, handleSignup } = this;
    return (
      <div className="signup_wrap">
        <div className="signup email">
          <span className="span">email: </span>
          <input className="input input_email" type="email" placeholder="ex) abc@google.com"
            email={email} onChange={handleEmailChange.bind(this)}></input>
        </div>

        <div className="signup password">
          <span className="span">password: </span>
          <input className="input input_password" type="password" placeholder="비밀번호는 8자리 이상"
            password={password} onChange={handlePasswordChange.bind(this)}></input>
        </div>

        <div className="signup nickname">
          <span className="span">nickname: </span>
          <input className="input input_nickname" type="text" placeholder="ex) 김코딩"
            nickname={nickname} onChange={handleNicknameChange.bind(this)}></input>
        </div>

        <p className="error">{errorMessage}</p>

        <button className="signup_btn" onClick={handleSignup}>회원가입</button>
      </div>
    );
  }
}

// function Signup(props) {
//   return (
//     <div className="signup_wrap">
//       <div className="signup email">
//         <span className="span">email: </span>
//         <input className="input input_email" type="email" placeholder="ex) abc@google.com"></input>
//       </div>

//       <div className="signup password">
//         <span className="span">password: </span>
//         <input className="input input_password" type="password" placeholder="비밀번호는 8자리 이상"></input>
//       </div>

//       <div className="signup nickname">
//         <span className="span">nickname: </span>
//         <input className="input input_nickname" type="text" placeholder="ex) 김코딩"></input>
//       </div>

//       <p className="error"></p>

//       <button className="signup_btn" onClick={SignupCheck}>회원가입</button>
//     </div>
//   );
// }

// function SignupCheck() {
//   let email = document.getElementsByClassName('input_email')[0];
//   let password = document.getElementsByClassName('input_password')[0];
//   let nickname = document.getElementsByClassName('input_nickname')[0];
//   let errorMessage = document.getElementsByClassName('error')[0];

//   if (!email.value.includes('@')) {
//     errorMessage.style.display = "block";
//     errorMessage.textContent = "이메일 형식이 맞지 않습니다.";
//   }
//   else if (password.value.length < 8) {
//     errorMessage.style.display = "block";
//     errorMessage.textContent = "비밀번호는 8자리 이상이어야 합니다.";
//   }
//   else if (!nickname.value) {
//     errorMessage.style.display = "block";
//     errorMessage.textContent = "닉네임을 입력해주세요.";
//   }
//   else {
//     errorMessage.style.display = "none";
//     document.location.href = "/"
//   }
// }

export default Signup;
