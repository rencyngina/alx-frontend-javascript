export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // disable-next-line
		const task = true;
    // disable-next-line
		const task2 = false;
  }

  return [task, task2];
}
