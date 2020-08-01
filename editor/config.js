/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.skin = 'moono';
	config.toolbar = 'Full';
	config.toolbar_Full =
	[
		{ name: 'document', items : [ 'Source','-','Maximize',/*'Save',*//*'NewPage',*/'DocProps','Preview',/*'Print',*/] },
		{ name: 'clipboard', items : [ /*'Cut','Copy','Paste',*/'PasteText','PasteFromWord','-','Undo','Redo' ] },
		/*{ name: 'editing', items : [ 'Find','Replace','SelectAll','-','SpellChecker', 'Scayt' ] },*/
		/*{ name: 'insert', items : [ 'Flash','Smiley','PageBreak','Templates' ] },*/
		/*
		{ name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
		*/
		{ name: 'custom', items : [ 'Image','Link','Unlink','Anchor'] },
		/*{ name: 'custom', items : [ 'Iframe',] },*/
		{ name: 'custom', items : [ 'Youtube','PasteCode','SpecialChar','Smiley','CodeSnippet'] },
		'/',
		{ name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike', 'Subscript','Superscript','-','RemoveFormat' ] },
		{ name: 'paragraph2', items : [ 'JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'/*,'BidiLtr','BidiRtl'*/ ] },
		{ name: 'paragraph', items : [ 'NumberedList','BulletedList','Blockquote']},
		{ name: 'paragraph', items : [ 'Outdent','Indent']},
		{ name: 'paragraph', items : [ 'Table','HorizontalRule' ]},	
		'/',
		{ name: 'styles', items : [ /*'Styles',*/'Format','Font','FontSize' ] },
		{ name: 'colors', items : [ 'TextColor','BGColor' ] },
		{ name: 'colors', items : [ 'ShowBlocks','About','H6Button'  ] },
		{ name: 'colors', items : [ 'Pagecut', 'pbckcode' ] }

	];
	//config.allowedContent = true;
	//config.protectedSource.push( /<p class="[^:]*">.*?<\/p>/g );
	//config.extraAllowedContent = 'cut';
	//config.basicEntities = false;
	config.fontSize_sizes = '13/13px;15/15px;18/18px;21/21px;23/23px;';
	config.font_names =
		'Arial/Arial, Helvetica, sans-serif;' +
		'Tahoma;' +
		'Verdana;' +
		'Courier New;' +
		'Times New Roman/Times New Roman, Times, serif;';
	config.forcePasteAsPlainText = true;
	config.extraAllowedContent = 'cut;*(*);*{*};pre[*]{*}(*)';
	config.disallowedContent = 'img{width,height};img[width,height]';
	config.extraPlugins = 'image2,pagecut,youtube,pastecode,wordcount,notification,textselection,autosave,codesnippet';
	config.toolbarCanCollapse = true;
	config.image_prefillDimensions = false;
	config.image2_disableResizer = true;
	config.image2_prefillDimensions = false;
	//config.smiley_path = '/i/smileys/';
	config.codeSnippet_theme = 'vs.min';
	/*
	config.codeSnippet_languages = {
		html: 'HTML',
		css: 'CSS',
		javascript: 'JavaScript',
		php: 'PHP',
		sql: 'SQL',
	};
	*/
	config.wordcount = {
	    // Whether or not you want to show the Paragraphs Count
	    showParagraphs: true,
	    // Whether or not you want to show the Word Count
	    showWordCount: true,
	    // Whether or not you want to show the Char Count
	    showCharCount: true,
	    // Whether or not you want to count Spaces as Chars
	    countSpacesAsChars: false,
	    // Whether or not to include Html chars in the Char Count
	    countHTML: false,
	    // Maximum allowed Word Count, -1 is default for unlimited
	    maxWordCount: -1,
	    // Maximum allowed Char Count, -1 is default for unlimited
	    maxCharCount: -1,
	    // Add filter to add or remove element before counting (see CKEDITOR.htmlParser.filter), Default value : null (no filter)
	    filter: new CKEDITOR.htmlParser.filter({
	        elements: {
	            div: function( element ) {
	                if(element.attributes.class == 'mediaembed') {
	                    return false;
	                }
	            }
	        }
	    })
	};
	/*
	config.pbckcode = {
	    // An optional class to your pre tag.
	    cls: '',
	    // The syntax highlighter you will use in the output view
	    highlighter: 'HIGHLIGHT',
	    // An array of the available modes for you plugin.
	    // The key corresponds to the string shown in the select tag.
	    // The value correspond to the loaded file for ACE Editor.
	    modes: [['HTML', 'html'], ['CSS', 'css'], ['PHP', 'php'], ['JS', 'javascript']],
	    // The theme of the ACE Editor of the plugin.
	    theme: 'textmate',
	    // Tab indentation (in spaces)
	    tab_size: '4'
	};
	*/
	/*
	config.autosave = { 
		// Auto save Key - The Default autosavekey can be overridden from the config ...
		Savekey : "autosaveKey",
		// Ignore Content older then X
		// The Default Minutes (Default is 1440 which is one day) after the auto saved content is ignored can be overidden from the config ...
		NotOlderThen : 1440,
		// Save Content on Destroy - Setting to Save content on editor destroy (Default is false) ...
		saveOnDestroy : false,
		// Setting to set the Save button to inform the plugin when the content is saved by the user and doesn't need to be stored temporary ...
		saveDetectionSelectors : "input[name*='submit'],a[id*='Cancel']",
		// Notification Type - Setting to set the if you want to show the "Auto Saved" message, and if yes you can show as Notification or as Message in the Status bar (Default is "notification")
		//messageType : "notification",
		// Show in the Status Bar
		//messageType : "statusbar",
		// Show no Message
		messageType : "no",
		// Delay
		delay : 10,
		// The Default Diff Type for the Compare Dialog, you can choose between "sideBySide" or "inline". Default is "sideBySide"
		diffType : "sideBySide"     
	};
	*/
};
