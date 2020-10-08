import * as vscode from 'vscode';
import { Actions } from './actions';

export function activate() {
	console.log('Extension "password-generator" is now active!');

	const actions = new Actions();

	vscode.commands.registerCommand('password-generator.weakPasswordGenerate', actions.weakPasswordGenerate.bind(actions));
	vscode.commands.registerCommand('password-generator.normalPasswordGenerate', actions.normalPasswordGenerate.bind(actions));
	vscode.commands.registerCommand('password-generator.strongPasswordGenerate', actions.strongPasswordGenerate.bind(actions));
	vscode.commands.registerCommand('password-generator.strongerPasswordGenerate', actions.strongerPasswordGenerate.bind(actions));
}

// this method is called when your extension is deactivated
export function deactivate() { }
