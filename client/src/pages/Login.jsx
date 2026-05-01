import { useState } from 'react';
import { auth } from '../firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Simulated Login sent to Firebase for: ${email}`);
    // console.log(auth) to verify config is loaded
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '100px 20px' }}>
      <form onSubmit={handleLogin} style={{ background: '#1e293b', padding: '40px', borderRadius: '12px', width: '100%', maxWidth: '400px', border: '1px solid #334155' }}>
        <h2 style={{ marginBottom: '24px', textAlign: 'center', color: '#f8fafc' }}>Welcome Back</h2>
        
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#cbd5e1', fontSize: '14px' }}>Email Address</label>
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: 'white', outline: 'none' }} 
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#cbd5e1', fontSize: '14px' }}>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: 'white', outline: 'none' }} 
          />
        </div>

        <button type="submit" className="btn-primary" style={{ width: '100%' }}>Sign In to AutoFlow</button>
      </form>
    </div>
  );
};
export default Login;
