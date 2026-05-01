import React from 'react';

const Docs = () => {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)', borderTop: '1px solid #1e293b' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', background: '#0f172a', borderRight: '1px solid #1e293b', padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h4 style={{ color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Getting Started</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ color: '#3b82f6', fontSize: '14px', cursor: 'pointer' }}>Introduction</li>
            <li style={{ color: '#cbd5e1', fontSize: '14px', cursor: 'pointer' }}>Quickstart Guide</li>
            <li style={{ color: '#cbd5e1', fontSize: '14px', cursor: 'pointer' }}>Your First Workflow</li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', marginTop: '10px' }}>Concepts</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ color: '#cbd5e1', fontSize: '14px', cursor: 'pointer' }}>Triggers</li>
            <li style={{ color: '#cbd5e1', fontSize: '14px', cursor: 'pointer' }}>Actions</li>
            <li style={{ color: '#cbd5e1', fontSize: '14px', cursor: 'pointer' }}>Conditional Logic</li>
            <li style={{ color: '#cbd5e1', fontSize: '14px', cursor: 'pointer' }}>Variables & Data</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '40px', background: '#0f172a' }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{ color: '#3b82f6', fontSize: '14px', marginBottom: '8px' }}>Getting Started / Introduction</div>
          <h1 style={{ fontSize: '36px', color: '#fff', marginBottom: '24px' }}>Introduction to AutoFlow</h1>
          
          <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
            AutoFlow is a powerful, visual automation tool designed to connect your favorite apps and move data between them automatically. 
            Whether you want to send a Slack notification when a new Shopify order comes in, or automatically add lead data from Facebook Ads to your Salesforce CRM, AutoFlow handles the heavy lifting.
          </p>

          <h2 style={{ fontSize: '24px', color: '#fff', marginTop: '40px', marginBottom: '16px' }}>How it Works</h2>
          <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
            Every automation in AutoFlow is called a <strong>Workflow</strong>. A workflow consists of two main parts:
          </p>

          <div style={{ background: '#1e293b', borderLeft: '4px solid #3b82f6', padding: '20px', borderRadius: '0 8px 8px 0', marginBottom: '20px' }}>
            <h3 style={{ color: '#e2e8f0', fontSize: '18px', marginBottom: '8px' }}>1. The Trigger</h3>
            <p style={{ color: '#94a3b8', fontSize: '15px' }}>This is the event that starts the workflow. For example: "When a new row is added to Google Sheets".</p>
          </div>

          <div style={{ background: '#1e293b', borderLeft: '4px solid #10b981', padding: '20px', borderRadius: '0 8px 8px 0', marginBottom: '30px' }}>
            <h3 style={{ color: '#e2e8f0', fontSize: '18px', marginBottom: '8px' }}>2. The Action</h3>
            <p style={{ color: '#94a3b8', fontSize: '15px' }}>This is the task AutoFlow performs after the trigger happens. For example: "Send an email via Gmail".</p>
          </div>

          <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.7' }}>
            When you're ready, move on to the <strong>Quickstart Guide</strong> to build your very first workflow from scratch.
          </p>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #1e293b' }}>
            <button className="btn-primary">Next: Quickstart Guide →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
