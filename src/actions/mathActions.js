export function addNumber(number = 1) {
  return {
    type: "ADD",
    payload: number
  };
}

export function subtractNumber(number = 1) {
  return {
    type: "SUBTRACT",
    payload: number
  };
}
