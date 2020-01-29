const html = `<div className="sample-div" >
  <LoadingSpinner
    background="dark"
    loading={isLoading}
  />
</div>`;

const loadingSpinnerDarkBg = {
  id: 'darkBackground',
  name: 'Dark background',
  html,
  actions: [
    { text: 'Start spinner', textActive: 'Stop spinner', propName: 'isLoading', icon: 'play' }
  ]
};

export default loadingSpinnerDarkBg;
