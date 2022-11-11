import nextElementInList from '@/utils/nextEmementList';

describe('nextElementInList', () => {
  it('locates element in list and returns the next element in list', () => {
    const list = ['a', 'b', 'c', 'd', 'e'];
    const value = 'c';
    const result = nextElementInList(list, value);
    expect(result).toBe('d');
  });

  describe('when elements at the end of the list', () => {
    it('locates next element at start if tge list', () => {
      const list = ['a', 'b', 'c', 'd', 'e'];
      const value = 'c';
      const result = nextElementInList(list, value);
      expect(result).toBe('d');
    });
  });
});
