import ACTIONS from "./actions";

export default function bubblesort(arr) {
  const a = [...arr];
  const N = a.length;

  let i = 0;
  let j;
  let swap;

  const animations = [];

  do {
    swap = false;
    for (j = 0; j < N - i - 1; ++j) {
      animations.push([ACTIONS.compare, j, j + 1]);
      if (a[j] > a[j + 1]) {
        swap = true;
        animations.push([ACTIONS.swap, j, j + 1]);
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
    i += 1;
  } while (swap);

  return animations;
}
