// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// import {generateNewRMMVPlugin } from "./newPluginGeneratorInput";
import {blankRMMVPluginFile} from "./mvPluginGenerator";
import {window, commands, ExtensionContext} from 'vscode';
import { Context } from 'mocha';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// context.subscriptions.push(commands.registerCommand('RMMV.createNewRMMVPlugin', async() => {
	// 	console.log('Welcome to MJM - RPG Maker MV Plugin Management, This extension is a work in progress.');
	// 	vscode.window.showInformationMessage('Welcome to MJM - RPG Maker MV Plugin Management, This extension is a work in progress.');
	// 	const options: {[key: string]: (Context: ExtensionContext) => Promise<void>} = {
	// 		generateNewRMMVPlugin,
	// 	};
	// 	const quickPick = window.createQuickPick();
	// 	quickPick.items = Object.keys(options).map(label => ({ label }));
	// 	quickPick.onDidChangeSelection(selection => {
	// 		if (selection[0]) {
	// 			options[selection[0].label](context)
	// 				.catch(console.error);
	// 		}
	// 	});
	// 	quickPick.onDidHide(()=>quickPick.dispose());
	// 	quickPick.show();
	// }));
	// this basically creates a blank RMMV Plugin file
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