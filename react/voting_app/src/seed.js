import faker from 'faker';

const products = [
  {
    id:1,
    title:'Yellow Pail',
    description:'On demand sand castle construction expertise',
    url:"#",
    votes:function generateVoteCoun(){
        return (Math.floor((Math.random() *50) + 15));
    },
    submitterAvatarUrl:faker.image.avatar(),
    productImageUrl:faker.image.image(),
  },
  {
    id:2,
    title:'Supermajority: The Fantasy Congress Leaague ',
    description:'Earn points when your favourite politicians pass legislations',
    url:"#",
    votes:function generateVoteCount(){
        return Math.floor((Math.random() *50) + 15);
    },
    submitterAvatarUrl:faker.image.avatar(),
    productImageUrl:faker.image.image(),

  },
  {
    id:3,
    title:'Tinfoild: Tailored tinfoil hats',
    description:'We already have your measurements and shipping address.',
    url:"#",
    votes:function generateVoteCount(){
        return Math.floor((Math.random() *50) + 15);
    },
    submitterAvatarUrl:faker.image.avatar(),
    productImageUrl:faker.image.image(),
  },
  {
    id:4,
    title:'Haught or Naught',
    description:'High-minded or absent-minded? You decide',
    url:"#",
    votes:function generateVoteCount(){
        return Math.floor((Math.random() *50) + 15);
    },
    submitterAvatarUrl:faker.image.avatar(),
    productImageUrl:faker.image.image(),
  }
]

export default products;
