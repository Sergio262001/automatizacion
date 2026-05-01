import React from 'react';

const Integrations = () => {
  const apps = [
    { name: 'Slack', icon: '💬', color: '#4A154B' },
    { name: 'Google Workspace', icon: '✉️', color: '#EA4335' },
    { name: 'Salesforce', icon: '☁️', color: '#00A1E0' },
    { name: 'Shopify', icon: '🛒', color: '#95BF47' },
    { name: 'Notion', icon: '📝', color: '#000000' },
    { name: 'Stripe', icon: '💳', color: '#635BFF' },
    { name: 'HubSpot', icon: '🎯', color: '#FF7A59' },
    { name: 'Zendesk', icon: '🎧', color: '#03363D' },
    { name: 'GitHub', icon: '🐙', color: '#24292E' },
    { name: 'Discord', icon: '🎮', color: '#5865F2' },
    { name: 'Trello', icon: '📋', color: '#0052CC' },
    { name: 'Mailchimp', icon: '🐵', color: '#FFE01B' },
  ];

  return (
    <div style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '42px', color: '#fff', marginBottom: '16px' }}>Connect Your Favorite Apps</h1>
      <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '60px' }}>
        AutoFlow integrates with over 500+ applications. Sync your data across platforms instantly.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '20px' 
      }}>
        {apps.map((app, index) => (
          <div key={index} style={{
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              width: '50px', 
              height: '50px', 
              borderRadius: '12px', 
              background: '#334155', // fallback background
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '24px',
              marginBottom: '16px',
              borderBottom: `3px solid ${app.color}`
            }}>
              {app.icon}
            </div>
            <h3 style={{ color: '#e2e8f0', fontSize: '16px', fontWeight: '500' }}>{app.name}</h3>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '60px' }}>
        <button className="btn-secondary" style={{ padding: '12px 30px' }}>View All 500+ Integrations</button>
      </div>
    </div>
  );
};

export default Integrations;
