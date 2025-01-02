import React, { useState } from 'react';

function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(12); // Default password length
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
    const allCharacters = upperCase + lowerCase + numbers + specialCharacters;

    let newPassword = '';

    // Ensure at least one character from each group is included
    newPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    newPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    newPassword += numbers[Math.floor(Math.random() * numbers.length)];
    newPassword += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    // Fill the rest of the password
    for (let i = newPassword.length; i < passwordLength; i++) {
      newPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    // Shuffle the password
    newPassword = newPassword.split('').sort(() => Math.random() - 0.5).join('');

    setPassword(newPassword);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '21px' }}>
      <h1>Password Generator</h1>
      <label>
        Password Length:
        <input
          type="number"
          min="4"
          max="30"
          value={passwordLength}
          onChange={(e) => setPasswordLength(Number(e.target.value))}
          style={{ marginLeft: '10px', padding: '5px', width: '50px' }}
        />
      </label>
      <br />
      <button onClick={generatePassword} style={{ marginTop: '10px', padding: '10px 20px' }}>
        Generate Password
      </button>
      {password && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <strong>Generated Password:</strong>
          <p style={{ color: '#007BFF', wordWrap: 'break-word' }}>{password}</p>
        </div>
      )}
    </div>
  );
}

export default PasswordGenerator;
