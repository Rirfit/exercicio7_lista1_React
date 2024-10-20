function Compra(props){
    let temDesconto = props.temDesconto

    return temDesconto ? "Tem desconto" : "Não tem desconto"
}
export default Compra