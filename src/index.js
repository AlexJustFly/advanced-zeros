module.exports = function getZerosCount(number, base) {
	let n = number;
	let b = base;



/*let x = new zeroCount(14423541, 193);
*/
	class zeroCount {
		constructor (number, base) {
			this.number = number;
			this.base = base;
			this.copyBase = base;
			this.secondBase = 0;
			this.countBase = 0;
			this.count = 0;
			this.primeNumb = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251];
		}
		near() {
			for (let i = 0; this.base > 251;) {
				if (this.base/this.primeNumb[i] == parseInt(this.base/this.primeNumb[i])) {
					this.base/=this.primeNumb[i];
				} else {
					i++;
				}
			}
		}
		isPrime() {
			/*for (let i = 0; i < this.primeNumb.length; i++) {*/
				//if (/*this.primeNumb[i] == */
					return !!~this.primeNumb.indexOf(this.base)/*) {*/
					//return true;
					/*break;*/
				//} else {
					//this.notPrime();
				//}
			}
		//notPrime() {
			//for (; i < this.primeNumb.length;) {
					//if (this.base/this.primeNumb[i] == parseInt(this.base/this.primeNumb[i])) {
						//this.base/=this.primeNumb[i];
					//} else {
						//i+=1;
						//break;
					//}
				//}
			//}
		countPrime() {
				while(this.copyBase%this.secondBase==0/*this.secondBase*/) { // copy147 - это результат деления 147 на 7
				this.copyBase /= this.secondBase;
				this.countBase+=1;
			}
		}
		countZero() {
			for (this.secondBase = this.base; parseInt(this.number/this.base) >= 1; this.base*=this.secondBase) {
				this.count+=parseInt(this.number/this.base);
			}
		}
		run() {
			this.near();
			for (let i = 0; this.isPrime()!=true;) {
				if (this.base/this.primeNumb[i] == parseInt(this.base/this.primeNumb[i])) {
					this.base/=this.primeNumb[i];
/*					let x = this.base/this.primeNumb[i];
					if ( (this.base/x) == (this.base/this.primeNumb[i])) {
						this.secondBase = x;
						break;
					} else {
						this.base/=this.primeNumb[i];
						this.secondBase = this.base/this.primeNumb[i];
					}*/
				} else {
					i++;
				}
			}
			this.countZero();
			this.countPrime();
			if (this.countBase > 1) {
				this.count /= this.countBase;
			}
		}
	}

	let qwe = new zeroCount(n, b);
	qwe.run();

/*	console.log(parseInt(qwe.count));*/
	return parseInt(qwe.count);
}

