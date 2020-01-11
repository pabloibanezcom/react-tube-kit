import Snackbar from 'node-snackbar/dist/snackbar';

const sharedConfig = {
  pos: 'bottom-right'
};

export const info = (text, config) => {
  Snackbar.show({
    ...sharedConfig,
    ...config,
    text,
    customClass: 'notification notification--info'
  });
};

export const warning = (text, config) => {
  Snackbar.show({
    ...sharedConfig,
    ...config,
    text,
    customClass: 'notification notification--warning'
  });
};

export const error = (text, config) => {
  Snackbar.show({
    ...sharedConfig,
    ...config,
    text,
    customClass: 'notification notification--error'
  });
};
