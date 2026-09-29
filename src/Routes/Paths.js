/**
 * Application Routes
 
 * Keep all application paths in this file instead of writing route strings directly throughout your components.
 
 * This makes your routes:
 * - Easier to find and manage
 * - Easier to update later
 * - Less likely to contain spelling mistakes
 
 * HOW TO USE:
 
 * 1. Add your routes under the appropriate section.
 * 2. Remove routes you don't need from the structure provided below
 * 3. Add new sections that your project requires .
 
 * Example:
 
 * PATHS.public.home
 * PATHS.public.about
 * PATHS.auth.login
 
 * You can create your own structure depending on your project.

 */

export const PATHS = {
  // Public pages that anyone can access
  public: {
    home: "/",
    about: "/about",
    membership: "/membership",
    choosePlan: "/membership/choose",
    payment: "/payment",
    paymentSuccess: "/payment/success",
    accessCard: "/access-card",
  },

  // Authentication-related pages

  auth: {
    login: "/login",
    register: "/register",
    verifyEmail: "/verify-email",
  },

  // Add your main application pages here

  app: {
    dashboard: "/dashboard",
    profile: "/profile",
    exercises: "/exercises",
    workoutPlans: "/workout-plans",
    nutrition: "/nutrition",
    progress: "/progress",
    workoutDetails: "/workout-plans/details",
  },
  // Admin / Front Desk pages
  admin: {
    dashboard: "/admin",
    memberVerification: "/admin/member",
  },
  
  // Pages that are shared across the application if available
  shared: {
    notFound: "*",
    unauthorized: "/403",
  }
}