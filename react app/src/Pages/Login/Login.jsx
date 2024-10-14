import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className='Login'>
      <div className='card'>
        <div className='left'>
          <h2>ArtofLiving</h2>
          <p>
            The Art of Living's official Instagram account offers insights into their global initiatives, events, and teachings. Follow them to stay updated on programs that promote well-being and spiritual growth.
          </p>
          <span>Don't have an account?</span>
          <button className='btn btn-primary'>Register</button>
        </div>

        <form className='right'>
          <input type='text' required placeholder='Username' />
          <input type='password' required placeholder='Password' />
          <button className='btn' type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}
