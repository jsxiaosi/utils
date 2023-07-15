export function openFullScreen(element: HTMLElement | null = document.body): void {
  if (!element) {
    element = document.documentElement;
  }
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if ((element as any).mozRequestFullScreen) {
    /* Firefox */
    (element as any).mozRequestFullScreen();
  } else if ((element as any).webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    (element as any).webkitRequestFullscreen();
  } else if ((element as any).msRequestFullscreen) {
    /* IE/Edge */
    (element as any).msRequestFullscreen();
  }
}

export function closeFullScreen(): void {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if ((document as any).mozCancelFullScreen) {
    /* Firefox */
    (document as any).mozCancelFullScreen();
  } else if ((document as any).webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    (document as any).webkitExitFullscreen();
  } else if ((document as any).msExitFullscreen) {
    /* IE/Edge */
    (document as any).msExitFullscreen();
  }
}
