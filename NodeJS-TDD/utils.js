function capitialize(str){
    return str.charAT(0).toUpperCase() + str.slice(1);
}

module.exports = {
    capitialize: capitialize
};