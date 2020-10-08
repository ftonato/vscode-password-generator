import * as vscode from 'vscode';
import { Level } from "./enums/Level.enum";
import { randomIntFromInterval, generatePassword, copyToClipboard } from "./utils";

export class Actions {
    constructor() { }

    weakPasswordGenerate() {
        this.showCopy(generatePassword(Level.WEAK, randomIntFromInterval(8, 12)));
    }
    normalPasswordGenerate() {
        this.showCopy(generatePassword(Level.NORMAL, randomIntFromInterval(12, 16)));
    }
    strongPasswordGenerate() {
        this.showCopy(generatePassword(Level.STRONG, randomIntFromInterval(16, 20)));
    }
    strongerPasswordGenerate() {
        this.showCopy(generatePassword(Level.STRONG, randomIntFromInterval(20, 25)));
    }

    private showCopy(password: string): void {
        const copyBtn = 'Copy password';
        vscode.window.showInformationMessage('Password successfully generated', copyBtn)
            .then(selection => {
                if (selection === copyBtn) {
                    copyToClipboard(password);
                }
            });
    }
}