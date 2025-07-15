import React from 'react';

const Settings = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("images/Ground.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        backdropFilter: 'blur(4px)',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
      }}
    >
      <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: 'white', padding: '2rem', borderRadius: '8px' }}>
        <h2>User Settings Page</h2>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="firstName" style={{ display: 'block', marginBottom: '0.5rem' }}>
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="lastName" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="dob" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>

          <button type="submit" style={{ padding: '0.5rem 1rem' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
