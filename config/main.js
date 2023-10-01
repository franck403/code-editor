

require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.39.0/min/vs' } });
require(['vs/editor/editor.main'], function () {
	var onend = monaco.editor.onDidCreateEditor(function (event) {
		console.log('Gcod is ready to use');
		document.getElementById("load").remove()
	});
	var editor = monaco.editor.create(document.getElementById('container'), {
		value: "",
		language: 'javascript'
	});
	monaco.languages.registerCompletionItemProvider('javascript', {
		provideCompletionItems: (model, position) => {
			const keywords = [["gl.SendMessage","gl.SendMessage(/*message*/)"],["gl.OnMessage","gl.OnMessage((data) => {/*code ex:data.val().message*/})"]]
			const suggestions = keywords.map(keyword => ({
				label: keyword[0],
				kind: monaco.languages.CompletionItemKind.Keyword,
				insertText: keyword[1]
			}));
	
			return { suggestions };
		}
	});	
});