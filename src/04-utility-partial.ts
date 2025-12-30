// src/04-utility-partial.ts

// 기본 인터페이스
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// 사용자를 만들 때는 모든 정보가 필요
const user: User = {
  id: 1,
  name: "철수",
  email: "chulsoo@example.com",
  age: 25
  // 하나라도 빠지면 에러!
};

// ============================================
// 문제 상황: 사용자 정보 업데이트
// ============================================

// 사용자 정보를 업데이트하는 함수
// 모든 필드를 다 받아야 할까요?
function updateUser(id: number, updates: User): void {
  console.log(`사용자 ${id} 업데이트`);
}

// 이름만 바꾸고 싶은데...
updateUser(1, {
  id: 1,
  name: "김철수",
  email: "chulsoo@example.com",  // 이것도 써야 함
  age: 25                         // 이것도 써야 함
  // 😰 변경 안 하는 것도 다 써야 함!
});