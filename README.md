## API Doc
### Authentication API
- **Create a new user - GET /signup**
    - Display form where gives user ability to sign up
    - post `{ email: your@email.com, password: yourpassword }`
    - will create a new user with that email
    - will send verification email to user
  - **Sign in - GET /signin**
      - Displays sign in form to sign in
- **Verify New User - GET /verify/:userID/:emailKey**
    - Page that verifies email, by sending userID and :emailKey to backend
    -   **:userID** - the user id that was sent to your email
    -   **:emailKey** - the email key that was sent to the email
- **Resend verification email - GET /sendVerificationEmail**
    -  Form to resend verification email, form takes :email
- **Reset Password Link Send - GET /resetPassword**
    - Form that takes email, that will send reset instructions to email
- **Page to enter new password - GET /resetPassword/:id/:resetKey**
    - Form with a new password field
    - Form will put `{ id: userIDFromEmail, resetKey: resetKeyFromEmail, newPassword: yourNewPassword }`   
