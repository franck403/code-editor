monaco.languages.registerCompletionItemProvider('javascript', {
    provideCompletionItems: (model, position) => {
        const suggestions = keywords.map(keyword => ({
            label: keyword,
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: keyword
        }));

        return { suggestions };
    }
});
