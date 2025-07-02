
// Security utilities for input validation and sanitization

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/[<>&"']/g, (match) => {
      const escape: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#x27;'
      };
      return escape[match] || match;
    });
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const validateTextLength = (text: string, maxLength: number): boolean => {
  return text.length <= maxLength && text.length > 0;
};

export const validateName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
  return nameRegex.test(name.trim());
};

export const validateSubject = (subject: string): boolean => {
  return validateTextLength(subject, 100) && subject.trim().length >= 3;
};

export const validateMessage = (message: string): boolean => {
  return message.length <= 1000;
};

// Rate limiting helper
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 300000) { // 5 attempts per 5 minutes
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }

    // Add current attempt
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    
    return true;
  }
}

// Create a global rate limiter instance
export const formRateLimiter = new RateLimiter();
