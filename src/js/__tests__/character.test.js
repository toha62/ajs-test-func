import getHealth from '../character';

test.each([
  ['healthy', 120],
  ['wounded', 50],
  ['wounded', 30],
  ['wounded', 15],
  ['critical', 14],
  ['critical', 1],
])('should return %s for %i level health', (healthDescription, health) => {
  const result = getHealth({ name: '', health });

  expect(result).toBe(healthDescription);
});

test('should return null without args', () => {
  const result = getHealth();

  expect(result).toBeNull();
});
