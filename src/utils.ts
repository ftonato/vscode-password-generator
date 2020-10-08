/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from 'vscode';
import { Level } from "./enums/Level.enum";

/**
 * Generate one random integer number from interval of two other
 * 
 * @param min Minimum number
 * @param max Maximum number
*/
export function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Generate password text
 * 
 * @param level Password strength
 * @param length password text length
*/
export function generatePassword(level: Level, length: number): string {
    const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
    const alpahabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const symbols = '`~!@#$%^&*()_+-={}|[]\:";\'<>?,./';
    
    let password: string = '';
    
    const levels = {
        'WEAK': alphabetLower + alpahabetUpper,
        'NORMAL': alphabetLower + alpahabetUpper + digits,
        'STRONG': alphabetLower + alpahabetUpper + digits + symbols,
    };
    
    const seeds: string = levels[level];
    
    const first: number = 0;
    const last: number = seeds.length;
    for (let index = 0; index < length; index++) {
        let seedIndex: number = Math.floor(Math.random() * (first - last + 1) + last);
        password += seeds.charAt(seedIndex);
    }
    return password;
}

export async function copyToClipboard(text: string) {
    // do not copy empty text
    if (text.trim() === '') {
        return;
    }

    // copy
    try {
        await vscode.env.clipboard.writeText(text);
    } catch (error) {
        vscode.window.showErrorMessage(`password-generator failed. Error: ${JSON.stringify(error)}`);
    }
}