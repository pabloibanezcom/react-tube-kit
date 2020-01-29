const getFileIconName = file => {
  switch (file.type) {
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return 'file-excel-o';
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'file-word-o';
    case 'application/pdf':
      return 'file-pdf-o';
    case 'image/jpeg':
    case 'image/bmp':
    case 'image/png':
      return 'file-image-o';
    case 'text/plain':
    case 'text/html':
      return 'file-text-o';
    case 'video/mp4':
      return 'file-video-o';
    default:
      return getFileTypeFromFileName(file.name);
  }
};

const getFileTypeFromFileName = fileName => {
  switch (fileName.split('.').pop()) {
    case 'zip':
    case 'rar':
      return 'file-zip-o';
    case 'psd':
      return 'file-image-o';
    default:
      return 'file-o';
  }
};

export default getFileIconName;
