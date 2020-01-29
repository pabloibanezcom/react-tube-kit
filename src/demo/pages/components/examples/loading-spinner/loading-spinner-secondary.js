const html = `<div className="sample-div" >
  <LoadingSpinner
    color="secondary"
    loading={isLoading}
  />
</div>`;

const loadingSpinnerSecondary = {
  id: 'secondary',
  name: 'Secondary',
  html,
  actions: [
    { text: 'Start spinner', textActive: 'Stop spinner', propName: 'isLoading', icon: 'play' }
  ]
};

export default loadingSpinnerSecondary;
