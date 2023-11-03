import React, { useState } from 'react';

function StartButton() {
  const [websiteUrl, setWebsiteUrl] = useState(''); // Initialize with an empty string
  const [wordToClick, setWordToClick] = useState(''); // Initialize with an empty string

  const openWebsiteAndClick = (word, url) => {
    const newTab = window.open(url, '_blank');
    
    setTimeout(() => {
      const wordElement = newTab.document.querySelector(`a:contains('${word}')`);
      if (wordElement) {
        wordElement.click();
      }
    }, 5000);
  }

  const handleStartClick = () => {
    openWebsiteAndClick(wordToClick, websiteUrl);
  }

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
      <button onClick={handleStartClick}>Start</button>
    </div>
  );
}

export default StartButton;
