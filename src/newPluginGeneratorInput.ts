// import {QuickPickItem, window, Disposable, CancellationToken, QuickInputButton, QuickInput, ExtensionContext, QuickInputButtons, Uri} from 'vscode';
// import {mvPluginGenerator} from "./mvPluginGenerator";

// export async function generateNewRMMVPlugin(){
// 	const pluginGeneratorType: QuickPickItem[] = ['minimal plugin content', 'Complete plugin content']
// 		.map(label => ({ label }));

// 		interface State {
// 			title: string;
// 			step: number;
// 			totalSteps: number;
// 			pluginGeneratorType: QuickPickItem | string;
// 			name: string;
// 			author: string;
// 			runtime: QuickPickItem;
// 		}

// 		async function collectInputs() {
// 			const state = {} as Partial<State>;
// 			await GenerateNewRMMVPlugin.run(input => createNewRMMVPlugin(input, state));
// 			return state as State;
// 		}

// 		const title = 'MJM RPG Maker MV Plugin Generator';

// 		async function createNewRMMVPlugin(input: GenerateNewRMMVPlugin, state: Partial<State>){

// 		}
// }

// class InputFlowAction {
// 	private constructor() {}
// 	static back = new InputFlowAction();
// 	static cancel = new InputFlowAction();
// 	static resume = new InputFlowAction();
// }

// type InputGenerateNewMVPlugin = (input: GenerateNewRMMVPlugin) => Thenable<InputGenerateNewMVPlugin|void>;

// interface InputBoxParameters {
// 	title: string;
// 	step: number;
// 	totalSteps: number;
// 	value: string;
// 	prompt: string;
// 	validate: (value: string) => Promise<string | undefined>;
// 	buttons?: QuickInputButton[];
// 	shouldResume: () => Thenable<boolean>;
// }

// RPG Maker MV Generator Class
// class GenerateNewRMMVPlugin{
// 	static async run<T>(start: InputGenerateNewMVPlugin){
// 		const input = new GenerateNewRMMVPlugin();
// 		return input.stepThrough(start);
// 	}

// 	private current?: QuickInput;
// 	private steps: InputGenerateNewMVPlugin[] = [];

// 	private async stepThrough<T>(start: InputStep) {

// 	}
// }