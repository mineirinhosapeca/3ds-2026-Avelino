import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  // Lógica: Estado para o contador de cliques
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      
      {/* Imagem Local - O arquivo deve estar na mesma pasta que o App.js */}
      {/* Se sua imagem tiver outro nome (ex: perfil.png), altere abaixo */}
      <Image 
        source={require('./foto.jpg')} 
        style={styles.fotoDocumento} 
      />

      <Text style={styles.titulo}>Primeiro App do Casal</Text>
      
      {/* Card que mostra o número */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>Você clicou:</Text>
        <Text style={styles.numero}>{contador}</Text>
        <Text style={styles.texto}>vezes</Text>
      </View>

      {/* Botão de Ação */}
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => setContador(contador + 1)}
      >
        <Text style={styles.textoBotao}>CLICAR!</Text>
      </TouchableOpacity>

      {/* Botão para Resetar */}
      <TouchableOpacity 
        onPress={() => setContador(0)}
        style={styles.botaoZerar}
      >
        <Text style={styles.textoZerar}>Zerar contador</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  fotoDocumento: {
    width: 125,               // Largura (estilo 3x4)
    height: 170,             // Altura (estilo 3x4)
    marginBottom: 15,
    borderRadius: 4,         
    borderWidth: 1,          
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    width: '80%',
    // Sombra para Android
    elevation: 8,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 30,
  },
  subtitulo: {
    fontSize: 16,
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  numero: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#007AFF', 
  },
  texto: {
    fontSize: 18,
    color: '#888',
  },
  botao: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoZerar: {
    marginTop: 25,
    padding: 10,
  },
  textoZerar: {
    color: '#ff3b30', 
    fontSize: 20,
    fontWeight: '600',
  },
});