const { Block, BlockChain } = require('./blockchain');

const testChain = new BlockChain();

testChain.addBlock(new Block(Date.now().toString(), {from: 'Ilyas', to: 'John', amount: 124214}));

testChain.addBlock(new Block(Date.now().toString(), {from: 'Alex', to: 'Gerard', amount: 5464}));

testChain.addBlock(new Block(Date.now().toString(), {from: 'Kris', to: 'San', amount: 42545}));

testChain.addBlock(new Block(Date.now().toString(), {from: 'Emma', to: 'Kily', amount: 6565}));

console.log(testChain.chain);