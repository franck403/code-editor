const value = `// write code here`;

const myEditor = monaco.editor.create(document.getElementById("container"), {
	value,
	language: "javascript",
	automaticLayout: true,
});