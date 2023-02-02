import { compress } from 'image-conversion';

function readAsDataURL(data: File | Blob): Promise<string> {
  return new Promise(function (resolve) {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = function () {
      resolve(this.result as string);
    };
  });
}

// File转化为Base64
export function fileToBase64(file: File): Promise<string> {
  return readAsDataURL(file);
}
// File转化为二进制字符串
export function fileToBinaryString(file: File): Promise<string> {
  return new Promise(function (resolve) {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      resolve(this.result as string);
    };
  });
}

// File转化为二进制数组
export function fileToArrayBuffer(file: File): Promise<ArrayBuffer> {
  return new Promise(function (resolve) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function () {
      resolve(this.result as ArrayBuffer);
    };
  });
}

// Base64转化为Blob流
export function base64ToBlob(base64Data: string): Blob {
  let byteString;
  if (base64Data.split(',')[0].indexOf('base64') >= 0)
    byteString = window.atob(base64Data.split(',')[1]);
  //base64 解码
  else {
    byteString = decodeURIComponent(base64Data.split(',')[1]);
  }
  const mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0]; //mime类型 -- image/png
  // 方式一
  // let arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
  // let ia = new Uint8Array(arrayBuffer);//创建视图
  // 方式二
  const ia = new Uint8Array(byteString.length); //创建视图
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ia], {
    type: mimeString,
  });
  return blob;
}

// Base64转化为File
export function base64toFile(dataurl: string, filename: String = 'file'): File {
  const arr = dataurl.split(',');
  const mimeArr = arr[0].match(/:(.*?);/) as RegExpMatchArray;
  const mime = mimeArr[1] as string;
  const suffix = mime.split('/')[1];
  const bstr = window.atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], `${filename}.${suffix}`, {
    type: mime,
  });
}

// Blob流转化为Base64
export function blobToBase64(data: Blob): Promise<string> {
  return readAsDataURL(data);
}

// Blob流转化为File
export function blobToFile(data: Blob, fileName: string): File {
  const files = new File([data], fileName, { type: data.type });
  return files;
}

// 二进制字符串转化为Blob
export function binaryStringToBlob(binaryString: string, type: string): Blob {
  const uint8 = Uint8Array.from(binaryString, (c) => c.charCodeAt(0));
  const blob = new Blob([uint8], { type });
  return blob;
}

// 二进制数组转化为Blob
export function arrayBufferToBlob(arrayBuffer: ArrayBuffer): Blob {
  const blob = new Blob([arrayBuffer]);
  return blob;
}

//压缩图片
export function beforeAvatarUpload(file: File): Promise<Blob> {
  return new Promise((resolve) => {
    // 压缩到100KB,这里的100就是要压缩的大小,可自定义
    compress(file, 0.4).then((res) => {
      resolve(res);
    });
  });
}

// url图片转成base64
export function urlToBase64(url: string, fileType?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const canvas: HTMLCanvasElement | null = document.createElement('CANVAS') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
      if (!canvas || !ctx) {
        return reject();
      }
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0);

      const dataURL = canvas.toDataURL(fileType || 'image/png', 0.7);
      console.log(dataURL);

      // canvas = null;
      resolve(dataURL);
    };
    img.src = url;
  });
}

// 下载Url图片
export function downloadUrlImage(url: string, fileName: string, fileType?: string) {
  urlToBase64(url, fileType).then((res) => {
    downloadFile(base64ToBlob(res), fileName);
  });
}

// 下载Url文件
export function downloadUrlFile(
  url: string,
  fileName: string,
  requestOption?: RequestInit,
  fileType?: string,
) {
  downloadUrlToBlob(url, requestOption).then(async (res) => {
    downloadFile(res, fileName, fileType);
  });
}

// Url下载Blob
export function downloadUrlToBlob(url: string, requestOption?: RequestInit): Promise<Blob> {
  return new Promise((resolve, reject) => {
    fetch(url, requestOption).then((res) => {
      if (res.status === 200) {
        resolve(res.blob());
      } else {
        reject();
      }
    });
  });
}

// 保存文件到本地
export function downloadFile(data: Blob, fileName: string, fileType?: string) {
  const blobData = [data];
  const blob = new Blob(blobData, { type: fileType || 'application/octet-stream' });

  const blobURL = window.URL.createObjectURL(blob);
  const tempLink = document.createElement('a');
  tempLink.style.display = 'none';
  tempLink.href = blobURL;
  tempLink.setAttribute('download', fileName);
  if (typeof tempLink.download === 'undefined') {
    tempLink.setAttribute('target', '_blank');
  }
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  window.URL.revokeObjectURL(blobURL);
}

// 获取复制图片方法（beta）
export function pasteImage() {
  document.addEventListener('paste', async (event) => {
    console.log(event);
    const items = event.clipboardData && event.clipboardData.items;
    let file: File = {} as File;
    if (items && items.length) {
      // 检索剪切板items
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          file = items[i].getAsFile() as File;
          console.log(file);
          console.log(await fileToBase64(file));
        }
      }
    }
  });
}
