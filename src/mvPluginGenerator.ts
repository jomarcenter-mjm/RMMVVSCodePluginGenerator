//MV PLugin Generator System
//by Jomarcenter-MJM/MJMJS/MJMCreativeWorksAndIdeas
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { timingSafeEqual } from 'crypto';
// const fs = require('fs');

//this is for blank basic rmmv plugin setup
export function blankRMMVPluginFile(nameOfPlugin: string) {

    vscode.window.showInformationMessage('Generating New RPG Maker MV Plugin');

    let pluginTitle: string;
    pluginTitle = nameOfPlugin;
    let pluginFileName: string;
    pluginFileName = pluginTitle + '.js';

    const rmmvContent = `//Generated using MJM's RPG Maker MV Generator Extension - its ok to delete this line
    
/*:
* @plugindesc
* @author
* 
* @help
* 
*/
    
(function(){
    var parameters = PluginManager.parameters('');
})();
    `;

    console.log("Test Plugin" + "fileName: " + pluginFileName);
    console.log("Output File" + rmmvContent);

    let folderWorkspaceLocation = vscode.workspace.workspaceFolders;
    let pluginFileLocation : string;
    if (folderWorkspaceLocation) {
        console.log(folderWorkspaceLocation);
        console.log(folderWorkspaceLocation[0].uri.path);
        pluginFileLocation = folderWorkspaceLocation[0].uri.fsPath.toString() + '/js/plugins/';
    } else 
    {
        return vscode.window.showWarningMessage("cannot find folder location");
    }

    console.log(pluginFileLocation);

    //generate the files now
    fs.writeFile(pluginFileLocation + pluginFileName, rmmvContent, (err) => {
        if (err) {
        console.error(err);
        return vscode.window.showErrorMessage("cannot generate js file");
        }
        vscode.window.showInformationMessage("plugin " + pluginFileName + " has been created.");
    });
}

//this is for userinputable system (work in progress)
interface PluginInformation {
    author: string;
    pldescription: string;
    title: string;
}

export async function mvPluginGenerator(PluginInformation: PluginInformation) {
    vscode.window.showInformationMessage('Generating a RPG Maker MV Plugin File with basic contents');
    //use for initializeing plugin
    const TopSection = '/*: ';
    const spaceSection = '* ';
    const endSection = '*/';

    const pidescriptionparam = '* @plugindesc ';
    const authorParam = '* @author ';
    const helpParam = '* @help';

    const pMParameter = 'var parameters = PluginManager.parameters( ';
    const functionNameTop = '(function(){';
    const functionNameEnd = '})();';

    //all information files
    let pluginTitle : string;
    let plugindesc : string;
    let pluginAuthor : string;
    
    pluginTitle = PluginInformation.title;
    plugindesc = PluginInformation.pldescription;
    pluginAuthor = PluginInformation.author;

    //filled text
    let completePlugindesc : string;
    let completePluginAuthor : string;
    let completeParameters: string;

    completePlugindesc = pidescriptionparam + plugindesc;
    completePluginAuthor = authorParam + pluginAuthor;
    completeParameters = pMParameter + '\'' + pluginTitle + '\')';
    //build the plugin
}