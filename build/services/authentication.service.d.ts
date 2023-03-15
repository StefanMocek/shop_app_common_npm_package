import { JwtPayload } from '../constants/globals';
export declare class AuthenticationService {
    generateJwt(payload: JwtPayload, JWT_KEY: string): string;
    pwdToHash(password: string): Promise<string>;
    pwdCompare(storedPwd: string, suppliedPwd: string): Promise<boolean>;
    vierifyJwt(jwtToken: string, JWT_KEY: string): JwtPayload;
}
