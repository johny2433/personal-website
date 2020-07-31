import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/johny2433/personal-website/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork johny2433/personal-website on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/johny2433/personal-website"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star johny2433/personal-website on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
