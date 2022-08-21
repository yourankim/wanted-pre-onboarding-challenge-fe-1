import { VALIDATION } from './constants';

const validateEmail = (email) => {
  if (!email) {
    return '이메일 주소를 입력하세요.';
  }
  if (!email.includes('@') || !email.includes('.')) {
    return '올바른 이메일 형식이 아닙니다.';
  }

  return '';
};

const validatePassword = (password) => {
  if (!password) {
    return '비밀번호를 입력하세요.';
  }
  if (password.length < VALIDATION.PASSWORD_MIN_LENGTH) {
    return `비밀번호는 ${VALIDATION.PASSWORD_MIN_LENGTH}자 이상이어야 합니다.`;
  }

  return '';
};

export { validateEmail, validatePassword };
