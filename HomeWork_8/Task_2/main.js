function cloner(obj){
    if(obj){
        let functions = [];
        for(const key in obj){
            if(typeof obj[key] === 'function'){
                const functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for(const func of functions){
            cloneObj[func.key] = func.functionClone;
        }
        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error('!!!');
}

const clone = cloner({id: 123, name: 'Cloner', greeting(){console.log('Hello!')}, foo(){console.log('bar!')}});
clone.foo();