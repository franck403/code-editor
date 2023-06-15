monaco.editor.onDidCreateEditor(function (event) {
	console.log('editor crated');
	document.getElementById("load").remove()
});

require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.39.0/min/vs' } });
require(['vs/editor/editor.main'], function () {
	var editor = monaco.editor.create(document.getElementById('container'), {
		value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
		language: 'javascript'
	});
});