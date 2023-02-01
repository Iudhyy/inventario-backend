test("resultados não devem possuir os mesmo atributos",
    () => {
        let geladeira = produto.findGeladeiraById(12)
        expect(geladeira).not.toEqual({preco: 1249.00, ano: '2014', modelo: 'Brastemp'})
})