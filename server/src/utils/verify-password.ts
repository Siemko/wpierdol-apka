import * as argon2 from 'argon2';

export async function verifyPassword(hash: string, plain: string): Promise<boolean> {
    return argon2.verify(hash, plain);
}
