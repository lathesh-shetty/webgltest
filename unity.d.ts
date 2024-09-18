declare module 'UnityLoader' {
  export function instantiate(
    containerElement: HTMLElement,
    fileUrl: string,
    options?: object
  ): void;
}