# Codificador e Decodificador de Texto

<p>Este projeto é uma aplicação web simples para criptografar e descriptografar textos usando substituições fixas de caracteres,permitindo a troca de mensagens secretas entre pessoas que utilizam essa aplicação. A aplicação é construída com HTML, CSS e JavaScript.</p>

## Funcionalidades

<ul>
    <li><strong>Criptografia:</strong> Substitui caracteres do texto de entrada por símbolos ou sequências de caracteres fixos.</li>
    <li><strong>Descriptografia:</strong> Converte o texto criptografado de volta para a forma original.</li>
    <li><strong>Limpeza Automática:</strong> Limpa o campo de saída quando o campo de entrada é esvaziado.</li>
</ul>

## Estrutura do Projeto

<p>O projeto possui três arquivos principais:</p>

<ol>
    <li><strong><code>index.html</code></strong> - O arquivo HTML que define a estrutura da página.</li>
    <li><strong><code>codificadorDescodificador.css</code></strong> - O arquivo CSS que define o estilo da página.</li>
    <li><strong><code>codificadorDescodificador.js</code></strong> - O arquivo JavaScript que contém a lógica para criptografar e descriptografar o texto.</li>
</ol>

### <code>index.html</code>

<p>Define a estrutura da página com:</p>
<ul>
    <li>Dois campos de texto (<code>&lt;textarea&gt;</code>): um para entrada de texto e outro para exibir o texto criptografado/descriptografado.</li>
    <li>Dois botões: um para criptografar e outro para descriptografar o texto.</li>
    <li>Inclui o arquivo JavaScript <code>codificadorDescodificador.js</code> para adicionar funcionalidade à página.</li>
</ul>


## Dificuldades

<p>A principal dificuldade foi criar a lógica para a criptografia e descriptografia. No início, o código era bastante simples e realizava substituições diretas de cada letra por um conjunto fixo de letras e símbolos.</p>

<p>Esse código realizava uma substituição manual e direta, o que tornava o processo de manutenção e expansão muito trabalhoso, especialmente ao adicionar novas letras e símbolos.</p> <p>Para melhorar a flexibilidade e a eficiência, considerei usar <code>Math.random</code> para gerar um mapa de substituição aleatório. No entanto, descobri que, ao abrir o projeto em outro navegador ou computador, a descriptografia não funcionava corretamente, pois o mapa gerado aleatoriamente não era o mesmo. Portanto, abandonei a ideia de usar aleatoriedade e optei por um mapa fixo.</p> <p>Com o tempo, pesquisas e a ajuda de amigos, consegui aprimorar o projeto para que funcione com um mapeamento fixo e consistente, garantindo que a criptografia e descriptografia sejam eficazes e funcionem em diferentes ambientes.</p> ```

<p> O código original era:</p>

```javascript
function criptografar() {
    let texto = document.getElementById("inputText").value;
    let textoCriptografado = texto.replace(/e/g, '#1')
                                  .replace(/g/g, '~y')
                                  .replace(/f/g, '-')
                                  .replace(/d/g, '9')
                                  .replace(/c/g, 'jHj')
                                  .replace(/b/g, 'Ph@')
                                  .replace(/i/g, '@Hc')
                                  .replace(/a/g, 'XxX')
                                  .replace(/o/g, 'YX')
                                  .replace(/u/g, 'TdH');
    document.getElementById("outputText").value = textoCriptografado;
}

function descriptografar() {
    let textoCriptografado = document.getElementById("inputText").value;
    let texto = textoCriptografado.replace(/#1/g, 'e')
                                  .replace(/~y/g, 'g')
                                  .replace(/-/g, 'f')
                                  .replace(/9/g, 'd')
                                  .replace(/jHj/g, 'c')
                                  .replace(/Ph@/g,'b')
                                  .replace(/@Hc/g, 'i')
                                  .replace(/XxX/g, 'a')
                                  .replace(/YX/g, 'o')
                                  .replace(/TdH/g, 'u');
    document.getElementById("outputText").value = texto;
}
