const html = `<div className="sample-div" >
  <LoadingSpinner
    loading={isLoading}
  />
</div>`;

const loadingSpinnerPrimary = {
  id: 'primary',
  name: 'Primary',
  html,
  actions: [
    { text: 'Start spinner', textActive: 'Stop spinner', propName: 'isLoading', icon: 'play' }
  ]
};

export default loadingSpinnerPrimary;
