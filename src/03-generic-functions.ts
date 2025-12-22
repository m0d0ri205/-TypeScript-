
// ============================================
// 1. 기본 제네릭 함수
// ============================================

// <T>는 "Type"의 약자 (관례)
// 어떤 타입이든 받을 수 있음
function identity<T>(value: T): T {
  return value;
}

// 사용 방법 1: 타입 명시
const num1 = identity<number>(123);
const str1 = identity<string>("hello");

// 사용 방법 2: 타입 추론 (더 자주 씀!)
const num2 = identity(456);      // TypeScript가 number로 추론
const str2 = identity("world");  // TypeScript가 string으로 추론

console.log(num2);  // 타입: number
console.log(str2);  // 타입: string

// ============================================
// 2. 배열 다루기
// ============================================

// 마지막 요소 반환
function getLast<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

const lastNumber = getLast([1, 2, 3, 4]);     // number | undefined
const lastName = getLast(["a", "b", "c"]);    // string | undefined

console.log(lastNumber);  // 4
console.log(lastName);    // "c"

// ============================================
// 3. 여러 제네릭 타입 사용
// ============================================

// T와 U 두 개의 타입 변수!
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pair1 = pair("철수", 25);           // [string, number]
const pair2 = pair(true, "활성화");       // [boolean, string]
const pair3 = pair(100, { x: 10, y: 20 }); // [number, {x: number, y: number}]

console.log(pair1);  // ["철수", 25]
console.log(pair2);  // [true, "활성화"]

// ============================================
// 4. 실전 예제: 배열 필터링
// ============================================

function filterArray<T>(
  arr: T[],
  predicate: (item: T) => boolean
): T[] {
  const result: T[] = [];
  for (const item of arr) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}

// 숫자 배열 필터링
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, (n) => n % 2 === 0);
console.log(evenNumbers);  // [2, 4, 6]

// 문자열 배열 필터링
const names = ["철수", "영희", "민수", "지영"];
const longNames = filterArray(names, (name) => name.length > 2);
console.log(longNames);  // ["민수", "지영"]

// ============================================
// 5. 객체 배열 필터링
// ============================================

interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}

const users: User[] = [
  { id: 1, name: "철수", age: 25, isActive: true },
  { id: 2, name: "영희", age: 30, isActive: false },
  { id: 3, name: "민수", age: 28, isActive: true },
];

// 활성 사용자만 필터링
const activeUsers = filterArray(users, (user) => user.isActive);
console.log(activeUsers);
// [
//   { id: 1, name: "철수", age: 25, isActive: true },
//   { id: 3, name: "민수", age: 28, isActive: true }
// ]

// 30세 미만 필터링
const youngUsers = filterArray(users, (user) => user.age < 30);
console.log(youngUsers);

// ============================================
// 6. 제네릭으로 API 응답 처리
// ============================================

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

function createSuccessResponse<T>(data: T): ApiResponse<T> {
  return {
    success: true,
    data: data,
    message: "성공"
  };
}

// 사용자 데이터 응답
const userResponse = createSuccessResponse({
  id: 1,
  name: "철수",
  email: "chulsoo@example.com"
});
console.log(userResponse.data.name);  // "철수"

// 숫자 배열 응답
const numbersResponse = createSuccessResponse([1, 2, 3, 4, 5]);
console.log(numbersResponse.data[0]);  // 1

// 문자열 응답
const messageResponse = createSuccessResponse("안녕하세요!");
console.log(messageResponse.data);  // "안녕하세요!"