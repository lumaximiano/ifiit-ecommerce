// Apenas números
export const apenasNumeros = (valor: string): string => {
  return valor.replace(/\D/g, '')
}

// Formatar CEP: 12345-678
export const formatarCEP = (valor: string): string => {
  const numeros = apenasNumeros(valor)
  if (numeros.length <= 5) return numeros
  return `${numeros.slice(0, 5)}-${numeros.slice(5, 8)}`
}

// Validar CEP (8 números)
export const validarCEP = (cep: string): boolean => {
  const numeros = apenasNumeros(cep)
  return numeros.length === 8
}

// Formatar número do cartão: 1234 5678 9012 3456
export const formatarNumeroCartao = (valor: string): string => {
  const numeros = apenasNumeros(valor)
  const grupos = []
  for (let i = 0; i < numeros.length && i < 16; i += 4) {
    grupos.push(numeros.slice(i, i + 4))
  }
  return grupos.join(' ')
}

// Formatar validade: MM/AA
export const formatarValidade = (valor: string): string => {
  const numeros = apenasNumeros(valor)
  if (numeros.length <= 2) return numeros
  return `${numeros.slice(0, 2)}/${numeros.slice(2, 4)}`
}

// Formatar CVV: máximo 3 números
export const formatarCVV = (valor: string): string => {
  return apenasNumeros(valor).slice(0, 3)
}

// Validar CVV (3 números)
export const validarCVV = (cvv: string): boolean => {
  const numeros = apenasNumeros(cvv)
  return numeros.length === 3
}

// Validar número do cartão (16 números)
export const validarNumeroCartao = (numero: string): boolean => {
  const numeros = apenasNumeros(numero)
  return numeros.length === 16
}

// Validar validade (mês 01-12, ano futuro)
export const validarValidade = (validade: string): boolean => {
  const numeros = apenasNumeros(validade)
  if (numeros.length !== 4) return false
  
  const mes = parseInt(numeros.slice(0, 2))
  const ano = parseInt(numeros.slice(2, 4))
  const anoAtual = new Date().getFullYear() % 100
  const mesAtual = new Date().getMonth() + 1
  
  if (mes < 1 || mes > 12) return false
  if (ano < anoAtual) return false
  if (ano === anoAtual && mes < mesAtual) return false
  
  return true
}