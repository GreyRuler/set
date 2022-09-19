import { expect, test } from '@jest/globals';
import Team from '../Team';
import Character from '../Character';

test('should add a Character class object to the members property', () => {
  const team = new Team();
  const character = new Character();
  team.add(character);
  expect(team.members.has(character)).toBe(true);
});

test('should add a Character class object to the members property', () => {
  const team = new Team();
  const character = new Character();
  team.add(character);
  const f = () => team.add(character);
  expect(f).toThrowError(Error(`Персонаж ${character} уже существует`));
});

test('should add objects of the Character class to the members property', () => {
  const team = new Team();
  const character1 = new Character();
  const character2 = new Character();
  const character3 = new Character();
  team.addAll(character1, character2, character3);
  const result = [...team.members].reduce(
    (bool, item) => [character1, character2, character3].includes(item),
    false,
  );
  expect(result).toBe(true);
});

test('should check whether the returned value is an Array', () => {
  const team = new Team();
  const character1 = new Character();
  const character2 = new Character();
  const character3 = new Character();
  team.addAll(character1, character2, character3);
  const result = team.toArray();
  expect(result instanceof Array).toBe(true);
});
