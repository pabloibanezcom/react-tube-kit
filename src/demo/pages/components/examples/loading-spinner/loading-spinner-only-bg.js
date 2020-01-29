const html = `<div className="sample-div" >
  <LoadingSpinner
    noSpinner
    loading={isLoading}
  />
</div>`;

const loadingSpinnerOnlyBg = {
  id: 'onlyBackground',
  name: 'Only background',
  html,
  actions: [
    { text: 'Start spinner', textActive: 'Stop spinner', propName: 'isLoading', icon: 'play' }
  ]
};

export default loadingSpinnerOnlyBg;
