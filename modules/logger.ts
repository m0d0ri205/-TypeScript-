// src/modules/logger.ts

// ============================================
// 1. Default Export - 클래스
// ============================================

export default class Logger {
  log(message: string): void {
    console.log(`[LOG] ${message}`);
  }

  error(message: string): void {
    console.error(`[ERROR] ${message}`);
  }
}

// ============================================
// 2. Default Export - 함수
// ============================================

// src/modules/utils.ts
export default function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

// ============================================
// 3. Default Export - 상수
// ============================================

// src/modules/config.ts
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retryCount: 3
};

export default config;