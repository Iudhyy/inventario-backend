const verbosHttp = [
    'GET',
    'POST',
    'PUT',
    'DELETE'
]
test('O verbo PUT está na lista' ,()=>{
    expect(verbosHttp).toContain('PUT')
})