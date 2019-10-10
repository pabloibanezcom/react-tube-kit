const html = `<div className="sample-div" >
  <LoadingSpinner
    noSpinner
    loading={isLoading}
  />
</div>`;

const loadingSpinnerOnlyBg = {
  id: 'onlyBackground',
  name: 'Only background',
  html
};

export default loadingSpinnerOnlyBg;
