/*:
 * @plugindesc Allows players to create their own custom characters.
 * @author SumRndmDde
 *
 * @param Layers
 * @desc This is the list in which layers are placed in the image. These are based off of the actual Folder names.
 * @default Tail Part2, Wing Part2, Body, Eyes, Eyebrows, Nose, Mouth, Rear Hair Part1, Front Hair Part2, Rear Hair Part2, Clothing, Accessory A, Glasses, Front Hair Part1, Beast Ears, Accessory B, Tail Part1, Wing Part1
 *
 * @param Order
 * @desc This is the order of the sections listed in the Section Command Window.
 * @default Body, Eyes, Eyebrows, Nose, Mouth, Clothing, Front Hair, Rear Hair, Accessory A, Accessory B, Glasses, Beast Ears, Wing, Tail
 *
 * @param Mandatory
 * @desc These are sections that MUST be filled before the Character Creation is closed.
 * @default Body, Eyes, Eyebrows, Nose, Mouth
 *
 * @param Mandatory Color
 * @desc This is the color of text for sections that are mandatory.
 * @default #FFFF44
 *
 * @param Print to Console
 * @desc If 'true', then whenever a character is created, code to replicate that character will be logged.
 * @default false
 *
 * @param == Visual Options ==
 * @default
 *
 * @param Use Fade Transition
 * @desc If 'true', then there will be a fade transition when going from the map to the character creator.
 * @default true
 *
 * @param Use Piece Background
 * @desc If 'true', the pieces will be given backgrounds depending on their style!
 * @default true
 *
 * @param Use Scene Background
 * @desc If 'true', then the "Background" image will be used. Otherwise, the scene will simply overlap the map.
 * @default true
 *
 * @param Background X Scroll
 * @desc The X speed of the background's scrolling. Set to 0 in order to disable!
 * @default 1
 *
 * @param Background Y Scroll
 * @desc The Y speed of the background's scrolling. Set to 0 in order to disable!
 * @default 0
 *
 * @param Small Piece Cols
 * @desc The amount of columns when using small pieces.
 * (More specifically, pieces less than 100px).
 * @default 3
 *
 * @param Big Piece Cols
 * @desc The amount of columns when using small pieces.
 * (More specifically, pieces greater than 100px).
 * @default 1
 *
 * @param == Dialogues ==
 * @default
 *
 * @param Leave Dialogue
 * @desc The dialogue that asks the player whether they're sure they wish to leave the character creator.
 * @default Are you sure you want\n to save this character?
 *
 * @param Mandatory Dialogue
 * @desc The dialogue that shows when the player tries to leave the character creator without completeing all the mandatories.
 * @default You need to have all the mandatory sections \nfilled out before exiting.
 *
 * @param == Size Options ==
 * @default
 *
 * @param Character Width
 * @desc This is the width of each character frame created with the Character Creation.
 * @default 48
 *
 * @param Character Height
 * @desc This is the height of each character frame created with the Character Creation.
 * @default 48
 *
 * @param SV Char Width
 * @desc This is the width of each character frame created with the Character Creation (for side-view battlers).
 * @default 64
 *
 * @param SV Char Height
 * @desc This is the height of each character frame created with the Character Creation (for side-view battlers).
 * @default 64
 *
 * @param Face Width
 * @desc This is the width of each face image created with the Character Creation.
 * @default 144
 *
 * @param Face Height
 * @desc This is the height of each face image created with the Character Creation.
 * @default 144
 *
 * @help
 *
 * Character Creator EX
 * Version 1.03
 * SumRndmDde
 *
 *
 * This is a plugin that allows players to create their own custom characters 
 * in game. 
 *
 * A menu system in which the player can create a character can be called
 * upon at any time and assigned to an Actor. Once an Actor has been assigned
 * a custom character, that character will be used on the map and in side-
 * view battles.
 *
 *
 * In order to modify the properties of the sections and pieces, one must
 * use the Super Tools Engine. Simply go to:
 *
 * Database EX > Custom Editors > Character Creator Editor
 *
 * With this, you'll be able to easily customize the various properties
 * that exist within the sections!
 *
 *
 * ==========================================================================
 *  Setting up Files
 * ==========================================================================
 *
 * In order to set up the "generator" pieces, you need to create a new
 * folder in the "img" folder called "character-creator".
 *
 * So the file location should be:
 *
 *   /img/SumRndmDde/character-creator-ex/
 *
 * Within this folder, you need a folder for each section, for example:
 *
 *   /img/SumRndmDde/character-creator-ex/Body/
 *   /img/SumRndmDde/character-creator-ex/Mouth/
 *   /img/SumRndmDde/character-creator-ex/Nose/
 *   /img/SumRndmDde/character-creator-ex/Glasses/
 *   etc...
 *
 * Within each of these folders, you'll also need 4 more folders:
 *
 *   /walk/
 *   /dead/
 *   /face/
 *   /sv/
 *
 * As you can probably guess, each of those folders will contain the
 * corresponding walking, dead, face, and side-view parts of the 
 * parent folder.
 *
 *
 * For example, in order to store the "Face" parts of the "Body" section
 * you would place them in:
 *
 *   /img/character-creator-ex/Body/face/
 *
 *
 * ==========================================================================
 *  Other Images
 * ==========================================================================
 *
 * Finally, you're also going to need a couple required images placed in:
 *
 *   /img/SumRndmDde/character-creator-ex/
 *
 * These images are:
 *
 *   Background.png
 *   CustomCharacter.png
 *   CustomFace.png
 *   Walk-Background.png
 *   Dead-Background.png
 *   Face-Background.png
 *   SV-Background.png
 *
 *
 * The "Background" image will be used as a background for the character 
 * creator if you choose to use it.
 *
 * The "CustomCharacter" and "CustomFace" will be used in scenarios where
 * a custom character's Character or Face image cannot be loaded.
 *
 * The "____-Background" images are used as piece backgrounds in the 
 * editor itself.
 *
 *
 * ==========================================================================
 *  Opening the Character Creator
 * ==========================================================================
 *
 * In order to set up the Character Creator, use the Plugin Command:
 *
 *   OpenCharacterCreator [actorId]
 *
 * Set "actorId" to the Actor ID of the Actor you wish to create images for.
 *
 *
 * For example:
 *
 *   OpenCharacterCreator 3
 *   OpenCharacterCreator 7
 *   OpenCharacterCreator 26
 *
 *
 * ==========================================================================
 *  Showing Dead Custom Character
 * ==========================================================================
 *
 * Use the following Plugin Command to make an Actor use their "dead" 
 * custom character image:
 *
 *   SetDeadCustomCharacter [actorId] [true/false]
 *
 * This will set it so the Actor defind by "actorId" will have their
 * dead image turned on or off.
 *
 *
 * For example:
 *
 *   SetDeadCustomCharacter 3 true
 *   SetDeadCustomCharacter 8 false
 *   SetDeadCustomCharacter 12 true
 *
 *
 * ==========================================================================
 *  Setting Event to use Custom Character
 * ==========================================================================
 *
 * If you wish for an event to use a custom character image, simply use
 * the event notetag:
 *
 *   <CustomCharacter: [actorId]>
 *
 * This will set the event to use the custom image of the actor specified
 * through the "actorId" input.
 *
 *
 * You can also set an event to use a dead custom character using:
 *
 *   <CustomDeadCharacter: [actorId]>
 *
 *
 * Examples:
 *
 *   <CustomCharacter: 3>
 *   <CustomDeadCharacter: 23>
 *
 *
 * ==========================================================================
 *  Showing Custom Face in Show Text
 * ==========================================================================
 *
 * If you wish to have a character's custom face used in a "Show Text", 
 * here's what you need to do:
 *
 *
 *   1) Make sure there is a face image selected for the "Show Text" event.
 *      It can be any face image, it just needs to be there.
 *
 *
 *   2) Use the following notetag in the "Show Text" box:
 *
 *      <CC Face: [id]>
 *
 *   Set "id" to the ID of the Actor who has the Custom Face you wish to use.
 *
 *
 * ==========================================================================
 *  Disabling the Custom Images
 * ==========================================================================
 *
 * In order temporarily distable the custom images set up for an Actor, use
 * the Plugin Command:
 *
 *   DisableCharacterCreatorImages [actorId]
 *
 * Of course, simply set "actorId" to the Actor ID you wish to disable 
 * custom character images for. 
 *
 *
 *   EnableCharacterCreatorImages [actorId]
 *
 * This would enable the character creator images again.
 *
 *
 * For example:
 *
 *   DisableCharacterCreatorImages 12
 *   EnableCharacterCreatorImages 8
 *
 *
 * ==========================================================================
 *  Custom Colors
 * ==========================================================================
 *
 * While most of the properties that can be manipulated in the 
 * "Character Creator Editor" in the Super Tools Engine are pretty
 * self explanatory, the color-customization section... is a bit more
 * difficult.
 *
 * The colors are set up using JSON arrays, meaning:
 *
 * [info for color 1],
 * [info for color 2],
 * ...
 * [info for last color]
 *
 *
 * As you can see, each "color" is separated into its own brackets.
 * Every color is followed by a comma except for the last one.
 *
 *
 * Now within these colors, you may customize the:
 *
 *  - Name
 *  - Hue
 *  - Saturation
 *  - Brightness
 *  - Grayscale
 *
 * For example:
 *
 *   ["Blue", 100, 0, 1, 0.5]
 *
 *
 * This would set:
 *
 *  - Name: Blue
 *  - Hue: 100
 *  - Saturation: 0
 *  - Brightness: 1
 *  - Grayscale: 0.5
 *
 *
 * You are not forced to fill out all of the properties however. In fact,
 * the less you fill out, the better. For a simple Hue shift, all one
 * needs to do is:
 *
 *   ["Green", 200]
 *
 * This will create a simple color called Green that shifts the hue by 200.
 *
 *
 * The limits that may be defined through the properties are as follows:
 *
 *  - Hue [0 ~ 360]
 *  - Saturation [-1 ~ 1]
 *  - Brightness [0 ~ 1]
 *  - Grayscale [0 ~ 1]
 *
 *
 * ==========================================================================
 *  End of Help File
 * ==========================================================================
 * 
 * Welcome to the bottom of the Help file.
 *
 *
 * Thanks for reading!
 * If you have questions, or if you enjoyed this Plugin, please check
 * out my YouTube channel!
 *
 * https://www.youtube.com/c/SumRndmDde
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 *
 */

var SRD = SRD || {};
SRD.CharacterCreatorEX = SRD.CharacterCreatorEX || {};

var Imported = Imported || {};
Imported["SumRndmDde Character Creator EX"] = 1.03;
Imported["SumRndmDde Character Creator"] = true;

