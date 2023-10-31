type Gender = 'Male' | 'Female' | 'Other' | 'Prefer not to mention';

export type UserData = {
  name: string;
  lastname: string;
  birthdate: string;
  gender: Gender | null;
  email: string;
  newsletter: boolean;
};
