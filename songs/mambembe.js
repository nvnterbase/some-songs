window.addSong({
  title: "Mambembe",
  artist: "Chico Buarque",
  
  // --- CHORD DICTIONARY ---
  chords: {
    'D7M(9)': { frets: [-1, 5, 4, 6, 5, -1], baseFret: 4, name: 'Dmaj7(9)' },
    'F7(13)': { frets: [1, -1, 1, 2, 3, -1], baseFret: 1, name: 'F7(13)' },
    'Bb7M': { frets: [-1, 1, 3, 2, 3, 1], baseFret: 1, name: 'Bbmaj7' },
    'A7': { frets: [-1, 0, 2, 0, 2, 0], baseFret: 1, name: 'A7' },
    'F6(9)': { frets: [-1, 8, 7, 7, 8, -1], baseFret: 7, name: 'F6(9)' },
    'F#7/C#': { frets: [-1, 4, 2, 3, 2, 2], baseFret: 2, name: 'F#7/C#' },
    'Bm7': { frets: [-1, 2, 4, 2, 3, 2], baseFret: 1, name: 'Bm7' },
    'F#7': { frets: [2, 4, 2, 3, 2, 2], baseFret: 2, name: 'F#7' },
    'G6': { frets: [3, 2, 0, 0, 0, 0], baseFret: 1, name: 'G6' },
    'F#m7(b5)': { frets: [2, -1, 2, 2, 1, -1], baseFret: 1, name: 'F#m7(b5)' },
    'B7(b9)': { frets: [-1, 2, 1, 2, 1, -1], baseFret: 1, name: 'B7(b9)' },
    'E7(9)': { frets: [0, 2, 0, 1, 0, 2], baseFret: 1, name: 'E7(9)' },
    'C7(9)': { frets: [-1, 3, 2, 3, 3, 3], baseFret: 1, name: 'C7(9)' },
    'F#m7': { frets: [2, 4, 2, 2, 2, 2], baseFret: 2, name: 'F#m7' },
    'D7M': { frets: [-1, -1, 0, 2, 2, 2], baseFret: 1, name: 'Dmaj7' },
    'C#m7': { frets: [-1, 4, 6, 4, 5, 4], baseFret: 4, name: 'C#m7' },
    'A7(13-)': { frets: [5, -1, 5, 6, 6, -1], baseFret: 5, name: 'A7(b13)' }
  },

  // --- LYRICS ---
  sections: [
    {
      name: "Intro",
      lines: [{ chords: ["D7M(9)","F7(13)","Bb7M","A7"], lyrics: "" }]
    },
    {
      name: "Primeira Parte",
      lines: [
        { chords: ["D7M(9)","F6(9)","Bb7M","A7"], lyrics: "No palco, na praça, no circo, num banco de jardim" },
        { chords: ["D7M(9)","F#7/C#","Bm7","F#7","G6"], lyrics: "Correndo no escuro, pixado no muro Você vai saber de mim" },
        { chords: ["A7","F#m7(b5)","B7(b9)","E7(9)"], lyrics: "Mambembe, cigano" },
        { chords: ["C7(9)","F#m7","F7(13)"], lyrics: "Debaixo da ponte, cantando" },
        { chords: ["Bb7M","A7","D7M","C#m7"], lyrics: "Por baixo da terra, cantando" },
        { chords: ["E7(9)","A7(13-)","D7M"], lyrics: "Na boca do povo, cantando" }
      ]
    },
    {
      name: "Segunda Parte",
      lines: [
        { chords: ["F6(9)","Bb7M","A7"], lyrics: "Mendigo, malandro, moleque, mulambo, bem ou mal" },
        { chords: ["D7M(9)","F#7/C#","Bm7","F#7","G6"], lyrics: "Escravo fugido ou louco varrido Vou fazer meu festival" }
      ]
    },
    {
      name: "Terceira Parte",
      lines: [
        { chords: ["F6(9)","Bb7M","A7"], lyrics: "Poeta, palhaço, pirata, corisco, errante judeu" },
        { chords: ["D7M(9)","F#7/C#","Bm7","F#7","G6"], lyrics: "Dormindo na estrada, não é nada, não é nada E esse mundo é todo meu" }
      ]
    }
  ]
});
