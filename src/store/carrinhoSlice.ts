import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ItemCarrinho = {
  id: number
  nome: string
  preco: number
  quantidade: number
  imagem: string
}

type CarrinhoState = {
  itens: ItemCarrinho[]
  aberto: boolean
}

const initialState: CarrinhoState = {
  itens: [],
  aberto: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ItemCarrinho>) => {
      const item = state.itens.find(i => i.id === action.payload.id)
      if (item) {
        item.quantidade++
      } else {
        state.itens.push({ ...action.payload, quantidade: 1 })
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(i => i.id !== action.payload)
    },
    aumentar: (state, action: PayloadAction<number>) => {
      const item = state.itens.find(i => i.id === action.payload)
      if (item) item.quantidade++
    },
    diminuir: (state, action: PayloadAction<number>) => {
      const item = state.itens.find(i => i.id === action.payload)
      if (item && item.quantidade > 1) {
        item.quantidade--
      } else {
        state.itens = state.itens.filter(i => i.id !== action.payload)
      }
    },
    toggleCarrinho: (state) => {
      state.aberto = !state.aberto
    },
    limpar: (state) => {
      state.itens = []
      state.aberto = false
    }
  }
})

export const { adicionar, remover, aumentar, diminuir, toggleCarrinho, limpar } = carrinhoSlice.actions
export default carrinhoSlice.reducer