export interface User {
    id: number;
    name: string;
    email: string;
}
export declare class UserService {
    private users;
    addUser(user: User): void;
    findById(id: number): User | undefined;
}
export declare function validateEmail(email: string): boolean;
export declare const MAX_USERS = 1000;
interface Product {
    id: number;
    name: string;
    price: number;
}
declare class ProductService {
    private products;
    addProduct(product: Product): void;
}
declare function calculateDiscount(price: number): number;
declare const TAX_RATE = 0.1;
export { Product, ProductService, calculateDiscount, TAX_RATE };
declare class InternalUserManager {
}
export { InternalUserManager as UserManager };
//# sourceMappingURL=user.d.ts.map