var $gameCharacterCreations = null;

function Scene_CharacterCreator() {
	this.initialize.apply(this, arguments);
}

function Window_CharacterCreator_FileList() {
	this.initialize.apply(this, arguments);
}

function Window_CharacterCreator_FolderList() {
	this.initialize.apply(this, arguments);
}

function Window_CharacterCreator_Preview() {
	this.initialize.apply(this, arguments);
}

function Game_CharacterCreations() {
	this.initialize.apply(this, arguments);
}

function Sprite_DisplayCharacter() {
	this.initialize.apply(this, arguments);
}

function Sprite_DisplayDeadCharacter() {
	this.initialize.apply(this, arguments);
}

function Sprite_DisplayBlankCharacter() {
	this.initialize.apply(this, arguments);
}

function Sprite_DisplaySvCharacter() {
	this.initialize.apply(this, arguments);
}

function Window_HueSelector() {
	this.initialize.apply(this, arguments);
}

function Window_CharacterCreatorConfirmation() {
	this.initialize.apply(this, arguments);
}

(function(_) {

"use strict";

_.alertNeedSuperToolsEngine = function() {
	alert("The 'SRD_SuperToolsEngine' plugin is required for using the 'SRD_CharacterCreatorEX' plugin.");
	if(confirm("Do you want to open the download page to 'SRD_SuperToolsEngine'?")) {
		window.open('http://sumrndm.site/super-tools-engine/');
	}
};

//-----------------------------------------------------------------------------
// SRD.CharacterCreator
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_CharacterCreatorEX');

_.isNodeJs = Utils.isNwjs();
_.fileInfoStuff = {};

_.path = 'img/SumRndmDde/character-creator-ex/';
_.priorities = String(params['Layers']).split(/\s*,\s*/);
_.order = String(params['Order']).split(/\s*,\s*/);
_.mandatory = String(params['Mandatory']).split(/\s*,\s*/);
_.mandatoryColor = String(params['Mandatory Color']);
_.console = String(params['Print to Console']).trim().toLowerCase() === 'true';

_.fade = String(params['Use Fade Transition']).trim().toLowerCase() === 'true';
_.pieceBackground = String(params['Use Piece Background']).trim().toLowerCase() === 'true';
_.background = String(params['Use Scene Background']).trim().toLowerCase() === 'true';
_.xScroll = parseInt(params['Background X Scroll']);
_.yScroll = parseInt(params['Background Y Scroll']);
_.smallCols = parseInt(params['Small Piece Cols']);
_.bigCols = parseInt(params['Big Piece Cols']);

_.leaveDialogue = String(params['Leave Dialogue']).replace(/\\n/g, '\n');
_.mandatoryDialogue = String(params['Mandatory Dialogue']).replace(/\\n/g, '\n');

_.width = parseInt(params['Character Width']);
_.height = parseInt(params['Character Height']);
_.fileWidth = _.width * 3;
_.fileHeight = _.height * 4;

_.svWidth = parseInt(params['SV Char Width']);
_.svHeight = parseInt(params['SV Char Height']);
_.svFileWidth = _.svWidth * 9;
_.svFileHeight = _.svHeight * 6;

_.faceFileWidth = parseInt(params['Face Width']);
_.faceFileHeight = parseInt(params['Face Height']);

_.xOffset = 40;

_.getRealFilePath = function(p) {
	const path = require('path');
	const base = path.dirname(process.mainModule.filename);
	return path.join(base, p);
};

_.getFilePathData = function() {
	var path = require('path');
	var base = path.dirname(process.mainModule.filename);
	return path.join(base, 'data/');
};

_.getFolderListNodeJs = function() {
	const result = [];
	const fs = require('fs');
	const location = this.getRealFilePath(this.path);
	const files = fs.readdirSync(location);
	for(let i = 0; i < files.length; i++) {
		const file = location + files[i];
		const stat = fs.statSync(file);
		if(stat && stat.isDirectory()) {
			result.push(files[i]);
		}
	}
	return result;
};

_.getFileListNodeJs = function(folder) {
	const result = [];
	const fs = require('fs');
	const location = this.getRealFilePath(this.path) + folder + 'walk/';
	const files = fs.readdirSync(location);
	for(let i = 0; i < files.length; i++) {
		const file = location + files[i];
		const stat = fs.statSync(file);
		if(!stat) continue;
		if(!stat.isDirectory() && _.isImageFile(files[i])) {
			const f = files[i].replace('.png', '');
			result.push(f);
		}
	}
	return result;
};

_.saveFileInfoStuff = function() {
	const folds = this.getFolderListNodeJs();
	this.fileInfoStuff.folders = folds;
	for(let i = 0; i < folds.length; i++) {
		const fold = folds[i] + '/';
		this.fileInfoStuff[fold] = this.getFileListNodeJs(fold);
	}
	const data = LZString.compressToBase64(JSON.stringify(this.fileInfoStuff));
	const fs = require('fs');
	const dirPath = this.getFilePathData();
	const filePath = dirPath + 'cc-info.sumrndmdde';
	fs.writeFileSync(filePath, data);
};

_.loadSaveInfoFile = function() {
	let that = this;
	var xhr = new XMLHttpRequest();
	var url = 'data/cc-info.sumrndmdde';
	xhr.open('GET', url);
	xhr.onload = function() {
		if (xhr.status < 400) {
			that.fileInfoStuff = JSON.parse(LZString.decompressFromBase64(xhr.responseText));
		}
	};
	xhr.onerror = function() {};
	xhr.send();
};

_.getFolderList = function() {
	return this.fileInfoStuff.folders;
};

_.getFileList = function(folder) {
	return this.fileInfoStuff[folder];
};

_.isImageFile = function(filename) {
	return !!(filename.match(/\.png/i));
};

_.cache = new CacheMap(_);

_.loadImage = function(filename, hue) {
	const key = filename;
	let bitmap = this.cache.getItem(key);
	if(!bitmap) {
		bitmap = ImageManager.loadBitmap('img/SumRndmDde/character-creator-ex/', filename, hue, true);
		this.cache.setItem(key, bitmap);
	}
	return bitmap;
};

_.loadImageWPath = function(path, filename, hue) {
	const key = filename + path;
	let bitmap = this.cache.getItem(key);
	if(!bitmap) {
		bitmap = ImageManager.loadBitmap(path, filename, hue, true);
		this.cache.setItem(key, bitmap);
	}
	return bitmap;
};

_.preloadCharacterPieces = function() {
	const folders = this.getFolderList();
	_._ccex_loads = 0;
	_._ccex_files = -1;
	let tempFiles = 0;
	const increaseLoads = function() {
		_._ccex_loads++;
	}
	for(let i = 0; i < folders.length; i++) {
		const files = this.getFileList(folders[i] + '/');
		for(let j = 0; j < files.length; j++) {
			this.loadImageWPath(this.path + folders[i] + '/walk/', files[j]).addLoadListener(increaseLoads.bind(this));
			this.loadImageWPath(this.path + folders[i] + '/dead/', files[j]).addLoadListener(increaseLoads.bind(this));
			this.loadImageWPath(this.path + folders[i] + '/face/', files[j]).addLoadListener(increaseLoads.bind(this));
			this.loadImageWPath(this.path + folders[i] + '/sv/', files[j]).addLoadListener(increaseLoads.bind(this));
			tempFiles += 4;
		}
	}
	_._ccex_files = tempFiles;
	this.loadImage('CustomCharacter');
	this.loadImage('CustomFace');
	this.loadImage('Background');
	this.loadImage('Walk-Background');
	this.loadImage('Dead-Background');
	this.loadImage('SV-Background');
	this.loadImage('Face-Background');
};

if(_.isNodeJs) {
	_.saveFileInfoStuff();
} else {
	_.loadSaveInfoFile();
}

_.checkFileExists = function() {
	FileManager.checkDataExists("CharacterCreator.json", `{
		"Body":{"label":"","direction":0,"source":"Face","color":false,"condition":"true","colors":[["White",0],["Tan",0,0.8,0],["Brown",24,-1,0.5],["Black",24,-1,0.3],["Gray",24,0,0,0.35],["Blue",0,0,0.5,0.5]]},
		"Clothing":{"label":"","direction":0,"source":"Walk","color":false,"condition":"true","colors":[]},
		"Rear Hair":{"label":"","direction":3,"source":"Walk","color":true,"condition":"true","colors":[["Blonde",0],["Brown",-27,-0.5,0.8],["Black",-27,-1,0.3],["White",0,0,1,0.5],["Gray",0,0,0.5,0.5],["Green",60],["Teal",120],["Blue",180],["Purple",240],["Red",300]]},
		"Tail":{"label":"","direction":3,"source":"Walk","color":true,"condition":"true","colors":[]},
		"Wing":{"label":"","direction":3,"source":"Walk","color":true,"condition":"true","colors":[]},
		"Eyebrows":{"label":"","direction":1,"source":"Face","color":true,"condition":"true","colors":[["Blonde",0],["Brown",-27,-0.5,0.8],["Black",-27,-1,0.3],["White",0,0,1,0.5],["Gray",0,0,0.5,0.5],["Green",60],["Teal",120],["Blue",180],["Purple",240],["Red",300]]},
		"Nose":{"label":"","direction":0,"source":"Face","color":false,"condition":"true","colors":[["White",0],["Tan",0,0.8,0],["Brown",24,-1,0.5],["Black",24,-1,0.3],["Gray",24,0,0,0.35],["Blue",0,0,0.5,0.5]]},
		"Mouth":{"label":"","direction":0,"source":"Face","color":false,"condition":"true","colors":[["White",0],["Tan",0,0.8,0],["Brown",24,-1,0.5],["Black",24,-1,0.3],["Gray",24,0,0,0.35],["Blue",0,0,0.5,0.5]]},
		"Eyes":{"label":"","direction":0,"source":"Face","color":true,"condition":"true","colors":[["Blue",0],["Purple",60],["Red",120],["Yellow",180],["Green",240],["Teal",300],["Orange",180,1,0.8],["Sky Blue",0,1,1,0.35]]},
		"Front Hair":{"direction":0,"source":"Walk","color":true,"condition":"true","colors":[["Blonde",0],["Brown",-27,-0.5,0.8],["Black",-27,-1,0.3],["White",0,0,1,0.5],["Gray",0,0,0.5,0.5],["Green",60],["Teal",120],["Blue",180],["Purple",240],["Red",300]],"label":""},
		"Accessory A":{"direction":0,"source":"SV","color":true,"condition":"true","colors":[],"label":""},
		"Accessory B":{"direction":0,"source":"SV","color":true,"condition":"true","colors":[],"label":""},
		"Glasses":{"direction":0,"source":"SV","color":true,"condition":"true","colors":[],"label":""},
		"Beast Ears":{"direction":0,"source":"SV","color":true,"condition":"true","colors":[],"label":""}
	}`);
};


//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------
(function($) {
$._databaseFiles.push({name: '$dataCharacterCreator', src: "CharacterCreator.json"});

var _createGameObjects = $.createGameObjects;
$.createGameObjects = function() {
	_createGameObjects.call(this);
	$gameCharacterCreations = new Game_CharacterCreations();
	_.preloadCharacterPieces();
};

var _makeSaveContents = $.makeSaveContents;
$.makeSaveContents = function() {
	const contents = _makeSaveContents.apply(this, arguments);
	contents.characterCreations = $gameCharacterCreations;
	return contents;
};

var _extractSaveContents = $.extractSaveContents;
$.extractSaveContents = function(contents) {
	_extractSaveContents.apply(this, arguments);
	$gameCharacterCreations = contents.characterCreations;
};

var _makeSavefileInfo = $.makeSavefileInfo;
$.makeSavefileInfo = function() {
	const info = _makeSavefileInfo.apply(this, arguments);
	info.srd_cc_chars = $gameParty.charactersForSavefile2();
	return info;
};
})(DataManager);

//-----------------------------------------------------------------------------
// BattleManager
//-----------------------------------------------------------------------------

_.BattleManager_setup = BattleManager.setup;
BattleManager.setup = function(troopId, canEscape, canLose) {
	_.BattleManager_setup.apply(this, arguments);
	this.customFaceCache = [];
};

//-----------------------------------------------------------------------------
// Game_Temp
//-----------------------------------------------------------------------------

_.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_.Game_System_initialize.call(this);
	this.characterCreatorColorIndex = [];
};

Game_System.prototype.colorIndexSaves = function() {
	return this.characterCreatorColorIndex[$gameCharacterCreations._tempActorId];
};

//-----------------------------------------------------------------------------
// Game_Character
//-----------------------------------------------------------------------------

Game_Character.prototype.hasSetImage = function() {
	return false;
};

Game_Character.prototype.needsCustomUpdate = function() {
	return false;
};

//-----------------------------------------------------------------------------
// Game_Event
//-----------------------------------------------------------------------------

_.Game_Event_initialize = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function(mapId, eventId) {
	_.Game_Event_initialize.apply(this, arguments);
	this.setupCustomCharacter();
};

Game_Event.prototype.setupCustomCharacter = function() {
	const note = this.event().note;
	if(note.match(/<Custom[ ]?Character[ ]?:\s*(\d+)\s*>/im)) {
		this._customCharacterId = parseInt(RegExp.$1);
		this._customCharacterActor = $gameActors.actor(this._customCharacterId);
		this._needsCustomCharacterUpdate = true;
	}else if(note.match(/<Custom[ ]?Dead[ ]?Character[ ]?:\s*(\d+)\s*>/im)) {
		this._customCharacterId = parseInt(RegExp.$1);
		this._customCharacterActor = $gameActors.actor(this._customCharacterId);
		this._isCustomDeadCharacter = true;
		this._needsCustomCharacterUpdate = true;
	}
};

Game_Event.prototype.hasSetImage = function() {
	return !!this._customCharacterId && this._customCharacterActor.hasSetImage();
};

Game_Event.prototype.setNeedsCustomUpdate = function(update) {
	this._needsCustomCharacterUpdate = update;
};

Game_Event.prototype.needsCustomUpdate = function() {
	return !!this._needsCustomCharacterUpdate;
};

Game_Event.prototype.isDeadCustomCharacter = function() {
	return !!this._isCustomDeadCharacter;
};

Game_Event.prototype.getCreatorBitmap = function() {
	const actor = $gameActors.actor(this._customCharacterId);
	return actor && actor.getCreatorBitmapChar();
};

Game_Event.prototype.getCreatorBitmapDead = function() {
	const actor = $gameActors.actor(this._customCharacterId);
	return actor && actor.getCreatorBitmapDead();
};

//-----------------------------------------------------------------------------
// Game_Player
//-----------------------------------------------------------------------------

Game_Player.prototype.hasSetImage = function() {
	const actor = $gameParty.leader();
	return actor && actor.hasSetImage();
};

Game_Player.prototype.getCreatorBitmap = function() {
	const actor = $gameParty.leader();
	return actor && actor.getCreatorBitmapChar();
};

Game_Player.prototype.getCreatorBitmapDead = function() {
	const actor = $gameParty.leader();
	return actor && actor.getCreatorBitmapDead();
};

Game_Player.prototype.isDeadCustomCharacter = function() {
	const actor = $gameParty.leader();
	return actor && actor._isDeadCustomCharacter;
};

Game_Player.prototype.needsCustomUpdate = function() {
	const actor = $gameParty.leader();
	return actor && actor._neededCustomUpdate;
};

Game_Player.prototype.setNeedsCustomUpdate = function(update) {
	const actor = $gameParty.leader();
	actor._neededCustomUpdate = update;
};

Game_Player.prototype.setAllNeedsCustomUpdate = function() {
	this.setNeedsCustomUpdate(true);
	this._followers.forEach(function(follower) {
		follower.setNeedsCustomUpdate(true);
	}, true);
};

//-----------------------------------------------------------------------------
// Game_Follower
//-----------------------------------------------------------------------------

Game_Follower.prototype.hasSetImage = function() {
	const actor = this.actor();
	return actor && actor.hasSetImage();
};

Game_Follower.prototype.getCreatorBitmap = function() {
	const actor = this.actor();
	return actor && actor.getCreatorBitmapChar();
};

Game_Follower.prototype.getCreatorBitmapDead = function() {
	const actor = this.actor();
	return actor && actor.getCreatorBitmapDead();
};

Game_Follower.prototype.isDeadCustomCharacter = function() {
	const actor = this.actor();
	return actor && actor._isDeadCustomCharacter;
};

Game_Follower.prototype.needsCustomUpdate = function() {
	const actor = this.actor();
	return actor && actor._neededCustomUpdate;
};

Game_Follower.prototype.setNeedsCustomUpdate = function(update) {
	const actor = this.actor();
	if(actor) {
		actor._neededCustomUpdate = update;
	}
};

//-----------------------------------------------------------------------------
// Game_Actor
//-----------------------------------------------------------------------------

_.Game_Actor_initialize = Game_Actor.prototype.initialize;
Game_Actor.prototype.initialize = function(actorId) {
	_.Game_Actor_initialize.call(this, actorId);
	this._characterCreatorDisabled = false;
	this._isDeadCustomCharacter = false;
	this._neededCustomUpdate = true;
};

Object.defineProperty(Game_Actor.prototype, 'character-creator', {
	get: function() {
		return this._characterCreatorDisabled;
	},
	set: function(value) {
		return this._characterCreatorDisabled = value;
	},
	configurable: true
});

Game_Actor.prototype.hasSetImage = function() {
	return $gameCharacterCreations.hasInfo(this.actorId()) && !this._characterCreatorDisabled;
};

Game_Actor.prototype.getCreatorBitmap = function() {
	return $gameCharacterCreations.buildBitmapSv(this.actorId());
};

Game_Actor.prototype.getCreatorBitmapChar = function() {
	return $gameCharacterCreations.buildBitmap(this.actorId());
};

Game_Actor.prototype.getCreatorBitmapDead = function() {
	return $gameCharacterCreations.buildBitmapDead(this.actorId());
};

Game_Actor.prototype.getCreatorBitmapFace = function() {
	return $gameCharacterCreations.buildBitmapFace(this.actorId());
};

//-----------------------------------------------------------------------------
// Game_Party
//-----------------------------------------------------------------------------

Game_Party.prototype.charactersForSavefile2 = function() {
	return this.battleMembers().map(function(actor) {
		if(actor.hasSetImage()) {
			return $gameCharacterCreations.getInfo(actor.actorId());
		} else {
			return null;
		}
	});
};

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

_.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_.Game_Interpreter_pluginCommand.apply(this, arguments);
	if(command.trim().toLowerCase() === 'opencharactercreator') {
		$gameCharacterCreations._tempActorId = parseInt(args[0]);
		SceneManager.push(Scene_CharacterCreator);
	} else if(command.trim().toLowerCase() === 'setdeadcustomcharacter') {
		const actor = $gameActors.actor(parseInt(args[0]));
		actor._isDeadCustomCharacter = (args[1].trim().toLowerCase() === 'true');
		actor._neededCustomUpdate = true;
	} else if(command.trim().toLowerCase() === 'disablecharactercreatorimages') {
		const actor = $gameActors.actor(parseInt(args[0]));
		actor["character-creator"] = true;
		actor._neededCustomUpdate = true;
	} else if(command.trim().toLowerCase() === 'enablecharactercreatorimages') {
		const actor = $gameActors.actor(parseInt(args[0]));
		actor["character-creator"] = false;
		actor._neededCustomUpdate = true;
	}
};

