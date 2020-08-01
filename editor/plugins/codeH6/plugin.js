CKEDITOR.plugins.add( 'codeH6', {
  icons: 'h6',
  init: function( editor ) {
    editor.addCommand( 'wrapH6', {
      exec: function( editor ) {
        //editor.insertHtml('<h5>' + editor.getSelection().getSelectedText() + '</h5>');
    	var text = editor.getSelection().getSelectedText();
    	//editor.insertHtml("<h5>123</h5>");
    	var selection = editor.getSelection();
        var element = selection.getStartElement();
        element.setAttribute( 'class', 'warning' );
        console.log(element);
      }
    });
    editor.ui.addButton( 'H6Button', {
      label: 'Wrap H6',
      icon : this.path + 'icons/h6.png',
      command: 'wrapH6',
      toolbar: 'insert'
    });
  }
});