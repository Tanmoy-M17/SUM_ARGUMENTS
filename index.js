function sum(...args){
    if(args.length===0){
        return "Sum Invoked Without Argument"
    }
    else if(args.length===1){
        return "Sum function needs atleast 2 Arguments"
    }
    const sumvariable=[...args].reduce((a,c)=>a+Number(c),0);
    return Number(sumvariable.toFixed(1));
}
module.exports = sum;