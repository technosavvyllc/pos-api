import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const SignInRequestSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, {
      message: 'Password must contain at least one letter and one number',
    }),
});

export class SignInDto extends createZodDto(SignInRequestSchema) {}
