import { adjectives, nouns } from './words';

export default () => {
  const randomAd = Math.floor(Math.random() * adjectives.length);
  const randomNoun = Math.floor(Math.random() * nouns.length);

  const Adjective = adjectives[randomAd];
  const Noun = nouns[randomNoun];

  return `${Adjective} ${Noun}`;
};
