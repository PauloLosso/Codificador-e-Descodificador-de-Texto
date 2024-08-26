// Mapeamento fixo para criptografia
const mapa = {
    'a': 'XxX', 'b': 'Ph@', 'c': 'jHj', 'd': '9', 'e': '#1',
    'f': '-', 'g': '~y', 'h': '%', 'i': '@Hc', 'j': '7',
    'k': '!', 'l': 'Z', 'm': '*', 'n': '3', 'o': 'YX',
    'p': '$$', 'q': '&', 'r': '5', 's': 'L', 't': '=',
    'u': 'TdH', 'v': '?', 'w': 'q%', 'x': '2', 'y': '^',
    'z': '4'
};

// Mapeamento inverso para descriptografia
const mapaInverso = {
    'XxX': 'a', 'Ph@': 'b', 'jHj': 'c', '9': 'd', '#1': 'e',
    '-': 'f', '~y': 'g', '%': 'h', '@Hc': 'i', '7': 'j',
    '!': 'k', 'Z': 'l', '*': 'm', '3': 'n', 'YX': 'o',
    '$$': 'p', '&': 'q', '5': 'r', 'L': 's', '=': 't',
    'TdH': 'u', '?': 'v', 'q%': 'w', '2': 'x', '^': 'y',
    '4': 'z'
};

// Função para criptografar o texto
function criptografar() {
    let texto = document.getElementById("inputText").value;
    let textoCriptografado = texto.split('').map(letra => mapa[letra.toLowerCase()] || letra).join(' ');
    document.getElementById("outputText").value = textoCriptografado;
}

// Função para descriptografar o texto
function descriptografar() {
    let textoCriptografado = document.getElementById("inputText").value;
    let texto = textoCriptografado.split(' ').map(simbolo => mapaInverso[simbolo] || simbolo).join('');
    document.getElementById("outputText").value = texto;
}

// Adiciona um evento para limpar o campo de saída quando o campo de entrada é limpo
document.getElementById("inputText").addEventListener("input", function() {
    let texto = this.value;
    if (texto.trim() === '') {
        document.getElementById("outputText").value = '';
    }
});
