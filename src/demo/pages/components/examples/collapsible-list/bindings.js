import FakeContent from './fakeContent';
import FakeHeader from './fakeHeader';
import lines from './lines.json';

export default {
  lines: lines.slice(0, 9),
  linesA: lines.slice(0, 4),
  linesB: lines.slice(4, 9),
  linesC: lines.slice(9, 14),
  FakeHeader,
  FakeContent
};
