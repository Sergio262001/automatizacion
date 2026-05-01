import React from 'react';

const Pricing = () => {
  return (
    <div style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '42px', color: '#fff', marginBottom: '16px' }}>Simple, Transparent Pricing</h1>
      <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '60px' }}>
        Start building for free, then scale up as your automation needs grow.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Starter Plan */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '40px 30px', textAlign: 'left' }}>
          <h3 style={{ color: '#e2e8f0', fontSize: '20px', marginBottom: '8px' }}>Starter</h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '24px' }}>Perfect for individuals exploring automation.</p>
          <div style={{ fontSize: '36px', color: '#fff', fontWeight: 'bold', marginBottom: '24px' }}>$0<span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: 'normal' }}>/month</span></div>
          <button className="btn-secondary" style={{ width: '100%', marginBottom: '30px' }}>Get Started Free</button>
          
          <ul style={{ listStyle: 'none', padding: 0, color: '#cbd5e1', fontSize: '14px' }}>
            <li style={{ marginBottom: '12px' }}>✅ 100 Tasks per month</li>
            <li style={{ marginBottom: '12px' }}>✅ 5 Active Workflows</li>
            <li style={{ marginBottom: '12px' }}>✅ 15 Min Update Time</li>
            <li style={{ marginBottom: '12px' }}>✅ Standard Integrations</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div style={{ background: 'linear-gradient(180deg, rgba(37, 99, 235, 0.1) 0%, #1e293b 100%)', border: '2px solid #3b82f6', borderRadius: '16px', padding: '40px 30px', textAlign: 'left', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#3b82f6', color: 'white', padding: '4px 12px', borderRadius: '99px', fontSize: '12px', fontWeight: 'bold' }}>MOST POPULAR</div>
          <h3 style={{ color: '#e2e8f0', fontSize: '20px', marginBottom: '8px' }}>Professional</h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '24px' }}>For teams needing powerful workflow tools.</p>
          <div style={{ fontSize: '36px', color: '#fff', fontWeight: 'bold', marginBottom: '24px' }}>$49<span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: 'normal' }}>/month</span></div>
          <button className="btn-primary" style={{ width: '100%', marginBottom: '30px' }}>Start 14-Day Trial</button>
          
          <ul style={{ listStyle: 'none', padding: 0, color: '#cbd5e1', fontSize: '14px' }}>
            <li style={{ marginBottom: '12px' }}>✨ 5,000 Tasks per month</li>
            <li style={{ marginBottom: '12px' }}>✨ Unlimited Workflows</li>
            <li style={{ marginBottom: '12px' }}>✨ 1 Min Update Time</li>
            <li style={{ marginBottom: '12px' }}>✨ Premium Integrations (Salesforce, etc)</li>
            <li style={{ marginBottom: '12px' }}>✨ Multi-step branching</li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '40px 30px', textAlign: 'left' }}>
          <h3 style={{ color: '#e2e8f0', fontSize: '20px', marginBottom: '8px' }}>Enterprise</h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '24px' }}>Advanced security and scaling required.</p>
          <div style={{ fontSize: '36px', color: '#fff', fontWeight: 'bold', marginBottom: '24px' }}>Custom</div>
          <button className="btn-secondary" style={{ width: '100%', marginBottom: '30px' }}>Contact Sales</button>
          
          <ul style={{ listStyle: 'none', padding: 0, color: '#cbd5e1', fontSize: '14px' }}>
            <li style={{ marginBottom: '12px' }}>✅ Unlimited Tasks</li>
            <li style={{ marginBottom: '12px' }}>✅ Dedicated Account Manager</li>
            <li style={{ marginBottom: '12px' }}>✅ Single Sign-On (SSO)</li>
            <li style={{ marginBottom: '12px' }}>✅ Custom Integrations</li>
            <li style={{ marginBottom: '12px' }}>✅ 99.9% Uptime SLA</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
