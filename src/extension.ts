// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// import {generateNewRMMVPlugin } from "./newPluginGeneratorInput";
import {blankRMMVPluginFile, mvPluginGenerator} from "./mvPluginGenerator";
import {window, commands, ExtensionContext} from 'vscode';
import { Context } from 'mocha';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(commands.registerCommand('RMMV.createNewRMMVPlugin', async() => {
		const titleOutput = await window.showInputBox({
			value: '',
			placeHolder: 'Title of your plugin',
			validateInput: text => {
				return text === '' ? 'Do not leave this blank' : null;
			}
		});
		const authorOutput = await window.showInputBox({
			value: '',
			placeHolder: `your name? Don't worry we won't transfer you to someoone's body`,
			validateInput: text => {
				return text === '' ? 'Do not leave this blank' : null;
			}
		});
		const infoOutput = await window.showInputBox({
			value: '',
			placeHolder: `what your plugin can do?`,
			validateInput: text => {
				return text === '' ? 'Do not leave this blank' : null;
			}
		});
		mvPluginGenerator(`${titleOutput}`, `${authorOutput}`, `${infoOutput}`);
}));

	//this basically creates a blank RMMV Plugin file
	context.subscriptions.push(commands.registerCommand('RMMV.createBlankRMMVPlugin', async() => {
		const output = await window.showInputBox({
			value: '',
			placeHolder: 'Title of your plugin',
			validateInput: text => {
				return text === '' ? 'Do not leave this blank' : null;
			}
		});
		blankRMMVPluginFile(`${output}`);
	}));
}