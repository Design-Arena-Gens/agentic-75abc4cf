'use client';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f3f2ef', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#fff',
        borderBottom: '1px solid #e0e0e0',
        padding: '0 24px',
        height: '52px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0a66c2' }}>in</div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1128px', margin: '24px auto', padding: '0 24px' }}>
        {/* Profile Card */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '8px',
          border: '1px solid #e0e0e0'
        }}>
          {/* Cover Photo */}
          <div style={{
            height: '200px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}></div>

          {/* Profile Info */}
          <div style={{ padding: '0 24px 24px' }}>
            {/* Profile Picture */}
            <div style={{
              width: '152px',
              height: '152px',
              borderRadius: '50%',
              backgroundColor: '#0a66c2',
              border: '4px solid #fff',
              marginTop: '-76px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              color: '#fff',
              fontWeight: 'bold'
            }}>
              FG
            </div>

            {/* Name and Title */}
            <h1 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 4px 0', color: '#000' }}>
              Frank Grimes
            </h1>
            <p style={{ fontSize: '16px', color: '#000', margin: '0 0 12px 0' }}>
              Nuclear Safety Technician at Springfield Nuclear Power Plant
            </p>
            <p style={{ fontSize: '14px', color: '#666', margin: '0 0 16px 0' }}>
              Springfield, USA
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <button style={{
                backgroundColor: '#0a66c2',
                color: '#fff',
                border: 'none',
                borderRadius: '16px',
                padding: '8px 24px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Connect
              </button>
              <button style={{
                backgroundColor: '#fff',
                color: '#0a66c2',
                border: '1px solid #0a66c2',
                borderRadius: '16px',
                padding: '8px 24px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Message
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 12px 0', color: '#000' }}>
            About
          </h2>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#000', margin: 0 }}>
            Dedicated nuclear safety technician with extensive experience in power plant operations and safety protocols.
            Self-made professional who worked his way up from difficult circumstances. Known for exceptional attention to
            detail, strong work ethic, and commitment to following proper procedures. Passionate about nuclear safety and
            maintaining the highest standards in the workplace.
          </p>
        </div>

        {/* Experience Section */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 20px 0', color: '#000' }}>
            Experience
          </h2>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#2ecc71',
              borderRadius: '4px',
              flexShrink: 0
            }}></div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0', color: '#000' }}>
                Nuclear Safety Technician
              </h3>
              <p style={{ fontSize: '14px', color: '#666', margin: '0 0 4px 0' }}>
                Springfield Nuclear Power Plant
              </p>
              <p style={{ fontSize: '12px', color: '#666', margin: '0 0 8px 0' }}>
                1996 - Present
              </p>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#000', margin: 0 }}>
                • Monitor and maintain nuclear safety systems<br/>
                • Conduct regular safety inspections and audits<br/>
                • Ensure compliance with federal safety regulations<br/>
                • Document safety procedures and protocols
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#e74c3c',
              borderRadius: '4px',
              flexShrink: 0
            }}></div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0', color: '#000' }}>
                Various Positions
              </h3>
              <p style={{ fontSize: '14px', color: '#666', margin: '0 0 4px 0' }}>
                Multiple Employers
              </p>
              <p style={{ fontSize: '12px', color: '#666', margin: '0 0 8px 0' }}>
                1970s - 1996
              </p>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#000', margin: 0 }}>
                Worked multiple jobs to support myself through difficult circumstances, including positions in
                manufacturing, service industry, and technical roles.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 20px 0', color: '#000' }}>
            Education
          </h2>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#3498db',
              borderRadius: '4px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              color: '#fff',
              fontWeight: 'bold'
            }}>
              🎓
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0', color: '#000' }}>
                Nuclear Safety Certification
              </h3>
              <p style={{ fontSize: '14px', color: '#666', margin: '0 0 4px 0' }}>
                Springfield Technical Institute
              </p>
              <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>
                Completed 1996
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 16px 0', color: '#000' }}>
            Skills
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['Nuclear Safety', 'Regulatory Compliance', 'Safety Inspections', 'Technical Documentation',
              'Quality Control', 'Attention to Detail', 'Problem Solving', 'Work Ethic'].map(skill => (
              <span key={skill} style={{
                backgroundColor: '#f3f2ef',
                padding: '8px 16px',
                borderRadius: '16px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#000'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
