
export default function getSelectedTypes() {
  const checked = document.querySelectorAll('.custom-checkbox__field[name="type"]:checked');
  return Array.from(checked).map(el => el.value); // пример  ['pendant', 'ceiling']
}