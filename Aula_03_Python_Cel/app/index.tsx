import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [palpite, setPalpite] = useState('');
  const [numeroSecreto, setNumeroSecreto] = useState(Math.floor(Math.random() * 10) + 1);
  const [ganhou, setGanhou] = useState(false);

  const verificarPalpite = () => {
    const num = parseInt(palpite);
    if (isNaN(num)) {
      Alert.alert("Erro", "Por favor, digite um número válido.");
      return;
    }

    if (num === numeroSecreto) {
      Alert.alert("✨ Parabéns!", `Você acertou! O número era ${numeroSecreto}.`);
      setGanhou(true); // Ativa o estado de vitória
    } else {
      const dica = num > numeroSecreto ? "MUITO ALTO" : "MUITO BAIXO";
      Alert.alert("Quase lá!", `Seu palpite foi ${dica}.`);
    }
  };

  // --- FUNÇÃO PARA RECOMEÇAR ---
  const reiniciarJogo = () => {
    setNumeroSecreto(Math.floor(Math.random() * 10) + 1);
    setPalpite('');
    setGanhou(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adivinhação Expo 📱</Text>
      
      {!ganhou ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Digite de 1 a 10"
            keyboardType="numeric"
            onChangeText={setPalpite}
            value={palpite}
          />
          <TouchableOpacity style={styles.botao} onPress={verificarPalpite}>
            <Text style={styles.textoBotao}>CHUTAR</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={[styles.botao, styles.botaoReiniciar]} onPress={reiniciarJogo}>
          <Text style={styles.textoBotao}>JOGAR NOVAMENTE 🔄</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', alignItems: 'center', justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
  input: { width: '100%', height: 50, backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 15, marginBottom: 20, textAlign: 'center', borderWidth: 1, borderColor: '#ddd' },
  botao: { backgroundColor: '#4CAF50', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 10 },
  botaoReiniciar: { backgroundColor: '#2196F3' },
  textoBotao: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});