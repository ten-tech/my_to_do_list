import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { HeaderSty } from './Header.style';

export function Header() {
  // Tableau de phrases de motivation
  const motivationPhrases = [
    "Un pas à la fois, vers la réussite infinie !",
    "Chaque jour est une nouvelle opportunité de grandir.",
    "Rien n'est impossible, la volonté crée des chemins.",
    "Les petites actions peuvent conduire à de grands résultats.",
    "Votre potentiel est illimité, ne sous-estimez jamais vos capacités.",
    "La persévérance est la clé du succès.",
    "Croire en soi-même est le premier secret du succès.",
    "La motivation vous permet de commencer, l'habitude vous permet de continuer."    
  ];

  const [motivation, setMotivation] = useState('');

  // Sélectionne une phrase de motivation aléatoire au chargement initial et toutes les 2 heures
  useEffect(() => {
    // Fonction pour sélectionner une phrase aléatoire
    const selectRandomMotivation = () => {
      const randomIndex = Math.floor(Math.random() * motivationPhrases.length);
      return motivationPhrases[randomIndex];
    };

    // Met à jour la phrase de motivation toutes les 2 heures
    const intervalId = setInterval(() => {
      const randomMotivation = selectRandomMotivation();
      setMotivation(randomMotivation);
    }, 2 * 60 * 60 * 1000); // 2 heures en millisecondes

    // Sélectionne une phrase de motivation aléatoire au chargement initial
    const randomMotivation = selectRandomMotivation();
    setMotivation(randomMotivation);

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={HeaderSty.container}>
      <Image source={require('../../assets/logo.png')} style={HeaderSty.logo} />
      <Text style={HeaderSty.title}>"{motivation}"</Text>
    </View>
  );
};
