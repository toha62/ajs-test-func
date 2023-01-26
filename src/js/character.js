export default function getHealth(character) {
  if (!character) {
    return null;
  }
  if (character.helth > 50) {
    return 'healthy';
  }
  if (character.helth >= 15) {
    return 'wounded';
  }
  return 'critical';
}
