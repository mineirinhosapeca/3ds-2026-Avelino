import random

def adivinhe():
    print("========================================")
    print("   BEM-VINDO AO JOGO DE ADIVINHAÇÃO!   ")
    print("========================================\n")

    # 1. Configuração do Nível de Dificuldade
    print("Escolha o nível de dificuldade:")
    print("(1) Fácil - 1 a 10 (10 tentativas)")
    print("(2) Médio - 1 a 50 (5 tentativas)")
    print("(3) Difícil - 1 a 100 (3 tentativas)")

    try:
        entrada = input("\nDigite o número do nível: ")
        nivel = int(entrada)
        
        # Validação: Se o número não for 1, 2 ou 3
        if nivel not in [1, 2, 3]:
            print("Nível inexistente! Começando no nível Fácil por padrão.")
            nivel = 1
            
    except ValueError:
        # Se o usuário digitar letras ou símbolos
        print("Entrada inválida! Começando no nível Fácil por padrão.")
        nivel = 1

    # 2. Definição dinâmica das regras baseada no nível
    if nivel == 1:
        max_numero, tentativas_restantes = 10, 10
    elif nivel == 2:
        max_numero, tentativas_restantes = 50, 5
    else:
        # Aqui só entra o nível 3, pois validamos o 'nivel' acima
        max_numero, tentativas_restantes = 100, 3

    numero_secreto = random.randint(1, max_numero)
    pontos = 1000

    print(f"\nPrepare-se! Tente adivinhar o número entre 1 e {max_numero}.")
    print(f"Você tem {tentativas_restantes} tentativas.")

    # 3. Loop Principal do Jogo
    acertou = False
    while tentativas_restantes > 0:
        print(f"\nTentativas restantes: {tentativas_restantes}")
        
        try:
            palpite = int(input("Qual é o seu palpite? "))
            
            # Validação de intervalo do palpite
            if palpite < 1 or palpite > max_numero:
                print(f"Atenção! Seu palpite deve estar entre 1 e {max_numero}.")
                continue

            # 4. Verificação do Palpite
            if palpite == numero_secreto:
                print(f"✨ PARABÉNS! Você acertou com {pontos} pontos!")
                acertou = True
                break
            else:
                if palpite > numero_secreto:
                    print("Seu palpite foi MUITO ALTO.")
                else:
                    print("Seu palpite foi MUITO BAIXO.")
                
                # Penalidade de pontuação baseada na distância do número
                pontos_perdidos = abs(numero_secreto - palpite)
                pontos -= pontos_perdidos
                tentativas_restantes -= 1

        except ValueError:
            print("Erro: Por favor, digite apenas números inteiros.")
            continue

    # 5. Finalização do Jogo
    if not acertou:
        print("\n--- QUE PENA! ---")
        print(f"Suas tentativas acabaram. O número secreto era {numero_secreto}.")
    
    print("\nObrigado por jogar!")

if __name__ == "__main__":
    adivinhe()