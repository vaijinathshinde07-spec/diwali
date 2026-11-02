import test from 'node:test';
import assert from 'node:assert/strict';
import {
  INITIAL_DIYAS,
  toggleDiyaState,
  lightAllDiyas,
  calculateLitPercentage,
  areAllDiyasLit,
  createLanternWish,
} from './diwaliState';

test('diwaliState: toggleDiyaState toggles correctly', () => {
  const initial = INITIAL_DIYAS;
  const dreamsDiya = initial.find((d) => d.id === 'dreams');
  assert.equal(dreamsDiya?.isLit, false);

  const updated = toggleDiyaState(initial, 'dreams');
  const updatedDreams = updated.find((d) => d.id === 'dreams');
  assert.equal(updatedDreams?.isLit, true);

  const toggledBack = toggleDiyaState(updated, 'dreams');
  assert.equal(toggledBack.find((d) => d.id === 'dreams')?.isLit, false);
});

test('diwaliState: calculateLitPercentage and areAllDiyasLit', () => {
  const initial = INITIAL_DIYAS;
  // 2 out of 5 lit initially -> 40%
  assert.equal(calculateLitPercentage(initial), 40);
  assert.equal(areAllDiyasLit(initial), false);

  const allLit = lightAllDiyas(initial);
  assert.equal(calculateLitPercentage(allLit), 100);
  assert.equal(areAllDiyasLit(allLit), true);
});

test('diwaliState: createLanternWish trims text and sets author', () => {
  const wish = createLanternWish('   May Rutuja be happy forever   ', 'Rutuja');
  assert.equal(wish.text, 'May Rutuja be happy forever');
  assert.equal(wish.author, 'Rutuja');
  assert.ok(wish.id.startsWith('lantern-'));
});
