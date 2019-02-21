import { ScientificCalcPipe } from './scientific-calc.pipe';

describe('ScientificCalcPipe', () => {
  it('create an instance', () => {
    const pipe = new ScientificCalcPipe();
    expect(pipe).toBeTruthy();
  });
});
