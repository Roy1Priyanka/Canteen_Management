import { useContext, useState, useRef } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const LoginPopup = ({ setShowLogin }) => {
  const { setToken, url, loadCartData } = useContext(StoreContext);
  const [currState, setCurrState] = useState('Sign Up');
  const agreeRef = useRef(null); // ✅ Ref for checkbox

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();

    // ✅ Enforce checkbox validation
    if (!agreeRef.current?.checked) {
      toast.error('Please agree to the terms and privacy policy.');
      return;
    }

    try {
      const endpoint = currState === 'Login' ? '/api/user/login' : '/api/user/register';
      const response = await axios.post(`${url}${endpoint}`, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        loadCartData({ token: response.data.token });
        setShowLogin(false);
        toast.success(`Welcome ${currState === 'Login' ? 'back' : ''}!`);
      } else {
        toast.error(response.data.message || 'Authentication failed.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-popup" onClick={() => setShowLogin(false)}>
      <form
        className="login-popup-container"
        onClick={(e) => e.stopPropagation()}
        onSubmit={onLogin}
        noValidate
      >
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            alt="Close login popup"
            onClick={() => setShowLogin(false)}
            role="button"
            tabIndex={0}
            aria-label="Close login popup"
            onKeyDown={(e) => ['Enter', ' '].includes(e.key) && setShowLogin(false)}
          />
        </div>

        <div className="login-popup-inputs">
          {currState === 'Sign Up' && (
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={data.name}
              onChange={onChangeHandler}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={data.email}
            onChange={onChangeHandler}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={onChangeHandler}
            required
          />
        </div>

        <button type="submit">
          {currState === 'Login' ? 'Login' : 'Create Account'}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" id="agree" ref={agreeRef} />
          <label htmlFor="agree">
            By continuing, I agree to the <strong>terms of use</strong> &{' '}
            <strong>privacy policy</strong>.
          </label>
        </div>

        <p>
          {currState === 'Login' ? (
            <>
              New here?{' '}
              <span
                role="button"
                tabIndex={0}
                onClick={() => setCurrState('Sign Up')}
                onKeyDown={(e) => ['Enter', ' '].includes(e.key) && setCurrState('Sign Up')}
              >
                Create an account
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span
                role="button"
                tabIndex={0}
                onClick={() => setCurrState('Login')}
                onKeyDown={(e) => ['Enter', ' '].includes(e.key) && setCurrState('Login')}
              >
                Login here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

LoginPopup.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default LoginPopup;
