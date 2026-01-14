export const getAuthErrorMessage = (errorCode) => {
    const errorMessages = {
        // Signup errors
        'auth/email-already-in-use': 'This email is already registered. Please sign in instead.',
        'auth/weak-password': 'Password is too weak. Please use at least 6 characters.',
        'auth/invalid-email': 'Please enter a valid email address.',

        // Login errors
        'auth/user-not-found': 'No account found with this email. Please sign up first.',
        'auth/wrong-password': 'Incorrect password. Please try again.',
        'auth/invalid-credential': 'Invalid email or password. Please check your credentials.',
        'auth/user-disabled': 'This account has been disabled. Please contact support.',

        // General errors
        'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
        'auth/network-request-failed': 'Network error. Please check your internet connection.',
        'auth/operation-not-allowed': 'This operation is not allowed. Please contact support.',
        'auth/requires-recent-login': 'Please log in again to continue.',

        // Default
        'default': 'An error occurred. Please try again.'
    };

    return errorMessages[errorCode] || errorMessages['default'];
};
