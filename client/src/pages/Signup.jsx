import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Simulated Account Creation for: ${email}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '100px 20px' }}>
      <form onSubmit={handleSignup} style={{ background: '#1e293b', padding: '40px', borderRadius: '12px', width: '100%', maxWidth: '400px', border: '1px solid #334155' }}>
        <h2 style={{ marginBottom: '24px', textAlign: 'center', color: '#f8fafc' }}>Create Account</h2>
        
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#cbd5e1', fontSize: '14px' }}>Work Email</label>
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

        <button type="submit" className="btn-primary" style={{ width: '100%', background: '#3b82f6' }}>Start Free Trial</button>
      </form>
    </div>
  );
};
export default Signup;
