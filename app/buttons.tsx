"use client";
import GitHubButton from 'react-github-btn'
import { Follow } from 'react-twitter-widgets'

//
export function GitHub() {
  return (
    <GitHubButton href="https://github.com/qrlew/qrlew" data-size="large" data-show-count="true" aria-label="Star qrlew/qrlew on GitHub">Star</GitHubButton>
  );
}

export function Twitter() {
  return (
    <Follow username="sarus_tech" options={{size: "large"}}></Follow>
  );
}