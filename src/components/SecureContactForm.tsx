
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle, Shield } from "lucide-react";
import { 
  sanitizeInput, 
  validateEmail, 
  validateName, 
  validateSubject, 
  validateMessage,
  formRateLimiter 
} from "@/utils/security";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string; // Hidden field for bot detection
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  general?: string;
}

export const SecureContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Honeypot check (bot detection)
    if (formData.honeypot) {
      newErrors.general = 'Submission blocked for security reasons.';
      setErrors(newErrors);
      return false;
    }

    // Name validation
    if (!validateName(formData.name)) {
      newErrors.name = 'Name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes.';
    }

    // Email validation
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Subject validation
    if (!validateSubject(formData.subject)) {
      newErrors.subject = 'Subject must be 3-100 characters long.';
    }

    // Message validation
    if (!validateMessage(formData.message)) {
      newErrors.message = 'Message must be less than 1000 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Sanitize input (except for honeypot)
    const sanitizedValue = name === 'honeypot' ? value : sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting
    const clientId = `${navigator.userAgent}-${window.location.hostname}`;
    if (!formRateLimiter.isAllowed(clientId)) {
      setErrors({ general: 'Too many submissions. Please wait before trying again.' });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual submission logic)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Secure form submitted:', {
        ...formData,
        honeypot: undefined, // Don't log honeypot
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrors({ general: 'An error occurred while submitting the form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Shield className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">Secure Contact Form</h2>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <span className="text-green-800">Your message has been sent successfully!</span>
        </div>
      )}

      {errors.general && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <span className="text-red-800">{errors.general}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users but visible to bots */}
        <div style={{ display: 'none' }}>
          <Label htmlFor="honeypot">Leave this field empty</Label>
          <Input
            id="honeypot"
            name="honeypot"
            type="text"
            value={formData.honeypot}
            onChange={handleInputChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full rounded-lg border-gray-300"
            required
            maxLength={50}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Your email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full rounded-lg border-gray-300"
            required
            maxLength={254}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full rounded-lg border-gray-300"
            required
            maxLength={100}
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Your message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full h-32 rounded-lg border-gray-300 resize-none"
            placeholder="Tell us more about your inquiry..."
            maxLength={1000}
            disabled={isSubmitting}
          />
          <div className="mt-1 text-sm text-gray-500">
            {formData.message.length}/1000 characters
          </div>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <div className="text-center">
          <Button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Securely'}
          </Button>
        </div>
      </form>

      <div className="mt-4 text-xs text-gray-500 text-center">
        <Shield className="h-3 w-3 inline mr-1" />
        This form is protected by security measures including input validation, rate limiting, and bot detection.
      </div>
    </div>
  );
};
