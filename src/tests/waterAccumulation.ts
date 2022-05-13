import samples from './samples.json';
import waterAccumulation from '../waterAccumulation';

describe('check water accumulation', () => {
  test.each(samples)(
    '$sample must return $result)',
    (item: { sample: number[]; result: number }) => {
      expect(waterAccumulation(item.sample)).toBe(item.result);
    },
  );
});
