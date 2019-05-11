// Simple-ish standard library for Katie learning TypeScript

import * as readLineSync from 'readline-sync';

export const write = console.log;

export function getNumber(prompt?: string): number {
    if (prompt) {
        prompt = prompt + ' ';
    }
    return parseFloat(readLineSync.question(prompt));
}

export function getString(prompt?: string): string {
    if (prompt) {
        prompt = prompt + ' ';
    }
    return readLineSync.question(prompt);
}