//-----------------------------------------------------------------------------
// Game_CharacterCreations
//-----------------------------------------------------------------------------

(function($) {
$.prototype.initialize = function() {
	this._data = [];
	this._dataDd = [];
	this._dataSv = [];
	this._dataFace = [];
};

$.prototype.addInfo = function(info, id, type) {
	type = type || '';
	if(type === '') {
		this._data[id] = info;
	} else if(type === 'dead') {
		this._dataDd[id] = info;
	} else if(type === 'sv') {
		this._dataSv[id] = info;
	} else if(type === 'face') {
		this._dataFace[id] = info;
	}
};

$.prototype.addInfos = function(id, info, info2, info3, info4) {
	this._data[id] = info;
	this._dataDd[id] = info2;
	this._dataSv[id] = info3;
	this._dataFace[id] = info4;
};

$.prototype.getInfo = function(id, type) {
	type = type || '';
	if(type === 'dead') {
		return this._dataDd[id];
	} else if(type === 'sv') {
		return this._dataSv[id];
	} else if(type === 'face') {
		return this._dataFace[id];
	}
	return this._data[id];
};

$.prototype.hasInfo = function(id, type) {
	type = type || '';
	if(type === 'dead') {
		return !!this._dataDd[id];
	} else if(type === 'sv') {
		return !!this._dataSv[id];
	} else if(type === 'face') {
		return !!this._dataFace[id];
	}
	return !!this._data[id];
};

$.prototype.buildBitmap = function(id, info) {
	if($gameTemp.charConstructor === undefined) {
		$gameTemp.charConstructor = new Window_CharacterCreator_Preview(0, 0, _.fileWidth, _.fileHeight);
		$gameTemp.charConstructor._sprite.x = 0;
		$gameTemp.charConstructor._sprite.y = 0;
	}
	const data = info || this.getInfo(id);
	if(!data) return null;
	$gameTemp.charConstructor.setInfo(data);
	const bit = Bitmap.snapSprite($gameTemp.charConstructor._sprite, _.fileWidth, _.fileHeight);
	return bit;
};

$.prototype.buildBitmapFromInfo = function(info, type) {
	if(!info) return null;
	type = type || '';
	if(type === '') {
		return this.buildBitmap(0, info);
	} else if(type === 'dead') {
		return this.buildBitmapDead(0, info);
	} else if(type === 'face') {
		return this.buildBitmapFace(0, info);
	} else if(type === 'sv') {
		return this.buildBitmapSv(0, info);
	}
};

$.prototype.buildBitmapDead = function(id, info) {
	if($gameTemp.deadConstructor === undefined) {
		$gameTemp.deadConstructor = new Window_CharacterCreator_Preview(0, 0, _.fileWidth, _.height);
		$gameTemp.deadConstructor._sprite.x = 0;
		$gameTemp.deadConstructor._sprite.y = 0;
	}
	const data = info || this.getInfo(id, 'dead');
	if(!data) return null;
	$gameTemp.deadConstructor.setInfo(data);
	const bit = Bitmap.snapSprite($gameTemp.deadConstructor._sprite, _.fileWidth, _.height);
	const result = new Bitmap(_.fileWidth, _.fileHeight);
	result.blt(bit, 0, 0, bit.width, bit.height, 0, 0);
	result.blt(bit, 0, 0, bit.width, bit.height, 0, _.height * 1);
	result.blt(bit, 0, 0, bit.width, bit.height, 0, _.height * 2);
	result.blt(bit, 0, 0, bit.width, bit.height, 0, _.height * 3);
	return result;
};

$.prototype.buildBitmapSv = function(id, info) {
	if($gameTemp.svConstructor === undefined) {
		$gameTemp.svConstructor = new Window_CharacterCreator_Preview(0, 0, _.svFileWidth, _.svFileHeight);
		$gameTemp.svConstructor._sprite.x = 0;
		$gameTemp.svConstructor._sprite.y = 0;
	}
	const data = info || this.getInfo(id, 'sv');
	if(!data) return null;
	$gameTemp.svConstructor.setInfo(data);
	const bit = Bitmap.snapSprite($gameTemp.svConstructor._sprite, _.svFileWidth, _.svFileHeight);
	return bit;
};

$.prototype.buildBitmapFace = function(id, info) {
	if($gameTemp.faceConstructor === undefined) {
		$gameTemp.faceConstructor = new Window_CharacterCreator_Preview(0, 0, _.faceFileWidth, _.faceFileHeight);
		$gameTemp.faceConstructor._sprite.x = 0;
		$gameTemp.faceConstructor._sprite.y = 0;
	}
	const data = info || this.getInfo(id, 'face');
	if(!data) return null;
	$gameTemp.faceConstructor.setInfo(data);
	const bit = Bitmap.snapSprite($gameTemp.faceConstructor._sprite, _.faceFileWidth, _.faceFileHeight);
	return bit;
};
})(Game_CharacterCreations);

