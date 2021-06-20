const abi = require("./abi.json");
const Web3 = require("web3")


const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");


const accounts = web3.eth.getAccounts();
const contract = new web3.eth.Contract(abi,"0x741717C1181E478AB3FbD4E04228A6158F8238Be");

function createNFt(id,price) {
    contract.methods.createNFT(id,price).send({from:accounts[0]})
}

const x = ()=>{
    contract.methods.totalSupply().call().then(
        data=>{console.log("total number of NFTs is"+data);
    for (let index = 1; index <= data; index++) {
        contract.methods.tokenURI(index).call().then(
            data=>{
                console.log("link to NFT" +index + " is "+ data);
            }
        )
    }}
    )
}

x();