const html = `<div className="sample-div" >
  <LoadingSpinner
    inverse
    loading={isLoading}
  />
</div>`;

const loadingSpinnerInverse = {
  id: 'inverse',
  name: 'Inverse',
  html,
  actions: [
    { text: 'Start spinner', textActive: 'Stop spinner', propName: 'isLoading', icon: 'play' }
  ]
};

export default loadingSpinnerInverse;