Bitmap.snapSprite = function(stage, width, height) {
	var bitmap = new Bitmap(width, height);
	var context = bitmap._context;
	var renderTexture = PIXI.RenderTexture.create(width, height);
	if (stage) {
		Graphics._renderer.render(stage, renderTexture);
		stage.worldTransform.identity();
		var canvas = null;
		if (Graphics.isWebGL()) {
			canvas = Graphics._renderer.extract.canvas(renderTexture);
		} else {
			canvas = renderTexture.baseTexture._canvasRenderTarget.canvas;
		}
		context.drawImage(canvas, 0, 0);
	} else {

	}
	renderTexture.destroy({ destroyBase: true });
	bitmap._setDirty();
	return bitmap;
};

//-----------------------------------------------------------------------------
// Scene_Boot
//-----------------------------------------------------------------------------

_.Scene_Boot_isReady = Scene_Boot.prototype.isReady;
Scene_Boot.prototype.isReady = function() {
	return _.Scene_Boot_isReady.apply(this, arguments) && _._ccex_files === _._ccex_loads;
};

//-----------------------------------------------------------------------------
// Scene_Map
//-----------------------------------------------------------------------------

if(_.fade) {

_.Scene_Map_needsSlowFadeOut = Scene_Map.prototype.needsSlowFadeOut;
Scene_Map.prototype.needsSlowFadeOut = function() {
	return (_.Scene_Map_needsSlowFadeOut.apply(this, arguments) || SceneManager.isNextScene(Scene_CharacterCreator));
};

_.Scene_Map_needsFadeIn = Scene_Map.prototype.needsFadeIn;
Scene_Map.prototype.needsFadeIn = function() {
	return (_.Scene_Map_needsFadeIn.apply(this, arguments) || SceneManager.isPreviousScene(Scene_CharacterCreator));
};

}

