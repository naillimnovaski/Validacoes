# VALIDACOES

## validacao de cpf

* getElementById: Recupera os elementos do DOM pelos seus IDs (cpfForm, cpf, message).
* textContent e style.color: Alteram o conteúdo de texto e a cor do elemento message para informar se o CPF é válido ou inválido.
* replace: Remove caracteres não numéricos do CPF.
* if e Expressões Regulares: Verifica se o CPF tem 11 dígitos e se todos os dígitos são iguais utilizando a expressão regular/^(\d)\1{10}$/.
* Laços for: Calculam os dígitos verificadores do CPF.
* Operadores matemáticos: Calculam o dígito verificador usando soma, multiplicação, e módulo.


## validacao de email

* value: Recupera o valor do campo de entrada email.
* indexOf: Verifica se o valor do campo de entrada contém os caracteres @ e..
* alert: Exibe uma mensagem ao usuário se o e-mail for inválido ou informado 4
* innerHTML: Atualiza o conteúdo de um elemento no DOM com o valor do e-mail.