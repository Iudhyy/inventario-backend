test('Busca o nome do cliente pelo id', () => {
    let cliente_dao = new ClienteDAO()
    cliente = cliente_dao.find_by_id(10)
    expect(cliente.nome).toBe("Edson Arantes do Nascimento")
  })