//-----------------------------------------------------------------------------
// Scene_CharacterCreator
//-----------------------------------------------------------------------------
(function($) {
$.prototype = Object.create(Scene_MenuBase.prototype);
$.prototype.constructor = $;

$.prototype.initialize = function(actorId) {
	Scene_MenuBase.prototype.initialize.call(this);
	if(!$gameSystem.characterCreatorColorIndex[$gameCharacterCreations._tempActorId]) {
		$gameSystem.characterCreatorColorIndex[$gameCharacterCreations._tempActorId] = {};
	}
	this._loadedStuff = 0;
	this._combinedMode = false;
	this._mandatories = {};
	for(let i = 0; i < _.mandatory.length; i++) {
		this._mandatories[_.mandatory[i]] = true;
	}
};

$.prototype.create = function() {
	Scene_MenuBase.prototype.create.call(this);
	this.createFolderList();
	this.createFileList();
	this.createPreviewFaceWindow();
	this.createPreviewWindow();
	this.createPreviewDeadWindow();
	this.createPreviewSvWindow();
	this.createHueWindow();
	this.checkForAlreadyMandatory();
	this.createMessageWindow();
	this.createConfirmBackground();
	this.createConfirmerWindow();
	this.createTexterWindow();
};

if(_.fade) {

$.prototype.start = function() {
	Scene_MenuBase.prototype.start.call(this);
	this.startFadeIn(this.fadeSpeed(), false);
};

$.prototype.stop = function() {
	Scene_MenuBase.prototype.stop.call(this);
	this.startFadeOut(this.slowFadeSpeed(), false);
};

}

$.prototype.terminate = function() {
	Scene_MenuBase.prototype.terminate.call(this);
	$gamePlayer.setAllNeedsCustomUpdate();
};

$.prototype.createBackground = function() {
	this._backgroundSprite = new TilingSprite();
	if(_.background) {
		this._backgroundSprite.bitmap = _.loadImage('Background');
	} else {
		this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
	}
	this._backgroundSprite.move(0, 0, Graphics.width, Graphics.height);
	this.addChild(this._backgroundSprite);
};

$.prototype.update = function() {
	Scene_MenuBase.prototype.update.call(this);
	if(this._isMessageActive) {
		if(this._isMessageActive === 1) {
			if(!$gameMessage.isBusy()) {
				this._isMessageActive = false;
				this._folderList.activate();
			}
		}
	}
	this.updateBackground();
};

$.prototype.updateBackground = function() {
	if(this._backgroundSprite) {
		if(_.xScroll) this._backgroundSprite.origin.x += _.xScroll;
		if(_.yScroll) this._backgroundSprite.origin.y += _.yScroll;
	}
};

$.prototype.createFileList = function() {
	this._fileList = new Window_CharacterCreator_FileList(this._folderList);
	this._fileList.setHandler('ok', this.onFileListOK.bind(this));
	this._fileList.setHandler('cancel', this.onFileListCancel.bind(this));
	this._fileList.deselect();
	this._fileList.deactivate();
	this.addWindow(this._fileList);
};

$.prototype.createFolderList = function() {
	this._folderList = new Window_CharacterCreator_FolderList(this._mandatories);
	this._folderList.setHandler('ok', this.onFolderListOK.bind(this));
	this._folderList.setHandler('combined', this.onFolderListCombined.bind(this));
	this._folderList.setHandler('cancel', this.onFolderListCancel.bind(this));
	this._folderList.activate();
	this._folderList.select(0);
	this.addWindow(this._folderList);
};

$.prototype.createPreviewFaceWindow = function() {
	this._previewWindowFace = new Window_CharacterCreator_Preview(0, 0, _.faceFileWidth, _.faceFileHeight, 'face');
	this._previewWindowFace.x = (((Graphics.boxWidth - this._fileList.x - this._fileList.width) - this._previewWindowFace.width) / 2) + this._fileList.width + this._fileList.x + _.xOffset;
	this._previewWindowFace.y = (Graphics.boxHeight - this._previewWindowFace.height) / 2;
	this.addWindow(this._previewWindowFace);
	if($gameCharacterCreations.hasInfo($gameCharacterCreations._tempActorId, 'face')) {
		this._previewWindowFace.setInfo($gameCharacterCreations.getInfo($gameCharacterCreations._tempActorId, 'face'));
		this._loadedStuff++;
	}
};

$.prototype.createPreviewWindow = function() {
	this._previewWindow = new Window_CharacterCreator_Preview(0, 0, _.width, _.height, 'char');
	this._previewWindow.x = ((this._previewWindowFace.width - (this._previewWindow.width*2))/2) + this._previewWindowFace.x;
	this._previewWindow.y = this._previewWindowFace.y +  this._previewWindowFace.height;
	this.addWindow(this._previewWindow);
	if($gameCharacterCreations.hasInfo($gameCharacterCreations._tempActorId)) {
		this._previewWindow.setInfo($gameCharacterCreations.getInfo($gameCharacterCreations._tempActorId));
		this._loadedStuff++;
	}
};

$.prototype.createPreviewDeadWindow = function() {
	this._previewWindowDead = new Window_CharacterCreator_Preview(0, 0, _.width, _.height, 'dead');
	this._previewWindowDead.x = this._previewWindow.x + this._previewWindow.width;
	this._previewWindowDead.y = this._previewWindowFace.y +  this._previewWindowFace.height;
	this.addWindow(this._previewWindowDead);
	if($gameCharacterCreations.hasInfo($gameCharacterCreations._tempActorId, 'dead')) {
		this._previewWindowDead.setInfo($gameCharacterCreations.getInfo($gameCharacterCreations._tempActorId, 'dead'));
		this._loadedStuff++;
	}
};

$.prototype.createPreviewSvWindow = function() {
	this._previewWindowSv = new Window_CharacterCreator_Preview(0, 0, _.svWidth, _.svHeight, 'sv');
	this._previewWindowSv.x = (((Graphics.boxWidth - this._fileList.x - this._fileList.width) - this._previewWindowSv.width) / 2) + this._fileList.width + this._fileList.x + _.xOffset;
	this._previewWindowSv.y = this._previewWindowDead.y +  this._previewWindowDead.height;
	this.addWindow(this._previewWindowSv);
	if($gameCharacterCreations.hasInfo($gameCharacterCreations._tempActorId, 'sv')) {
		this._previewWindowSv.setInfo($gameCharacterCreations.getInfo($gameCharacterCreations._tempActorId, 'sv'));
		this._loadedStuff++;
	}
};

$.prototype.createHueWindow = function() {
	this._hueWindow = new Window_HueSelector(0, 0, this._fileList, this);
	this._hueWindow.setHandler('ok', this.onHueWindowOk.bind(this));
	this._hueWindow.setHandler('cancel', this.onHueWindowCancel.bind(this));
	this._hueWindow.x = (((Graphics.boxWidth - this._fileList.x - this._fileList.width) - this._hueWindow.width) / 2) + this._fileList.width + this._fileList.x + _.xOffset;
	this._hueWindow.y = (Graphics.boxHeight - this._hueWindow.height) / 6;
	this.addWindow(this._hueWindow);
	this._hueWindow.openness = 0;
	this._hueWindow.deactivate();
};

$.prototype.checkForAlreadyMandatory = function() {
	if(this._loadedStuff === 4) {
		for(let i = 0; i < _.mandatory.length; i++) {
			this._mandatories[_.mandatory[i]] = false;
		}
		this._folderList.refresh();
	} else {
		for(let i = 0; i < _.mandatory.length; i++) {
			let condition = '';
			if($dataCharacterCreator[_.mandatory[i]]) {
				condition = $dataCharacterCreator[_.mandatory[i]].condition;
			} else {
				condition = true;
			}
			this._mandatories[_.mandatory[i]] = eval(condition);
		}
	}
};

$.prototype.createMessageWindow = function() {
	this._messageWindow = new Window_Message();
	this.addWindow(this._messageWindow);
};

$.prototype.createConfirmBackground = function() {
	this._confirmBack = new Sprite(new Bitmap(Graphics.boxWidth, Graphics.boxHeight));
	this._confirmBack.bitmap.fillRect(0, 0, Graphics.boxWidth, Graphics.boxHeight, 'rgba(0, 0, 0, 0.7)');
	this._confirmBack.opacity = 0;
	this._confirmBack.opacitySpeed = 0;
	this._confirmBack.updateAlias = this._confirmBack.update;
	this._confirmBack.update = function() {
		this.updateAlias.apply(this, arguments);
		if((this.opacitySpeed > 0 && this.opacity < 255) || 
			(this.opacitySpeed < 0 && this.opacity > 0)) {
			this.opacity += this.opacitySpeed;
		} else if(this.opacitySpeed !== 0) {
			this.opacitySpeed = 0;
		}
	};
	this.addChild(this._confirmBack);
};

$.prototype.createConfirmerWindow = function() {
	this._confirmer = new Window_CharacterCreatorConfirmation();
	this._confirmer.setHandler('yes', this.exitDaScene.bind(this));
	this._confirmer.setHandler('no', this.deconfirm.bind(this));
	this.addChild(this._confirmer);
};

$.prototype.createTexterWindow = function() {
	this._texter = new Window_Base(0, 0, Graphics.boxWidth / 2, this._confirmer.fittingHeight(2));
	this._texter.openness = 0;
	this._texter.createContents = function() {
		this.contents = new Bitmap(this.contentsWidth(), this.contentsHeight());
		this.resetFontSettings();
		this.drawTextEx(_.leaveDialogue, 0, 0);
	};
	this._texter.createContents();
	this.addChild(this._texter);
};

$.prototype.onFolderListOK = function() {
	this._combinedMode = false;
	this.goToFiles();
};

$.prototype.onFolderListCombined = function() {
	this._combinedMode = true;
	this.goToFiles();
};

$.prototype.goToFiles = function() {
	this._fileList.setCombinedMode(this._combinedMode);
	this._fileList.activate();
	this._fileList.select(0);
	if(this.getHueUsage()) {
		const section = this._fileList.currentSection();
		this._hueWindow.open(section);
	}
};

$.prototype.checkMandatories = function() {
	for(let i = 0; i < _.mandatory.length; i++) {
		if(this._mandatories[_.mandatory[i]]) {
			return true;
		}
	}
	return false;
};

$.prototype.onFolderListCancel = function() {
	if(this.checkMandatories()) {
		$gameMessage.add(_.mandatoryDialogue);
		this._isMessageActive = 1;
	} else {
		this._confirmBack.opacitySpeed = 16;
		this._confirmer.x = (Graphics.boxWidth - this._confirmer.width) / 2;
		this._confirmer.y = Graphics.boxHeight - this._messageWindow.height - this._confirmer.height;
		this._texter.x = (Graphics.boxWidth - this._texter.width) / 2;
		this._texter.y = this._confirmer.y - this._texter.height;
		this._confirmer.activate();
		this._confirmer.select(0);
		this._confirmer.open();
		this._texter.open();
	}
};

$.prototype.exitDaScene = function() {
	if(_.console) {
		console.log("var id = 0;\n$gameCharacterCreations.addInfos(id, " + 
			JSON.stringify(this._previewWindow.info()) + ", " +
			JSON.stringify(this._previewWindowDead.info()) + ", " +
			JSON.stringify(this._previewWindowSv.info()) + ", " +
			JSON.stringify(this._previewWindowFace.info()) + ");");
	}
	const id = $gameCharacterCreations._tempActorId;
	$gameCharacterCreations.addInfo(this._previewWindow.info(), id);
	$gameCharacterCreations.addInfo(this._previewWindowDead.info(), id, 'dead');
	$gameCharacterCreations.addInfo(this._previewWindowSv.info(), id, 'sv');
	$gameCharacterCreations.addInfo(this._previewWindowFace.info(), id, 'face');
	this.popScene();
};

$.prototype.deconfirm = function() {
	this._confirmBack.opacitySpeed = -16;
	this._confirmer.close();
	this._texter.close();
	this._confirmer.deselect();
	this._confirmer.deactivate();
	this._folderList.activate();
};

$.prototype.getHueUsage = function() {
	const data = $dataCharacterCreator[this._fileList.currentSectionNoPart()];
	return data ? data.colors.length > 0 : false;
};

$.prototype.onFileListOK = function() {
	this.saveCurrentSelection();
	if(this.getHueUsage()) {
		this._fileList.deactivate();
		this._hueWindow.activate();
		this._hueWindow.select(0);
	} else {
		this._fileList.activate();
	}
};

$.prototype.onHueWindowCancel = function() {
	this._hueWindow.deselect();
	this._hueWindow.deactivate();
	this._fileList.activate();
	this._fileList.reselect();
	const section = this._fileList.currentSection();
	$gameSystem.colorIndexSaves()[section] = this._hueWindow._colorIndex;
	//Here
	//this._hueWindow._colorIndex = 0;
	this._hueWindow.refresh();
};

$.prototype.onHueWindowOk = function() {
	this._hueWindow.deselect();
	this._hueWindow.deactivate();
	this._fileList.activate();
	this._fileList.reselect();
	this.saveCurrentSelection();
	this._hueWindow.refresh();
};

$.prototype.saveCurrentSelection = function() {
	if(!this._combinedMode) {
		this._previewWindow.addImage(this._fileList.currentFilePath(), 
			this._fileList.currentSection(), this._fileList.currentFile());
		this._previewWindowDead.addImage(this._fileList.currentFilePathDead(), 
			this._fileList.currentSection(), this._fileList.currentFile());
		this._previewWindowSv.addImage(this._fileList.currentFilePathSv(), 
			this._fileList.currentSection(), this._fileList.currentFile());
		this._previewWindowFace.addImage(this._fileList.currentFilePathFace(), 
			this._fileList.currentSection(), this._fileList.currentFile());
	} else {
		const combines = this._folderList.combines();
		for(let i = 0; i < combines.length; i++) {
			this._previewWindow.addImage(_.path + combines[i] + '/walk/', 
				combines[i], this._fileList.currentFile());
			this._previewWindowDead.addImage(_.path + combines[i] + '/dead/', 
				combines[i], this._fileList.currentFile());
			this._previewWindowSv.addImage(_.path + combines[i] + '/sv/', 
				combines[i], this._fileList.currentFile());
			this._previewWindowFace.addImage(_.path + combines[i] + '/face/', 
				combines[i], this._fileList.currentFile());
		}
	}
	if(this._mandatories[this._fileList.currentSection()]) {
		this._mandatories[this._fileList.currentSection()] = false;
	}
	this._folderList.refresh();
};

$.prototype.shiftCurrentSelection = function(index) {
	const section = this._fileList.currentSection();
	const colorSec = this._fileList.currentSectionNoPart();
	let color;
	if($dataCharacterCreator[colorSec]) {
		color = $dataCharacterCreator[colorSec].colors[index];
	} else {
		color = [0];
	}
	if(!this._combinedMode) {
		this._previewWindow.setColor(section, color);
		this._previewWindowDead.setColor(section, color);
		this._previewWindowSv.setColor(section, color);
		this._previewWindowFace.setColor(section, color);
	} else {
		const combines = this._folderList.combines();
		for(let i = 0; i < combines.length; i++) {
			this._previewWindow.setColor(combines[i], color);
			this._previewWindowDead.setColor(combines[i], color);
			this._previewWindowSv.setColor(combines[i], color);
			this._previewWindowFace.setColor(combines[i], color);
		}
	}
};

$.prototype.onFileListCancel = function() {
	this._fileList.deselect();
	this._fileList.deactivate();
	this._folderList.activate();
	this._hueWindow.close();
};
})(Scene_CharacterCreator);

//-----------------------------------------------------------------------------
// Sprite_Character
//-----------------------------------------------------------------------------

(function($) {
var _isImageChanged = $.prototype.isImageChanged;
$.prototype.isImageChanged = function() {
	return (_isImageChanged.apply(this, arguments) || this._character.needsCustomUpdate());
};

var _setCharacterBitmap = $.prototype.setCharacterBitmap;
$.prototype.setCharacterBitmap = function() {
	if(!this._character.hasSetImage()) {
		_setCharacterBitmap.call(this);
	} else {
		if(this._character.isDeadCustomCharacter()) {
			this.bitmap = this._character.getCreatorBitmapDead();
		} else {
			this.bitmap = this._character.getCreatorBitmap();
		}
		this._character.setNeedsCustomUpdate(false);
		this._isBigCharacter = true;
	}
};
})(Sprite_Character);

