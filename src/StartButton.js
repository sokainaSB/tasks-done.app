import React, { useState } from 'react';

function StartButton() {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [wordToClick, setWordToClick] = useState('');

  const openWebsiteInNewWindow = () => {
    if (websiteUrl && wordToClick) {
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        console.log('New window opened');
        newWindow.location.href = websiteUrl;

        newWindow.addEventListener('load', () => {
          console.log('Page fully loaded');
          const wordElement = newWindow.document.querySelector(`a:contains('${wordToClick}')`);
          if (wordElement) {
            console.log('Word found, clicking on it');
            wordElement.click();
          } else {
            console.log('Word not found');
          }
        });
      } else {
        console.error('Unable to open a new window. Make sure your browser allows pop-ups.');
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Website URL"
        value={websiteUrl}
        onChange={(e) => setWebsiteUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Word to Click"
        value={wordToClick}
        onChange={(e) => setWordToClick(e.target.value)}
      />
      <button onClick={openWebsiteInNewWindow}>Start</button>
    </div>
  );
}

export default StartButton;
