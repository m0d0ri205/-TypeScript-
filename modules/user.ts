// src/modules/user.ts

// ============================================
// 1. Named Export - 개별 export
// ============================================

// 방법 1: 선언과 동시에 export
export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  findById(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }
}

export function validateEmail(email: string): boolean {
  return email.includes("@");
}

export const MAX_USERS = 1000;

// ============================================
// 2. Named Export - 한 번에 export
// ============================================

interface Product {
  id: number;
  name: string;
  price: number;
}

class ProductService {
  private products: Product[] = [];
  
  addProduct(product: Product): void {
    this.products.push(product);
  }
}

function calculateDiscount(price: number): number {
  return price * 0.9;
}

const TAX_RATE = 0.1;

// 한 번에 export
export { Product, ProductService, calculateDiscount, TAX_RATE };

// ============================================
// 3. Named Export - 이름 바꿔서 export
// ============================================

class InternalUserManager {
  // 내부 구현
}

// 다른 이름으로 export
export { InternalUserManager as UserManager };