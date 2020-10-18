// CONSTANTS
const TOKENS = {
  YFKA: '0x4086692d53262b2be0b13909d804f0491ff6ec3e',
  XAMP: '0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27',
  BOA: '0xf9c36c7ad7fa0f0862589c919830268d1a2581a1',
  TOB: '0x7777770f8a6632ff043c8833310e245eba9209e6',
}

const PAIRS = {
  YFKA_XAMP: '0xaea4d6809375bb973c8036d53db9e90970942738',
  YFKA_TOB: '0x34d0448A79F853d6E1f7ac117368C87BB7bEeA6B',
  YFKA_BOA: '0x5ecF87ff558f73D097EDdfEE35abDE626c7Aeab7',
  YFKA_ETH: '0xc0cfb99342860725806f085046d0233fec876cd7',
}

const POOLS = [
  PAIRS.YFKA_XAMP,
  PAIRS.YFKA_TOB,
  PAIRS.YFKA_BOA,
  PAIRS.YFKA_ETH,
]

const YFKA_POOL_INDEXES = {
	XAMP: 0,
	TOB: 1,
	BOA: 2,
	ETH: 3,
}

const UNISWAP_BASE_LP_ABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];

const YFKA_CONTROLLER_ADDRESS = "0x615983a35CF71D89F1B094e920151d7eA9Bf48bc";

// TODO parse/stringify prob not needed
const STANDARD_ERC20_ABI = JSON.parse(JSON.stringify([
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  }
]));

