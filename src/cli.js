#!/usr/bin/env node
import readlineSync from 'readline-sync';
export const user=()=>{
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    return userName;
}