//-----------------------------------------------------------------------------
// Sprite_Actor
//-----------------------------------------------------------------------------

Sprite_Actor.prototype.updateBitmap = function() {
	Sprite_Battler.prototype.updateBitmap.call(this);
	const name = this._actor.battlerName();
	if (this._battlerName !== name) {
		this._battlerName = name;
		if(!this._actor.hasSetImage()) {
			this._mainSprite.bitmap = ImageManager.loadSvActor(name);
		} else {
			this._mainSprite.bitmap = this._actor.getCreatorBitmap();
		}
	}
};

//-----------------------------------------------------------------------------
// Sprite_DisplayCharacter
//-----------------------------------------------------------------------------
(function($) {
$.prototype = Object.create(Sprite_Base.prototype);
$.prototype.constructor = $;

$.prototype.initialize = function() {
	Sprite_Base.prototype.initialize.call(this);
	this._stepCounter = 1;
	this._stepDirection = 1;
	this._directionCounter = 0;
	this._directions = [0, 1, 3, 2];
	this._specificCounter = 0;
	this.visible = false;
	this.refresh();
};

$.prototype.update = function() {
	Sprite_Base.prototype.update.call(this);
	this._specificCounter++;
	if(this._specificCounter % 10 === 0) {
		this._stepCounter += this._stepDirection;
		if(this._stepCounter === 2 || this._stepCounter === 0) this._stepDirection *= (-1);
		this.refresh();
	}
	if(this._specificCounter % 120 === 0) {
		this._directionCounter++;
		if(this._directionCounter > 3) this._directionCounter = 0;
		this.refresh();
	}
};

$.prototype.refresh = function(reset) {
	if(reset) {
		this._stepCounter = 1;
		this._stepDirection = 1;
		this._directionCounter = 0;
		this._specificCounter = 0;
	}
	this.setFrame(_.width * this._stepCounter, _.height * this._directions[this._directionCounter], 
		_.width, _.height);
	if(!this.visible) this.visible = true;
};
})(Sprite_DisplayCharacter);

//-----------------------------------------------------------------------------
// Sprite_DisplayDeadCharacter
//-----------------------------------------------------------------------------

Sprite_DisplayDeadCharacter.prototype = Object.create(Sprite_Base.prototype);
Sprite_DisplayDeadCharacter.prototype.constructor = Sprite_DisplayDeadCharacter;

Sprite_DisplayDeadCharacter.prototype.initialize = function() {
	Sprite_Base.prototype.initialize.call(this);
	this.visible = false;
	this.refresh();
};

Sprite_DisplayDeadCharacter.prototype.refresh = function() {
	this.setFrame(0, 0, _.width, _.height);
	this.visible = true;
};

//-----------------------------------------------------------------------------
// Sprite_DisplayBlankCharacter
//-----------------------------------------------------------------------------

Sprite_DisplayBlankCharacter.prototype = Object.create(Sprite_Base.prototype);
Sprite_DisplayBlankCharacter.prototype.constructor = Sprite_DisplayBlankCharacter;

Sprite_DisplayBlankCharacter.prototype.refresh = function() {};

//-----------------------------------------------------------------------------
// Sprite_DisplaySvCharacter
//-----------------------------------------------------------------------------
(function($) {
$.prototype = Object.create(Sprite_Base.prototype);
$.prototype.constructor = $;

$.prototype.initialize = function() {
	Sprite_Base.prototype.initialize.call(this);
	this._stepCounter = 0;
	this._stepDirection = 1;
	this._currentRow = 0;
	this._currentColumn = 0;
	this._specificCounter = 0;
	this.visible = false;
	this.refresh();
};

$.prototype.update = function() {
	Sprite_Base.prototype.update.call(this);
	this._specificCounter++;
	if(this._specificCounter % 10 === 0) {
		this._stepCounter += this._stepDirection;
		if(this._stepCounter === 2 || this._stepCounter === 0) this._stepDirection *= (-1);
		this.refresh();
	}
	if(this._specificCounter % 120 === 0) {
		this._currentRow++;
		if(this._currentRow > 5) {
			this._currentRow = 0;
			this._currentColumn++;
			if(this._currentColumn > 2) {
				this._currentColumn = 0;
			}
		}
		this.refresh();
	}
};

$.prototype.refresh = function(reset) {
	if(reset) {
		this._stepCounter = 0;
		this._stepDirection = 1;
		this._currentRow = 0;
		this._currentColumn = 0;
		this._specificCounter = 0;
	}
	this.setFrame((_.svWidth * this._stepCounter) + (_.svWidth * 3 * this._currentColumn), 
		_.svHeight * this._currentRow, _.svWidth, _.svHeight);
	if(!this.visible) this.visible = true;
};
})(Sprite_DisplaySvCharacter);

//-----------------------------------------------------------------------------
// Window_Base
//-----------------------------------------------------------------------------
(function($) {
$.prototype.drawCustomCharacter = function(actor, x, y, bitmap) {
	if(actor.hasSetImage()) {
		bitmap = actor.getCreatorBitmapChar();
	} else {
		bitmap = _.loadImage('CustomCharacter', 0);
	}
	const big = true;
	const pw = bitmap.width / (big ? 3 : 12);
	const ph = bitmap.height / (big ? 4 : 8);
	const n = 0;
	const sx = (n % 4 * 3 + 1) * pw;
	const sy = (Math.floor(n / 4) * 4) * ph;
	this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
};

$.prototype.drawCustomCharacterFromInfo = function(info, x, y) {
	let bitmap = $gameCharacterCreations.buildBitmapFromInfo(info);
	if(!bitmap) {
		bitmap = _.loadImage('CustomCharacter', 0);
	}
	const pw = bitmap.width / 3;
	const ph = bitmap.height / 4;
	const n = 0;
	const sx = (n % 4 * 3 + 1) * pw;
	const sy = (Math.floor(n / 4) * 4) * ph;
	this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
};

_.$_drawActorCharacter = $.prototype.drawActorCharacter;
$.prototype.drawActorCharacter = function(actor, x, y) {
	if(actor.hasSetImage()) {
		this.drawCustomCharacter(actor, x, y);
	} else {
		_.$_drawActorCharacter.apply(this, arguments);
	}
};

$.prototype.drawCustomFace = function(actor, x, y, w, h) {
	const width = $._faceWidth;
	const height = $._faceHeight;
	w = w || width;
	h = h || height;
	const bitmap = this.getCustomFace(actor);
	this.contents.blt(bitmap, 0, 0, width, height, x, y, w, h);
};

$.prototype.getCustomFace = function(actor) {
	if(actor.hasSetImage()) {
		if($gameParty.inBattle()) {
			if(BattleManager.customFaceCache[actor.actorId()]) {
				return BattleManager.customFaceCache[actor.actorId()];
			} else {
				var bitmap = actor.getCreatorBitmapFace();
				BattleManager.customFaceCache[actor.actorId()] = bitmap;
				return bitmap;
			}
		} else {
			return actor.getCreatorBitmapFace();
		}
	} else {
		return _.loadImage('CustomFace', 0);
	}
};

_.$_drawActorFace = $.prototype.drawActorFace;
$.prototype.drawActorFace = function(actor, x, y, width, height) {
	if(actor.hasSetImage()) {
		this.drawCustomFace(actor, x, y, width, height);
	} else {
		_.$_drawActorFace.apply(this, arguments);
	}
};

$.prototype.drawCharacterFromBitmap = function(bitmap, x, y) {
	if(!bitmap) {
		bitmap = _.loadImage('CustomCharacter', 0);
	}
	const big = true;
	const pw = bitmap.width / (big ? 3 : 12);
	const ph = bitmap.height / (big ? 4 : 8);
	const n = 0;
	const sx = (n % 4 * 3 + 1) * pw;
	const sy = (Math.floor(n / 4) * 4) * ph;
	this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
};

$.prototype.drawFaceFromBitmap = function(bitmap, x, y, w, h) {
	const width = $._faceWidth;
	const height = $._faceHeight;
	w = w || width;
	h = h || height;
	if(!bitmap) {
		bitmap = _.loadImage('CustomFace', 0);
	}
	this.contents.blt(bitmap, 0, 0, width, height, x, y, w, h);
};

$.prototype.drawSvActorFromBitmap = function(bitmap, x, y) {
	if(!bitmap) return;
	var pw = bitmap.width / 9;
	var ph = bitmap.height / 6;
	var sx = 0;
	var sy = 0;
	this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
};
})(Window_Base);

//-----------------------------------------------------------------------------
// Window_Message
//-----------------------------------------------------------------------------

