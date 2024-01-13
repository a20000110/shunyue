export {};

declare global {
  interface Window {
    verificationPassed: boolean;
    onYouTubeIframeAPIReady: () => void;
    YT: any;
    Vimeo: any;
  }
}
