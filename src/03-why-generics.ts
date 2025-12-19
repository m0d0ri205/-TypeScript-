// src/03-why-generics.ts

// ============================================
// 문제: 숫자 배열용 함수
// ============================================

function getFirstNumber(arr: number[]): number {
  return arr[0];
}

const numbers = [1, 2, 3];
const first = getFirstNumber(numbers);  // 1
console.log(first);

// ============================================
// 문제: 문자열 배열도 필요해요!
// ============================================

function getFirstString(arr: string[]): string {
  return arr[0];
}

const names = ["철수", "영희", "민수"];
const firstName = getFirstString(names);  // "철수"
console.log(firstName);

// 🤦 코드 중복이 너무 많아요!
// 숫자용, 문자열용, 불린용... 계속 만들어야 하나요?