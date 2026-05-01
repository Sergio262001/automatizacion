import React from 'react';

const Features = () => {
  return (
    <div style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '48px', color: '#ffffff', marginBottom: '16px' }}>Powerful Features for Teams</h1>
        <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
          Discover the tools you need to automate your workflows, connect your data, and scale your business effortlessly.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Feature 1 */}
        <div style={{ background: '#1e293b', padding: '30px', borderRadius: '12px', border: '1px solid #334155' }}>
          <div style={{ background: '#2563eb', width: '40px', height: '40px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🛠️</div>
          <h3 style={{ color: '#f8fafc', fontSize: '20px', marginBottom: '12px' }}>Drag-and-Drop Visual Builder</h3>
          <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Create complex multi-step workflows without writing a single line of code. Our intuitive builder makes automation accessible to everyone.</p>
        </div>

        {/* Feature 2 */}
        <div style={{ background: '#1e293b', padding: '30px', borderRadius: '12px', border: '1px solid #334155' }}>
          <div style={{ background: '#8b5cf6', width: '40px', height: '40px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🤖</div>
          <h3 style={{ color: '#f8fafc', fontSize: '20px', marginBottom: '12px' }}>Smart AI Routing</h3>
          <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Use artificial intelligence to route data conditionally, extract text from emails, and generate responses automatically on the fly.</p>
        </div>

        {/* Feature 3 */}
        <div style={{ background: '#1e293b', padding: '30px', borderRadius: '12px', border: '1px solid #334155' }}>
          <div style={{ background: '#10b981', width: '40px', height: '40px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>⚡</div>
          <h3 style={{ color: '#f8fafc', fontSize: '20px', marginBottom: '12px' }}>Real-time Execution</h3>
          <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Your automations run instantly. No polling delays. Experience webhooks and event-driven architecture running at the speed of thought.</p>
        </div>

        {/* Feature 4 */}
        <div style={{ background: '#1e293b', padding: '30px', borderRadius: '12px', border: '1px solid #334155' }}>
          <div style={{ background: '#f59e0b', width: '40px', height: '40px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🔒</div>
          <h3 style={{ color: '#f8fafc', fontSize: '20px', marginBottom: '12px' }}>Enterprise-Grade Security</h3>
          <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>We encrypt your connection credentials and provide detailed audit logs, SSO integrations, and roles-based access controls.</p>
        </div>

      </div>
    </div>
  );
};

export default Features;
