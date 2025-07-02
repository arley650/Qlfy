
// Security utilities for input validation and sanitization
console.log('Security utils: Loading security utilities...');

export const sanitizeInput = (input: string): string => {
  try {
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
  } catch (error) {
    console.error('Security utils: Error in sanitizeInput:', error);
    return input.trim(); // Fallback to basic trim
  }
};

export const validateEmail = (email: string): boolean => {
  try {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) && email.length <= 254;
  } catch (error) {
    console.error('Security utils: Error in validateEmail:', error);
    return false;
  }
};

export const validateTextLength = (text: string, maxLength: number): boolean => {
  try {
    return text.length <= maxLength && text.length > 0;
  } catch (error) {
    console.error('Security utils: Error in validateTextLength:', error);
    return false;
  }
};

export const validateName = (name: string): boolean => {
  try {
    const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
    return nameRegex.test(name.trim());
  } catch (error) {
    console.error('Security utils: Error in validateName:', error);
    return false;
  }
};

export const validateSubject = (subject: string): boolean => {
  try {
    return validateTextLength(subject, 100) && subject.trim().length >= 3;
  } catch (error) {
    console.error('Security utils: Error in validateSubject:', error);
    return false;
  }
};

export const validateMessage = (message: string): boolean => {
  try {
    return message.length <= 1000;
  } catch (error) {
    console.error('Security utils: Error in validateMessage:', error);
    return false;
  }
};

// Rate limiting helper
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 300000) { // 5 attempts per 5 minutes
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
    console.log('Security utils: RateLimiter initialized');
  }

  isAllowed(identifier: string): boolean {
    try {
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
    } catch (error) {
      console.error('Security utils: Error in RateLimiter.isAllowed:', error);
      return true; // Allow by default if there's an error
    }
  }
}

// Create a global rate limiter instance
export const formRateLimiter = new RateLimiter();

console.log('Security utils: All security utilities loaded successfully');
