// Simple-ish standard library for Katie learning TypeScript

import readLineSync from 'readline-sync';

export const write = console.log;

export function getNumber(prompt?: string): number {
    return parseFloat(readLineSync.question(prompt));
}

export function getString(prompt?: string): string {
    return readLineSync.question(prompt);
}