function conectaBancoDeDados(){
    throw new Error('Não foi possível conectar ao banco de dados')
}

test('conexão com o banco de dados falha como esperado' ,()=>{
    expect(conectaBancoDeDados).toThrow('Não foi possível conectar ao banco de dados')
    expect(conectaBancoDeDados).toThrow(/dados/)
})