test('salario de não comissionado deve ser menor ou igual ao salário de comissionado',
    () => {
        expect(naoComissionado.getSalario()).toBeLessThanOrEqual(comissionado.getSalario())
})