_.Window_Message_drawMessageFace = Window_Message.prototype.drawMessageFace;
Window_Message.prototype.drawMessageFace = function() {
	const text = (this._textState) ? this._textState.text : '';
	if(text.match(/<CC\s?Face:\s*(\d+)\s*>/i)) {
		this._textState.text = text.replace(/<CC\s?Face:\s*(\d+)\s*>/i, '');
		const id = parseInt(RegExp.$1);
		this.drawCustomFace($gameActors.actor(id), 0, 0);
	} else {
		_.Window_Message_drawMessageFace.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// Window_SavefileList
//-----------------------------------------------------------------------------

Window_SavefileList.prototype.drawPartyCharacters = function(info, x, y) {
	if(info.characters) {
		for (let i = 0; i < info.characters.length; i++) {
			if(info.srd_cc_chars && info.srd_cc_chars[i]) {
				const data = info.srd_cc_chars[i];
				this.drawCustomCharacterFromInfo(data, x + i * _.width, y);
			} else {
				const data = info.characters[i];
				this.drawCharacter(data[0], data[1], x + i * 48, y);
			}
		}
	}
};

if(Imported.YEP_SaveCore) {

Window_SaveInfo.prototype.drawPartyGraphics = function(dy) {
	if (Yanfly.Param.SaveInfoPartyType === 0) return dy;
	dy = eval(Yanfly.Param.SaveInfoPartyY);
	var length = this._saveContents.party.maxBattleMembers();
	var dw = this.contents.width / length;;
	dw = Math.floor(dw);
	var dx = Math.floor(dw / 2);
	for (var i = 0; i < length; ++i) {
		var actorId = this._saveContents.party._actors[i];
		var member = this._saveContents.actors._data[actorId];
		if (member) {
			const cc = this._saveContents.characterCreations;
			if(cc.hasInfo(actorId)) {
				if(Yanfly.Param.SaveInfoPartyType === 1) {
					var bitt = cc.buildBitmap(actorId);
					this.drawCharacterFromBitmap(bitt, dx, dy);
				} else if (Yanfly.Param.SaveInfoPartyType === 2) {
					var fh = Window_Base._faceHeight;
					var fw = Window_Base._faceWidth;
					var fx = dx - Math.floor(Math.min(fh, dw) / 2);
					var dif = Math.floor(Math.max(0, dw - fw) / 2);
					var name = member.faceName();
					var index = member.faceIndex();
					var bitt = cc.buildBitmapFace(actorId);
					this.drawFaceFromBitmap(bitt, fx - dif, dy - fh, dw, fh);
				} else if (Yanfly.Param.SaveInfoPartyType === 3) {
					var bitt = cc.buildBitmapSv(actorId);
					this.drawSvActorFromBitmap(bitt, dx, dy);
				}
			} else {
				if(Yanfly.Param.SaveInfoPartyType === 1) {
					var name = member.characterName();
					var index = member.characterIndex();
					this.drawCharacter(name, index, dx, dy);
				} else if (Yanfly.Param.SaveInfoPartyType === 2) {
					var fh = Window_Base._faceHeight;
					var fw = Window_Base._faceWidth;
					var fx = dx - Math.floor(Math.min(fh, dw) / 2);
					var dif = Math.floor(Math.max(0, dw - fw) / 2);
					var name = member.faceName();
					var index = member.faceIndex();
					this.drawFace(name, index, fx - dif, dy - fh, dw, fh);
				} else if (Yanfly.Param.SaveInfoPartyType === 3) {
					this.drawSvActor(member, dx, dy);
				}
			}
		}
		dx += dw;
	}
	return dy;
};

}

//-----------------------------------------------------------------------------
// Window_RowFormation
//-----------------------------------------------------------------------------

if(Imported.YEP_RowFormation) {

_.Window_RowFormation_getImage = Window_RowFormation.prototype.getImage;
Window_RowFormation.prototype.getImage = function(actor) {
	if(actor.hasSetImage()) {
		let result;
		if (Yanfly.Param.RowMapSprite) {
			result = actor.getCreatorBitmapChar();
		} else {
			result = actor.getCreatorBitmap();
		}
		console.log(actor.name())
		return result;
	} else {
		return _.Window_RowFormation_getImage.apply(this, arguments);
	}
};

_.Window_Base_drawSvActor = Window_Base.prototype.drawSvActor;
Window_Base.prototype.drawSvActor = function(actor, x, y) {
	if(actor.hasSetImage()) {
		const bitmap = actor.getCreatorBitmap();
		const pw = bitmap.width / 9;
		const ph = bitmap.height / 6;
		const sx = 0;
		const sy = 0;
		this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
	} else {
		_.Window_Base_drawSvActor.apply(this, arguments);
	}
};

}

//-----------------------------------------------------------------------------
// Window_BattleStatus
//-----------------------------------------------------------------------------

if(Imported.YEP_BattleStatusWindow) {

Window_BattleStatus.prototype.drawCustomFace = function(actor, x, y, w, h) {
	const width = Window_Base._faceWidth;
	const height = Window_Base._faceHeight;
	w = w || width;
	h = h || height;
	const bitmap = this.getCustomFace(actor);
	this._faceContents.bitmap.blt(bitmap, 0, 0, width, height, x, y, w, h);
};

_.Window_BattleStatus_drawStatusFace = Window_BattleStatus.prototype.drawStatusFace;
Window_BattleStatus.prototype.drawStatusFace = function(index) {
	var actor = $gameParty.battleMembers()[index];
	if(actor.hasSetImage()) {
		const rect = this.itemRect(index);
		const ww = Math.min(rect.width - 8, Window_Base._faceWidth);
		const wh = Math.min(rect.height - 8, Window_Base._faceHeight);
		const wx = rect.x + rect.width - ww - 6;
		const wy = rect.y + 4;
		Window_Base.prototype.drawActorFace.call(this, actor, wx, wy, ww, wh);
	} else {
		_.Window_BattleStatus_drawStatusFace.apply(this, arguments);
	}
};

Window_BattleStatus.prototype.drawAllFaces = function() {
	for(var i = 0; i < $gameParty.battleMembers().length; ++i) {
		var member = $gameParty.battleMembers()[i];
		var bitmap;
		if(member.hasSetImage()) {
			bitmap = ImageManager.loadFace(member.faceName());
		} else {
			bitmap = this.getCustomFace(member);
		}
		if (bitmap.width <= 0) return setTimeout(this.drawAllFaces.bind(this), 5);
	}
	this._faceContents.bitmap.clear();
	for (var i = 0; i < this.maxItems(); ++i) {
		this.drawStatusFace(i);
	}
};

}

//-----------------------------------------------------------------------------
// Window_CharacterCreator_FolderList
//-----------------------------------------------------------------------------

(function($) {
$.prototype = Object.create(Window_Command.prototype);
$.prototype.constructor = $;

$.prototype.initialize = function(mandatories) {
	this._combines = {};
	this._mandatories = mandatories;
	Window_Command.prototype.initialize.call(this);
};

$.prototype.currentName = function() {
	return this._list[this.index()].name;
};

$.prototype.currentFolder = function() {
	if(this._combines[this._list[this.index()].name]) {
		return this._combines[this._list[this.index()].name][0];
	}
	return this._list[this.index()].name;
};

$.prototype.combines = function() {
	return this._combines[this._list[this.index()].name];
};

$.prototype.makeCommandList = function() {
	const images = _.getFolderList();
	for(let i = 0; i < images.length; i++) {
		if(images[i]) {
			const fold = images[i];
			if(fold.match(/Part(\d+)/)) {
				const id = parseInt(RegExp.$1);
				const fold2 = fold.replace(/\s*Part\d+\s*/, '');
				if(id === 1) {
					let condition = '';
					if($dataCharacterCreator[fold2]) {
						condition = $dataCharacterCreator[fold2].condition;
					} else {
						condition = 'true';
					}
					if(eval(condition)) this.addCommand(fold2, 'combined');
					this._combines[fold2] = [];
					this._combines[fold2].push(fold);
				} else {
					if(!this._combines[fold2]) this._combines[fold2] = [];
					this._combines[fold2].push(fold);
				}
			} else {
				let condition = '';
				if($dataCharacterCreator[fold]) {
					condition = $dataCharacterCreator[fold].condition;
				} else {
					condition = 'true';
				}
				if(eval(condition)) this.addCommand(fold, 'ok');
			}
		}
	}
	this.reorder();
};

$.prototype.drawItem = function(index) {
	const rect = this.itemRectForText(index);
	const align = this.itemTextAlign();
	let name = this._list[index].name;
	if(this._mandatories[name]) {
		this.changeTextColor(_.mandatoryColor);
	}
	if($dataCharacterCreator[name] && $dataCharacterCreator[name].label) {
		name = $dataCharacterCreator[name].label;
	}
	this.changePaintOpacity(this.isCommandEnabled(index));
	this.drawText(name, rect.x, rect.y, rect.width, align);
	this.resetTextColor();
};

$.prototype.reorder = function() {
	const result = [];
	for(let i = 0; i < _.order.length; i++) {
		const o = _.order[i];
		for(let j = 0; j < this._list.length; j++) {
			if(o === this._list[j].name) {
				result.push(this._list[j]);
				continue;
			}
		}
	}
	this._list = result;
};
})(Window_CharacterCreator_FolderList);

//-----------------------------------------------------------------------------
// Window_CharacterCreator_FileList
//-----------------------------------------------------------------------------

(function($) {
$.prototype = Object.create(Window_Command.prototype);
$.prototype.constructor = $;

$.prototype.initialize = function(folderWindow) {
	this._folderWindow = folderWindow;
	this._folder = this._folderWindow.currentFolder();
	this._combinedMode = false;
	this._createStuff();
	Window_Command.prototype.initialize.call(this);
};

$.prototype._createStuff = function() {
	this._list = [];
	this.makeCommandList();
	const section = this._folderWindow.currentName().trim();
	const file = this._list[0].name;
	let dir;
	let source;
	if($dataCharacterCreator[section]) {
		dir = $dataCharacterCreator[section].direction;
		source = $dataCharacterCreator[section].source;
	} else {
		dir = 0;
		source = 'Walk';
	}
	let filePath = '';
	const sizes = [];
	if(source.match(/Walk/i)) {
		filePath = this.currentFilePath();
		sizes[0] = _.width;
		sizes[1] = _.height;
	} else if(source.match(/Dead/i)) {
		filePath = this.currentFilePathDead();
	} else if(source.match(/SV/i)) {
		filePath = this.currentFilePathSv();
		sizes[0] = 0;
		sizes[1] = 0;
	} else if(source.match(/Face/i)) {
		filePath = this.currentFilePathFace();
		sizes[0] = 0;
		sizes[1] = 0;
	}
	const bit = _.loadImageWPath(filePath, file);
	let wid = bit.width / 3;
	let hei = bit.height / 4;
	let xOff = 0;
	let yOff = 0;
	if(source.match(/Walk/i)) {
		xOff = -5;
	} else if(source.match(/Dead/i)) {
		wid = bit.width / 3;
		hei = bit.height;
	} else if(source.match(/SV/i)) {
		wid = bit.width / 9;
		hei = bit.height / 6;
	} else if(source.match(/Face/i)) {
		wid = bit.width;
		hei = bit.height;
	}
	this._allInfo = [filePath, sizes[0], sizes[1], wid, hei, xOff, yOff, dir];
};

$.prototype.lineHeight = function() {
	return this.itemHeight();
};

$.prototype.itemWidth = function() {
	return this._allInfo[3];
};

$.prototype.itemHeight = function() {
	return this._allInfo[4];
};

$.prototype.windowWidth = function() {
	return (this.itemWidth() * this.maxCols()) + (this.standardPadding() * 2)
		 + (this.spacing() * (this.maxCols() - 1));
};

$.prototype.maxCols = function() {
	return (this._allInfo[3] > 100) ? _.bigCols : _.smallCols;
};

$.prototype.setCombinedMode = function(combinedMode) {
	this._combinedMode = combinedMode;
};

$.prototype.currentFile = function() {
	return this._list[this.index()].name;
};

$.prototype.currentSection = function() {
	return this._folder;
};

$.prototype.currentSectionNoPart = function() {
	let result = this._folder;
	if(result.match(/\s*(.*)part\d+\s*/i)) {
		result = String(RegExp.$1).trim();
	}
	return result;
};

$.prototype.currentFolder = function() {
	return this._folder + '/';
};

$.prototype.currentFilePath = function() {
	return _.path + this.currentFolder() + 'walk/';
};

$.prototype.currentFilePathDead = function() {
	return _.path + this.currentFolder() + 'dead/';
};

$.prototype.currentFilePathSv = function() {
	return _.path + this.currentFolder() + 'sv/';
};

$.prototype.currentFilePathFace = function() {
	return _.path + this.currentFolder() + 'face/';
};

$.prototype.update = function() {
	Window_Command.prototype.update.call(this);
	if(this._folder !== this._folderWindow.currentFolder()) {
		this._folder = this._folderWindow.currentFolder();
		this.refresh();
		this.select(-1);
	}
};

$.prototype.refreshX = function() {
	this.x = this._folderWindow.x + this._folderWindow.width;
};

$.prototype.refreshY = function() {
	this.y = this._folderWindow.y;
};

$.prototype.refreshWidth = function() {
	this.width = Math.min(this.windowWidth(), Graphics.boxWidth);
};

$.prototype.refreshHeight = function() {
	this.height = Math.min(this.windowHeight(), Graphics.boxHeight);
};

$.prototype.refresh = function() {
	this.clearCommandList();
	this._createStuff();
	this.refreshWidth();
	this.refreshHeight();
	this.refreshX();
	this.refreshY();
	this.createContents();
	Window_Selectable.prototype.refresh.call(this);
};

$.prototype.makeCommandList = function() {
	const images = _.getFileList(this.currentFolder());
	for(let i = 0; i < images.length; i++) {
		if(images[i]) {
			this.addCommand(images[i], 'ok');
		}
	}
};

$.prototype.drawItem = function(index) {
	const section = this._folderWindow.currentName().trim();
	const rect = this.itemRectForText(index);
	const file = this._list[index].name;
	let dir;
	let source;
	let background;
	if($dataCharacterCreator[section]) {
		dir = $dataCharacterCreator[section].direction;
		source = $dataCharacterCreator[section].source;
		background = $dataCharacterCreator[section].background;
	} else {
		dir = 0;
		source = 'Walk';
	}
	if(_.pieceBackground) {
		const back = _.loadImage(source + '-Background');
		this.contents.blt(back, this._allInfo[1], this._allInfo[2] * this._allInfo[7], this._allInfo[3], 
			this._allInfo[4], rect.x + this._allInfo[5], rect.y + this._allInfo[6]);
	}
	const bit = _.loadImageWPath(this._allInfo[0], file);
	this.contents.blt(bit, this._allInfo[1], this._allInfo[2] * this._allInfo[7], this._allInfo[3], 
		this._allInfo[4], rect.x + this._allInfo[5], rect.y + this._allInfo[6]);
};
})(Window_CharacterCreator_FileList);

//-----------------------------------------------------------------------------
// Window_CharacterCreator_Preview
//-----------------------------------------------------------------------------

(function($) {
$.prototype = Object.create(Window_Base.prototype);
$.prototype.constructor = $;

$.prototype.initialize = function(x, y, width, height, type) {
	Window_Base.prototype.initialize.call(this, x, y, 
		width + (this.standardPadding() * 2), height + (this.standardPadding() * 2));
	this._spritePieces = {};
	this._spriteFilters = {};
	this._pieces = {};
	this._formattingClass;
	if(!type) {
		this._formattingClass = Sprite_DisplayBlankCharacter;
	} else if(type === 'char') {
		this._formattingClass =  Sprite_DisplayCharacter;
	} else if(type === 'dead') {
		this._formattingClass =  Sprite_DisplayDeadCharacter;
	} else if(type === 'sv') {
		this._formattingClass =  Sprite_DisplaySvCharacter;
	} else {
		this._formattingClass =  Sprite_DisplayBlankCharacter;
	}
	this._sprite = new Sprite();
	this._sprite.x = this.standardPadding();
	this._sprite.y = this.standardPadding();
	this.addChild(this._sprite);
};

$.prototype.info = function() {
	return this._pieces;
};

$.prototype.setInfo = function(info) {
	for(let key in this._spritePieces) {
		this._sprite.removeChild(this._spritePieces[key]);
	}
	this._spritePieces = {};
	this._spriteFilters = {};
	this._pieces = info;
	this.refresh();
};

$.prototype.addImage = function(imagePath, section, file) {
	let newColor = [0];
	if(this._pieces[section] && this._pieces[section].color) {
		newColor = JsonEx.makeDeepCopy(this._pieces[section].color);
	}
	this._pieces[section] = {path: imagePath, file: file, color: newColor};
	this.refresh();
};

$.prototype.setColor = function(section, hsl) {
	if(this._spritePieces[section]) {
		this._spriteFilters[section].hue(0);
		if(hsl[4]) this._spriteFilters[section].greyscale(hsl[4], true);
		if(hsl[3]) this._spriteFilters[section].brightness(hsl[3], true);
		if(hsl[2]) this._spriteFilters[section].saturate(hsl[2], true);
		if(hsl[1]) this._spriteFilters[section].hue(hsl[1], true);
		this._pieces[section].color = JsonEx.makeDeepCopy(hsl);
	}
};

$.prototype.refresh = function() {
	for(let i = 0; i < _.priorities.length; i++) {
		const section = _.priorities[i];
		if(this._pieces[section]) {
			if(!this._spritePieces[section]) {
				const info = this._pieces[section];
				this._spritePieces[section] = new this._formattingClass();
				this._spriteFilters[section] = new PIXI.filters.ColorMatrixFilter();
				this._spritePieces[section].filters = [this._spriteFilters[section]];
				if(info.color) {
					this.setColor(section, info.color);
				}
				const bit = _.loadImageWPath(info.path, info.file, 0, true);
				bit.addLoadListener(function() {
					if(this._spritePieces[section]) {
						this._spritePieces[section].bitmap = bit;
						this._spritePieces[section].refresh(true);
					}
				}.bind(this));
			} else {
				const info = this._pieces[section];
				const bit = _.loadImageWPath(info.path, info.file, 0, true);
				bit.addLoadListener(function() {
					if(this._spritePieces[section]) {	
						this._spritePieces[section].bitmap = bit;
						this._spritePieces[section].refresh(true);
					}
				}.bind(this));
			}
		} else {
			if(this._spritePieces[section]) this._sprite.removeChild(this._spritePieces[section]);
			this._spritePieces[section] = undefined;
		}
	}
	for(let i = 0; i < _.priorities.length; i++) {
		const section = _.priorities[i];
		if(this._spritePieces[section]) {
			this._sprite.removeChild(this._spritePieces[section]);
			this._sprite.addChild(this._spritePieces[section]);
		}
	}
};
})(Window_CharacterCreator_Preview);

//-----------------------------------------------------------------------------
// Window_HueSelector
//-----------------------------------------------------------------------------

Window_HueSelector.prototype = Object.create(Window_Command.prototype);
Window_HueSelector.prototype.constructor = Window_HueSelector;

_.Window_HueSelector_initialize = Window_HueSelector.prototype.initialize;
Window_HueSelector.prototype.initialize = function(x, y, fileWindow, scene) {
	this._colorIndex = 0;
	_.Window_HueSelector_initialize.apply(this, arguments);
	this.select(-1);
	this._fileWindow = fileWindow;
	this._characterCreator = scene;
	this._colors = $dataCharacterCreator[this._fileWindow.currentSectionNoPart()].colors;
};

Window_HueSelector.prototype.windowWidth = function() {
	return 240;
};

Window_HueSelector.prototype.windowHeight = function() {
	return this.fittingHeight(1) + 16;
};

Window_HueSelector.prototype.itemHeight = function() {
	return this.contentsHeight();
};

Window_HueSelector.prototype.maxItems = function() {
	return 1;
};

Window_HueSelector.prototype.update = function() {
	Window_Command.prototype.update.apply(this, arguments);
	if(!_.isNodeJs) {
		if(TouchInput.isTriggered()) {
			this.cursorRight();
		}
	}
};

Window_HueSelector.prototype.cursorRight = function(wrap) {
	if(this._colorIndex < this._colors.length - 1) {
		this._colorIndex++;
		this.refreshEveything();
		SoundManager.playCursor();
	}
};

Window_HueSelector.prototype.isCurrentItemEnabled = function() {
	return true;
};

Window_HueSelector.prototype.playOkSound = function() {
	SoundManager.playOk();
};

Window_HueSelector.prototype.cursorLeft = function(wrap) {
	if(this._colorIndex > 0) {
		this._colorIndex--;
		this.refreshEveything();
		SoundManager.playCursor();
	}
};

Window_HueSelector.prototype.refreshEveything = function(wrap) {
	this.refresh();
	this._characterCreator.shiftCurrentSelection(this._colorIndex);
};

Window_HueSelector.prototype.drawItem = function(index) {
	const rect = this.itemRectForText(index);
	this.resetTextColor();
	this.contents.fontSize = 16;
	this.contents.fontItalic = true;
	this.drawText("Color", rect.x, rect.y - 7, rect.width, 'center');
	this.contents.fontItalic = false;
	this.contents.fontSize = 22;
	if(this._colors && this._colors[this._colorIndex]) this.drawText(this._colors[this._colorIndex][0], rect.x, rect.y + 18, rect.width, 'center');
	this.resetFontSettings();
	this.contents.fontSize = 32;
	this.drawText("<", rect.x, rect.y + 8, rect.width, 'left');
	this.drawText(">", rect.x, rect.y + 8, rect.width, 'right');
};

Window_HueSelector.prototype.open = function(section) {
	const index = $gameSystem.colorIndexSaves()[section];
	this._colorIndex = index || 0;
	this._colors = $dataCharacterCreator[this._fileWindow.currentSectionNoPart()].colors;
	this.refresh();
	Window_Command.prototype.open.call(this);
};

//-----------------------------------------------------------------------------
// Window_CharacterCreatorConfirmation
//-----------------------------------------------------------------------------

Window_CharacterCreatorConfirmation.prototype = Object.create(Window_Command.prototype);
Window_CharacterCreatorConfirmation.prototype.constructor = Window_CharacterCreatorConfirmation;

Window_CharacterCreatorConfirmation.prototype.initialize = function() {
	Window_Command.prototype.initialize.call(this, 0, 0);
	this.updatePlacement();
	this.openness = 0;
};

Window_CharacterCreatorConfirmation.prototype.windowWidth = function() {
	return 240;
};

Window_CharacterCreatorConfirmation.prototype.itemTextAlign = function() {
	return 'center';
};

Window_CharacterCreatorConfirmation.prototype.updatePlacement = function() {
	this.x = (Graphics.boxWidth - this.width) / 2;
	this.y = Graphics.boxHeight - this.height - 96;
};

Window_CharacterCreatorConfirmation.prototype.makeCommandList = function() {
	this.addCommand("Yes!",   'yes');
	this.addCommand("Nope",   'no');
};

})(SRD.CharacterCreatorEX);