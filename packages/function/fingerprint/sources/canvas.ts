import { getNavigatorUserAgent } from './browser';

// canvas指纹
export function getCanvasFingerprint(): string {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = 200;
  canvas.height = 60;

  if (context) {
    context.fillStyle = 'rgba(100, 100, 100, 0.5)';
    context.fillRect(0, 0, 200, 60);

    context.font = '18pt Arial';
    context.fillStyle = 'rgb(50, 50, 50)';
    context.fillText(getNavigatorUserAgent(), 0, 0);

    context.strokeStyle = 'rgb(120, 120, 120)';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(10, 40);
    context.lineTo(190, 40);
    context.stroke();
  }

  return canvas.toDataURL();
}

// WebGL指纹
export function getWebGLFingerprint(): {
  renderer: string;
  vendor: string;
  extensions: string;
} {
  const canvas = document.createElement('canvas');
  const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext;
  let renderer = '';
  let vendor = '';
  let extensionString = '';
  if (gl) {
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);

      const extensions = gl.getSupportedExtensions();
      if (extensions) extensionString = extensions.join(';');
    }
  }

  const fingerprint = {
    renderer: renderer,
    vendor: vendor,
    extensions: extensionString,
  };

  return fingerprint;
}

const demoFingerprint = {
  canvas: getCanvasFingerprint,
  webGl: getWebGLFingerprint,
};

export default demoFingerprint;
