export const rootRoute = (route) => {
  return `balaji-portfolio/${route}`
}
export const AppRoutes = {
  ROOT: rootRoute(''),
  HOME: rootRoute('home'),
  ABOUT_ME: rootRoute('about-me'),
  CONTACT_ME: rootRoute('contact-me')
} 