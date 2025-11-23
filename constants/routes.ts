export const ROUTES = {
  HOME: '/',
  SIGN_IN: '/sign-in',
  SIGN_OUT: '/sign-out',
  ASK_QUESTION: "/ask-question",
  QUESTION: (id: string) => (`/question/${id}`),
  PROFILE: (id: string) => (`/profile/${id}`),
  TAGS: (id: string) => (`/tags/${id}`),
}