const YFKA_CONTROLLER_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"previousPool","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newPool","type":"uint256"}],"name":"BonusPoolChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"EmissionRateCut","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"_getBlocksSinceLastReduction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_getNextRateReduction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_getTotalNextRateReduction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"blocks_per_year","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decayDivisor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decayPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emissionRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getActivePool","outputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"getCurrentReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"getCurrentRewardPerYear","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"getLastBlockWithdrawn","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"address","name":"_addr","type":"address"}],"name":"getPersonalEmissionRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastBlockUpdated","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"address","name":"","type":"address"}],"name":"lastBlockWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimum_stake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"address","name":"","type":"address"}],"name":"personalEmissions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"personalYFKAStaked","outputs":[{"internalType":"uint256","name":"points","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setOpen","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"address","name":"_addr","type":"address"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setYFKA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"address","name":"","type":"address"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"totalYFKAStaked","outputs":[{"internalType":"uint256","name":"points","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"transferOwnershipOfYFKA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yfka","outputs":[{"internalType":"contract IYFKA","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"yfkaPerLP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
// const ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI, YFKA_CONTROLLER_ADDRESS);

// HELPERS
const isConnected = () => {
  return !!web3.isConnected();
}

const getInfuraProvider = () => {
  const INFURA_PROVIDER = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/91298a4448d34edf884df8b28db5f9ea');
  return new Web3(INFURA_PROVIDER);
}

const yfkaControllerContract = () => {
  const infuraProvider = getInfuraProvider();
  const contract = new infuraProvider.eth.Contract(YFKA_CONTROLLER_ABI, YFKA_CONTROLLER_ADDRESS);
  return contract;
}

const getAccount = async () => {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	console.log("accounts:" , accounts);
  const provider = getInfuraProvider();
  return provider.utils.toChecksumAddress(accounts[0]);
}

const getIndexBySymbol = (value) => {
	return YFKA_POOL_INDEXES[value];
}

/* NOT WOKRING NEEDS WORK
const getReward = async () =>{
	var ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI);
	var ashContract = ashContract.at(YFKA_CONTROLLER_ADDRESS);

	var xampReward = 0;
	var tobReward = 0;
	var boaReward = 0;
	var ethReward = 0;
	xampReward = await ashContract.getCurrentReward(0);
		xampReward = xampReward / 10**18;
		console.log("XAMP TEST: " + res / 10**18);


	await ashContract.getCurrentReward(1, function (err, res) {
		tobReward = res / 10**18;
		console.log("TOB TEST: " + res / 10**18);
	});

	await ashContract.getCurrentReward(2, function (err, res) {
		boaReward = res / 10**18;
		console.log("BOA TEST: " + res / 10**18);
	});

	await ashContract.getCurrentReward(3, function (err, res) {
		ethReward = res / 10**18;
		console.log("ETH TEST: " + res / 10**18);
	});
	console.log("Number Redeemable: " , xampReward);
	console.log("Number Redeemable: " , tobReward);
	console.log("Number Redeemable: " , boaReward);
	console.log("Number Redeemable: " , ethReward);
  return {
    XAMP: xampReward,
    TOB: tobReward,
    BOA: boaReward,
    ETH: ethReward,
  }
}
*/
function twoDecimals(number){
	//returns the input with 2 Decimal places. ALWAYS WORKS OUT FLOOR
	const newNumber = Math.floor((number+ Number.EPSILON) * 100)/100;
	return newNumber;
}

function fourDecimals(number){
	console.log("input number:",number);
	//returns the input with 4 Decimal places. ALWAYS WORKS OUT FLOOR
	if (number >= 1){
		console.log("input number >= 1");
		const newNumber = Math.floor((number+ Number.EPSILON) * 10000)/10000;
		return newNumber;
	}else if (number < 1)
	{
		console.log("input <  1");
		const newNumber = Math.floor((number+ Number.EPSILON) * 10000)/10000;
		return newNumber;
	}else if (number <=0)
	{
		console.log("input <=  0");
		const newNumber = 0;
		return newNumber;
	}else if (number >0)
	{
		console.log("input >  0");
		const newNumber = Math.floor((number+ Number.EPSILON) * 10000)/1000;
		return newNumber;
	}else
	{
		console.log("input not above 1, Below 1 or above or below 0");
		const newNumber = number;
		return newNumber;
	}

}

const getTotalBalances = async () => {
  console.log('getBalances');
  // const account = await getAccount();
  // if (!account) return null;

  const provider = getInfuraProvider();

  // YFKA_XAMP
  const xampContract = new provider.eth.Contract(UNISWAP_BASE_LP_ABI, PAIRS.YFKA_XAMP);
  const xampContractBalance = await xampContract.methods.totalSupply().call();
  console.log('xampTotalBalance: ', xampContractBalance);

  const xampContractDecimals = await xampContract.methods.decimals().call();
  console.log('xampContractDecimals: ', xampContractDecimals);

  // YFKA_TOB
  const tobContract = new provider.eth.Contract(UNISWAP_BASE_LP_ABI, PAIRS.YFKA_TOB);
  const tobContractBalance = await tobContract.methods.totalSupply().call();
  console.log('tobTotalBalance: ', tobContractBalance);

  const tobContractDecimals = await tobContract.methods.decimals().call();
  console.log('tobContractDecimals: ', tobContractDecimals);

  // YFKA_BOA
  const boaContract = new provider.eth.Contract(UNISWAP_BASE_LP_ABI, PAIRS.YFKA_BOA);
  const boaContractBalance = await boaContract.methods.totalSupply().call();
  console.log('boaTotalBalance: ', boaContractBalance);

  const boaContractDecimals = await boaContract.methods.decimals().call();
  console.log('boaContractDecimals: ', boaContractDecimals);

  // YFKA_ETH
  const ethContract = new provider.eth.Contract(UNISWAP_BASE_LP_ABI, PAIRS.YFKA_ETH);
  const ethContractBalance = await ethContract.methods.totalSupply().call();
  console.log('ethTotalBalance: ', ethContractBalance);

  const ethContractDecimals = await ethContract.methods.decimals().call();
  console.log('ethContractDecimals: ', ethContractDecimals);


  // TODO TOB showing NaN so figure that out
  return {
    XAMP: xampContractBalance ? xampContractBalance / (10 ** xampContractDecimals) : 0,
    TOB: tobContract ? tobContractBalance / (10 ** tobContractDecimals) : 0,
    BOA: boaContractBalance ? boaContractBalance / (10 ** boaContractDecimals) : 0,
    ETH: ethContractBalance ? ethContractBalance / (10 ** ethContractDecimals) : 0,
  }
}

const getPoolBalances = async () => {
  console.log('getBalances');
  const account = await getAccount();
  if (!account) return null;

  const provider = getInfuraProvider();

  // YFKA_XAMP
  const xampContract = new provider.eth.Contract(STANDARD_ERC20_ABI, PAIRS.YFKA_XAMP);
  const xampContractBalance = await xampContract.methods.balanceOf(account).call();
  console.log('xampContractBalance: ', xampContractBalance);

  const xampContractDecimals = await xampContract.methods.decimals().call();
  console.log('xampContractDecimals: ', xampContractDecimals);

  // YFKA_TOB
  const tobContract = new provider.eth.Contract(STANDARD_ERC20_ABI, PAIRS.YFKA_TOB);
  const tobContractBalance = await tobContract.methods.balanceOf(account).call();
  console.log('tobContractBalance: ', tobContractBalance);

  const tobContractDecimals = await tobContract.methods.decimals().call();
  console.log('tobContractDecimals: ', tobContractDecimals);

  // YFKA_BOA
  const boaContract = new provider.eth.Contract(STANDARD_ERC20_ABI, PAIRS.YFKA_BOA);
  const boaContractBalance = await boaContract.methods.balanceOf(account).call();
  console.log('boaContractBalance: ', boaContractBalance);

  const boaContractDecimals = await boaContract.methods.decimals().call();
  console.log('boaContractDecimals: ', boaContractDecimals);

  // YFKA_ETH
  const ethContract = new provider.eth.Contract(STANDARD_ERC20_ABI, PAIRS.YFKA_ETH);
  const ethContractBalance = await ethContract.methods.balanceOf(account).call();
  console.log('ethContractBalance: ', ethContractBalance);

  const ethContractDecimals = await ethContract.methods.decimals().call();
  console.log('ethContractDecimals: ', ethContractDecimals);


  // TODO TOB showing NaN so figure that out
  return {
    XAMP: xampContractBalance ? xampContractBalance / (10 ** xampContractDecimals) : 0,
    TOB: tobContract ? tobContractBalance / (10 ** tobContractDecimals) : 0,
    BOA: boaContractBalance ? boaContractBalance / (10 ** boaContractDecimals) : 0,
    ETH: ethContractBalance ? ethContractBalance / (10 ** ethContractDecimals) : 0,
  }
}

// TODO wrap in a try block
const updateUserStats = async () => {
	const account = await getAccount();

	const ashContract = yfkaControllerContract();

	// TODO (!!) dont hardcode 18 decimals, call teh conntracts for it like getTotalBalances
	//current Rewards
	const xampReward = await ashContract.methods.getCurrentReward(YFKA_POOL_INDEXES.XAMP).call({
		from: account
	});
	console.log('xampReward: ', xampReward);
	console.log('xampReward: ', xampReward / (10**18));
	// $('#reward-XAMP').html(twoDecimals(xampReward / (10**18)));
	$('#reward-XAMP').html(xampReward / (10**18));

	const tobReward = await ashContract.methods.getCurrentReward(YFKA_POOL_INDEXES.TOB).call({
		from: account
	});
	console.log('tobReward: ', tobReward);
	console.log('tobReward: ', tobReward / (10**18));
	// $('#reward-TOB').html(twoDecimals(tobReward / (10**18)));
	$('#reward-TOB').html(tobReward / (10**18));

	const boaReward = await ashContract.methods.getCurrentReward(YFKA_POOL_INDEXES.BOA).call({
		from: account
	});
	console.log('boaReward: ', boaReward);
	console.log('boaReward: ', boaReward / (10**18));
	// $('#reward-BOA').html(twoDecimals(boaReward / (10**18)));
	$('#reward-BOA').html(boaReward / (10**18));

	const ethReward = await ashContract.methods.getCurrentReward(YFKA_POOL_INDEXES.ETH).call({
		from: account
	});
	console.log('ethReward: ', ethReward);
	console.log('ethReward: ', ethReward / (10**18));
	// $('#reward-ETH').html(twoDecimals(ethReward / (10**18)));
	$('#reward-ETH').html(ethReward / (10**18));


  const bonusPoolIdx = await ashContract.methods.getActivePool().call();


	// XAMP Personal emission rate
	const xampPersonalEmissionRate = await ashContract.methods.getPersonalEmissionRate(YFKA_POOL_INDEXES.XAMP, account).call();

	let emissionRateToReadableXAMP = twoDecimals((xampPersonalEmissionRate / (10 ** 18)/2)* 100);
	if (emissionRateToReadableXAMP < 0) {
		emissionRateToReadableXAMP = 0;
	}
	if (bonusPoolIdx == YFKA_POOL_INDEXES.XAMP)  {
		emissionRateToReadableXAMP = emissionRateToReadableXAMP * 2;
	}
	$('#personal-emission-XAMP').html(`${emissionRateToReadableXAMP}`);



	// TOB Personal emission rate
	const tobPersonalEmissionRate = await ashContract.methods.getPersonalEmissionRate(YFKA_POOL_INDEXES.TOB, account).call();
	console.log('tobPersonalEmissionRate: ', tobPersonalEmissionRate);
	let emissionRateToReadableTob = twoDecimals((tobPersonalEmissionRate / (10 ** 18)/2)* 100);
	console.log('emissionRateToReadableTob: ', emissionRateToReadableTob);
	if (emissionRateToReadableTob < 0) {
		emissionRateToReadableTob = 0;
	}
	console.log('bonusPoolIdx: ', typeof bonusPoolIdx);
	console.log('YFKA_POOL_INDEXES.TOB: ', YFKA_POOL_INDEXES.TOB);
	if (bonusPoolIdx == YFKA_POOL_INDEXES.TOB)  {
		emissionRateToReadableTob = emissionRateToReadableTob * 2;
	}
	$('#personal-emission-TOB').html(`${emissionRateToReadableTob}`);

	// BOA Personal emission rate
	const boaPersonalEmissionRate = await ashContract.methods.getPersonalEmissionRate(YFKA_POOL_INDEXES.BOA, account).call();
	let emissionRateToReadableBoa = twoDecimals((boaPersonalEmissionRate / (10 ** 18)/2)* 100);
	if (emissionRateToReadableBoa < 0) {
		emissionRateToReadableBoa = 0;
	}
	if (bonusPoolIdx == YFKA_POOL_INDEXES.BOA)  {
		emissionRateToReadableBoa = emissionRateToReadableBoa * 2;
	}
	$('#personal-emission-BOA').html(`${emissionRateToReadableBoa}`);

	// ETH Personal emission rate
	const ethPersonalEmissionRate = await ashContract.methods.getPersonalEmissionRate(YFKA_POOL_INDEXES.ETH, account).call();
	let emissionRateToReadableEth = twoDecimals((ethPersonalEmissionRate / (10 ** 18)/2)* 100);
	if (emissionRateToReadableEth < 0) {
		emissionRateToReadableEth = 0;
	}
	if (bonusPoolIdx == YFKA_POOL_INDEXES.ETH)  {
		emissionRateToReadableEth = emissionRateToReadableEth * 2;
	}
	$('#personal-emission-ETH').html(`${emissionRateToReadableEth}`);



	// TODO 18 decimals?
	// current LP Tokens
	// XAMP
	const xampLpBalance = await ashContract.methods.stakes(YFKA_POOL_INDEXES.XAMP, account).call();
	const XAMPbalance = fourDecimals(xampLpBalance / (10 ** 18));
	console.log('Staked XAMP: ', XAMPbalance);
	$('#balance-LP-XAMP').html(XAMPbalance);

	// TOB
	const tobLpBalance = await ashContract.methods.stakes(YFKA_POOL_INDEXES.TOB, account).call();
	const TOBbalance = fourDecimals(tobLpBalance / (10 ** 18));
	console.log('Staked TOB: ', TOBbalance);
	$('#balance-LP-TOB').html(TOBbalance);

	// OBA
	const boaLpBalance = await ashContract.methods.stakes(YFKA_POOL_INDEXES.BOA, account).call();
	const BOAbalance = fourDecimals(boaLpBalance / (10 ** 18));
	console.log('Staked BOA: ', BOAbalance);
	$('#balance-LP-BOA').html(BOAbalance);

	// ETH
	const ethLpBalance = await ashContract.methods.stakes(YFKA_POOL_INDEXES.ETH, account).call();
	const ETHbalance = fourDecimals(ethLpBalance / (10 ** 18));
	console.log('Staked ETH: ', ETHbalance);
	$('#balance-LP-ETH').html(ETHbalance);


	//% of pool
	const TotalBalances = await getTotalBalances();

	//XAMP
	const TotalXAMPbalance = TotalBalances.XAMP;
	const percentXAMP = (XAMPbalance/TotalXAMPbalance) *100;
	console.log("XAMP Balance = ", XAMPbalance);
	console.log("XAMP Total =", TotalXAMPbalance);
	var readableTotalXAMP = twoDecimals(TotalXAMPbalance);
	var readablePercentage = fourDecimals(percentXAMP);
	//if (readablePercent <= 0) readablePercentage = "<0.00%";
	console.log("XAMP % = ", readablePercentage);
	$('#pool-Share-XAMP').html(`${readablePercentage}`);
	$('#total-LP-XAMP').html(`${readableTotalXAMP}`);

	//TOB
	const TotalTOBbalance = TotalBalances.TOB;
	const percentTOB = (TOBbalance/TotalTOBbalance) *100;
	console.log("TOB Balance = ", TOBbalance);
	console.log("TOB Total =", TotalTOBbalance);
	var readableTotalTOB = twoDecimals(TotalTOBbalance);
	var readablePercentTOB = fourDecimals(percentTOB);
	//if (readablePercentTOB <= 0) readablePercentage = "<0.00%";
	$('#pool-Share-TOB').html(`${readablePercentTOB}`);
	$('#total-LP-TOB').html(`${readableTotalTOB}`);

	//BOA
	const TotalBOAbalance = TotalBalances.BOA;
	const percentBOA = (BOAbalance/TotalBOAbalance) *100;
	var readableTotalBOA = twoDecimals(TotalBOAbalance);
	var readablePercentageBOA = fourDecimals(percentBOA);
	//if (readablePercentageBOA <= 0) readablePercentage = "<0.00%";
	console.log("BOA % = ", readablePercentage);
	$('#pool-Share-BOA').html(`${readablePercentageBOA}`);
	$('#total-LP-BOA').html(`${readableTotalBOA}`);

	//ETH
	const TotalETHbalance = TotalBalances.ETH;
	const percentETH = (ETHbalance/TotalETHbalance) *100;
	var readableTotalETH = twoDecimals(TotalETHbalance);
	var readablePercentageETH = fourDecimals(percentETH);
	//if (readablePercentageETH <= 0) readablePercentage = "<0.00%";
	$('#pool-Share-ETH').html(`${readablePercentageETH}`);
	$('#total-LP-ETH').html(`${readableTotalETH}`);

}


const getBonusPool = async () => {
  console.log('getBonusPool');
  const contract = yfkaControllerContract();
  const idx = await contract.methods.getActivePool().call();
  return POOLS[idx];
}

const getGlobalEmissionRate = async () => {
  console.log('getGlobalEmissionRate');
  const contract = yfkaControllerContract();
  const emissionRate = await contract.methods.emissionRate().call();
  console.log('emissionRate: ', emissionRate);
  // TODO is it 18 tho
  const emissionRateToHuman = ((emissionRate / (10 ** 18))/2)*100;
  console.log('emissionRateToHuman: ', emissionRateToHuman);

  const emissionRateToReadable = twoDecimals(emissionRateToHuman);
  console.log('emissionRateToReadable: ', emissionRateToReadable);
  return emissionRateToReadable;
}


// UI FUNCTIONS
const updateActivePool = async () => {
  console.log('updateActivePool');
  const globalEmissionRate = await getGlobalEmissionRate();
await updateUserStats();
  const bonusEmissionRate = Math.round(globalEmissionRate * 2);
  $('#global-rate').html(`${globalEmissionRate}%`);
  $('#bonus-global-rate').html(`${bonusEmissionRate}%`);

  $('#eth-apy').html(`${globalEmissionRate}`);
  $('#xamp-apy').html(`${globalEmissionRate}`);
  $('#tob-apy').html(`${globalEmissionRate}`);
  $('#boa-apy').html(`${globalEmissionRate}`);
  $('#coin-emission').html(`${globalEmissionRate}`);
  const bonusAddress = await getBonusPool();
  switch (bonusAddress) {
    case PAIRS.YFKA_XAMP:
      $('#bonus-global-token').html('XAMP');
      $('#xamp-apy').html(`${bonusEmissionRate}`);
      //document.getElementById('pool-XAMP').style.backgroundImage="url(imgs/fireBG3.png)"; .setAttribute("id", "div_top2");
	document.getElementById('pool-XAMP').setAttribute("id", "bonusPool");
      break;
    case PAIRS.YFKA_TOB:
      $('#bonus-global-token').html('TOB');
      $('#tob-apy').html(`${bonusEmissionRate}`);
     // document.getElementById('pool-TOB').style.backgroundImage="url(imgs/fireBG3.png)";
		  document.getElementById('pool-TOB').setAttribute("id", "bonusPool");
      break;
    case PAIRS.YFKA_BOA:
      $('#bonus-global-token').html('BOA');
      $('#boa-apy').html(`${bonusEmissionRate}`);
      //document.getElementById('pool-BOA').style.backgroundImage="url(imgs/fireBG3.png)";
		  document.getElementById('pool-BOA').setAttribute("id", "bonusPool");
      break;
    case PAIRS.YFKA_ETH:
    default:
      // Dont do shit
      break;
  }
  // ashContract.getActivePool(function (err, res) {
  //     if(res == 0) document.getElementById("activePool").innerHTML = "Bonus Pool: XAMP";
  //     else if(res == 1) document.getElementById("activePool").innerHTML = "Bonus Pool: TOB";
  //     else if(res == 2) document.getElementById("activePool").innerHTML = "Bonus Pool: BOA";
  // });

}



const getYFKASupply = async () => {

}

/* function waitForApproval(tx, ashContract, payload) {
 	web3.eth.getTransaction(tx,
 		function (err, res2) {

    	if(res2['blockNumber'] == null) setTimeout(() => { waitForApproval(tx, ashContract, payload)}, 5000);
 			else {
       	setTimeout(() => { console.log(res2);}, 5000);
	console.log('Approval - Success.... Moving on');
	const amount = 	document.getElementById("stake-input").value * (10**18);
	console.log('Input ammount -',document.getElementById("stake-input").value);
	console.log('UNIT256 ammount -',document.getElementById("stake-input").value * (10**18));

       	ashContract.stake(payload, amount, function (err, res) {
           document.getElementById("stakeReceipt").innerHTML = '<a href="https://etherscan.io/tx/' + res + '">Click here to view your transaction.</a>';
           document.getElementById("stakeReceipt").style.opacity = "1";
           // updatePoolBalances();
       	});
       }

       console.log(res2);
   	}
 	);
}
*/
function waitForApproval(tx, ashContract, payload, amount) {
	web3.eth.getTransaction(tx,
		function (err, res2) {

    	if(res2['blockNumber'] == null) setTimeout(() => { waitForApproval(tx, ashContract, payload,amount)}, 5000);
			else {
      	setTimeout(() => { console.log(res2);}, 5000);
				console.log("Amount: ",amount);
				console.log("Payload: ",payload);
				console.log("Calling: Stake ");
      	ashContract.stake(payload, amount, function (err, res) {

          document.getElementById("stakeReceipt").innerHTML = '<a target="_blank" href="https://etherscan.io/tx/' + res + '">Click here to view your transaction.</a>';
          document.getElementById("stakeReceipt").style.opacity = "1";
          // updatePoolBalances();
      	});
      }

      console.log(res2);
  	}
	);
}

  var uniTokenAddressBOA = "0x5ecf87ff558f73d097eddfee35abde626c7aeab7";
  var uniTokenAddressTOB = "0x34d0448a79f853d6e1f7ac117368c87bb7beea6b";
  var uniTokenAddressXAMP = "0xaea4d6809375bb973c8036d53db9e90970942738";
  var uniTokenAddressETH  = "0xc0cfb99342860725806f085046d0233fec876cd7";

$('input[type=radio][name=stake]').change(async (event) => {
  console.log('change radio stake');
  const balances = await getPoolBalances();
  console.log('balances: ', balances);
	// const balance = twoDecimals(balances[event.currentTarget.value]);
	const balance = balances[event.currentTarget.value];
  console.log('balance: ', balance);
  // TODO
  $('#stake-input').val(balance);
  // $('#stake-input').attr('placeholder', `${balance}`);
  $('#stake-balance').html(balance)
  return balance || '';
});

$('#stakeBTN').click(async () => {

  var ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI);
  var ashContract = ashContract.at(YFKA_CONTROLLER_ADDRESS);
  var uniContract = web3.eth.contract(UNISWAP_BASE_LP_ABI);


  console.log('stake value: ', 'stake btn click');
  const keys = Object.keys(PAIRS);
  console.log('keys: ', keys);
  const value = $('[name=stake][type=radio]:checked').val();
  var payload;
  //PULL uniInstance info from radio button.
  switch (value){
	case 'XAMP':
		  payload =0;
	uniInstance = uniContract.at(uniTokenAddressXAMP);
		break;
	case 'TOB':
		  payload =1;
	uniInstance = uniContract.at(uniTokenAddressTOB);
		break;
	case 'BOA':
		  payload =2;
	uniInstance = uniContract.at(uniTokenAddressBOA);
		break;
	case 'ETH':
		  payload =3;
	uniInstance = uniContract.at(uniTokenAddressETH);
		break;
	default:
		//do Nothing
		console.log('Nothing Selected:');
		break;
  }

  console.log('value: ', value);
  const indexOfValue = keys.map((key) => {
    return key.indexOf(value) >= 0;
  })
  const idx = indexOfValue.indexOf(true);
  console.log('idx: ', idx);
  const pool = POOLS[idx];
  console.log('pool: ', pool);
  var amount = $('#stake-input').val();
  console.log('amount ', amount);
  if (amount === 0 || amount === '0') return;
  if (!window.ethereum) return;
	amount = amount * 10**18
	uniInstance.approve(YFKA_CONTROLLER_ADDRESS, amount, function (err, res) {
	console.log("APPROVE TX: https://etherscan.io/tx/" + res);
	document.getElementById("stakeReceipt").innerHTML = "Awaiting approval...";
	document.getElementById("stakeReceipt").style.opacity = "1";
	waitForApproval(res, ashContract, payload, amount);
	});
});


window.addEventListener('load', async (event) => {
  if (!isConnected()) return;
    console.log("connected");
    //updatePoolBalances();
    $("#isConnected").html("wallet connected");

    await updateActivePool();
    // Set defaults
    const poolBalances = await getPoolBalances();
    // TODO use const
		const balance = poolBalances.XAMP;
    $('#stake-input').val(balance);
    // $('#stake-input').attr('placeholder', `${balance}`);
    $('#stake-balance').html(balance);
    console.log(poolBalances);
});

$('input[type=radio][name=redeem]').change(async (event) => {
	console.log('change radio redeem');
	const value = $('[name=redeem][type=radio]:checked').val();
	const account = await getAccount();
	const globalEmissionRate = await getGlobalEmissionRate();
	const bonusEmissionRate = globalEmissionRate*2;
	$('#coin-emission').html(`${globalEmissionRate}`);

	const idx = getIndexBySymbol(value);
	console.log('Selected Coin: ',value,";idx: ",idx);


	const ashContract = yfkaControllerContract();
	const currentReward = await ashContract.methods.getCurrentReward(idx).call({
		from: account
	});
	console.log("Number Redeemed: " + currentReward / 10**18);
	const balance = fourDecimals(currentReward / 10**18);
	$('#redeem-amount').html(`${balance}`);
	$('#redeem-amount-button').html(`${balance}`);

	const personalEmission = ashContract.methods.getPersonalEmissionRate(idx, account).call();
	console.log("Personal Emission: " + personalEmission / 10**18);
	const emissionRateToHuman = (personalEmission / (10 ** 18)/2)*100;
	console.log('emissionRateToHuman: ', emissionRateToHuman);

	var emissionRateToReadable = twoDecimals(emissionRateToHuman);
	if (emissionRateToReadable < 0) {
		emissionRateToReadable = 0;
	}
	console.log('emissionRateToReadable: ', emissionRateToReadable);
	$('#personal-emission').html(`${emissionRateToReadable}`);

});

/*
// UNSTAKE
// EXECUTE UNSTAKE FUNCTION
document.getElementById("unstakeButton").addEventListener('click', async () => {
    // Modern dapp browsers...
    if (web3.isConnected) {
    	var ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI);
      var ashContract = ashContract.at(ashAddress);

      var e = document.getElementById("selectedTokenUnstake");
      var value = e.options[e.selectedIndex].value;

      var payload;

			if(value == "XAMP") payload = 0;
      else if(value == "TOB") payload = 1;
      else if(value == "BOA") payload = 2;
      else if(value == "ETH") payload = 3;


      ashContract.unstake(payload,document.getElementById("unstakeAmount").value * 10**18, function (err, res) {
				console.log("https://etherscan.io/tx/" + res);
        document.getElementById("unstakeReceipt").innerHTML = '<a href="https://etherscan.io/tx/' + res  +'">Unstake Receipt</a>';
        document.getElementById("unstakeReceipt").style.opacity = "1";
			});
    }

});



*/



$('input[type=radio][name=unstake]').change(async (event) => {
	console.log('change radio unstake');
	const value = $('[name=unstake][type=radio]:checked').val();
	const account = await getAccount();
	const idx = getIndexBySymbol(value);
	console.log('Selected Coin: ',value,";Payload: ",idx);

	var balance;

	var ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI);
	var ashContract = ashContract.at(YFKA_CONTROLLER_ADDRESS);

	await ashContract.stakes(idx, account, function (err, res) {
		balance = fourDecimals(res / (10 ** 18));
		console.log('Staked XAMP: ', balance);
		$('#unstake-input').val(`${balance}`);
		$('#unstake-input').attr('placeholder', `${balance}`);
		$('#unstake-balance').html(`${balance}`);
	});
});


$('#unstakeBTN').click(async () => {
	var ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI);
	var ashContract = ashContract.at(YFKA_CONTROLLER_ADDRESS);

  console.log('unstake btn click');
  const value = $('[name=unstake][type=radio]:checked').val();
  const idx = getIndexBySymbol(value);

	var amount = $('#stake-input').val();
	amount = amount * 10**18;
	ashContract.unstake(idx, amount, function (err, res) {
		console.log("https://etherscan.io/tx/" + res);
		document.getElementById("unstakeReceipt").innerHTML = '<a href="https://etherscan.io/tx/' + res  +'">Unstake Receipt</a>';
		document.getElementById("unstakeReceipt").style.opacity = "1";
	});
});


$('#redeemBTN').click(async () => {
	var ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI);
	var ashContract = ashContract.at(YFKA_CONTROLLER_ADDRESS);

  console.log('Redeem btn click');
  const value = $('[name=redeem][type=radio]:checked').val();
  const idx = getIndexBySymbol(value);

	ashContract.redeem(idx, function (err, res) {
		document.getElementById("withdrawResult").innerHTML = '<a href="https://etherscan.io/tx/"' + res  +'">Withdraw Receipt</a>';
		document.getElementById("withdrawResult").style.opacity = "1";
	});
});
