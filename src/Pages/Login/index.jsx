import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import logo from '../../Assets/logo.svg';
import './styles.scss';

const LoginPage = () => {
  return (
    <>
      <Header/>
        <div className="login-page">
            <div className="login-page__logo">
                <img src={logo} alt="" />
            </div>
            <br />
            <div className="login-page__options">
                <button className="login-btn" onClick={() => alert('COMING SOON')}>
                <i className="fab fa-github"></i> Login with GitHub
                </button>
                <button className="login-btn" onClick={() => alert('COMING SOON')}>
                <i className="fab fa-gitlab"></i> Login with GitLab
                </button>
                <button className="login-btn" onClick={() => alert('COMING SOON')}>
                <i className="fab fa-microsoft"></i> Login with Azure DevOps
                </button>
                <button className="login-btn" onClick={() => alert('COMING SOON')}>
                <i className="fab fa-bitbucket"></i> Login with Bitbucket Cloud
                </button>
            </div>

            <p className="login-page__footer">
                Don’t have an account? <a href="/signup">Sign up here.</a>
            </p>
            <p className="login-page__terms">
                By continuing, you agree to the <a href="/terms">Terms of Use</a> and <a href="/privacy">Privacy Policy</a> applicable to CodeBroom.
            </p>
        </div>
        <Footer/>
    </>
  );
};

export default LoginPage;
