import SelectorLine from '../../../../components/custom-components/selector-line/selector-line';
import lines from './lines.json';

const html = `<div className="width-200">
  <Selector
    options={lines}
    optionClassName="p-0"
    custom={SelectorLine}
    customProp="line"
    maxOptions={20}
  />
</div>`;

const selectorOptionCustomClass = {
  id: 'selectorOptionCustomClass',
  name: 'Option custom class',
  html,
  bindings: { lines, SelectorLine }
};

export default selectorOptionCustomClass;
