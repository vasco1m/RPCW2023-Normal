var contracts = require('../models/contracts');

//devolve uma lista com todos os contratos
exports.listContracts = () => {
    return contracts.find()
        .sort()
        .then(contracts => {
            return contracts
        })
        .catch(err => {
            return err
        })
}

//devolve o contrato com identificador id
exports.contractDetails = (id) => {
    return contracts.findById(id)
    .then(contract => {
        return contract
    })
    .catch(err => {
        return err
    })
}

//devolve a lista dos contratos realizados durante o ano YYYY
exports.contractsYear = (year) => {
    return contracts.find({ DataInicioContrato: { $regex: `.*${year}.*` }})
    .then(contracts => {
        return contracts
    })
    .catch(err => {
        return err
    })
}

//devolve a lista dos contratos realizados pela instituição contratante AAA
exports.contractsInstitution = (institution) => {
    return contracts.find({ NIPCInstituicao: institution})
    .then(contracts => {
        return contracts
    })
    .catch(err => {
        return err
    })
}

//devolve a lista dos cursos dos contratados (sem repetições)
exports.listContractsCourse = () => {
    return contracts.distinct('Curso')
    .then(courses => {
        return courses
    })
    .catch(err => {
        return err
    })
}

//devolve a lista das instituições contratantes (sem repetições)
exports.listContractsInstitution = () => {
    return contracts.distinct('NomeInstituicao')
    .then(contracts => {
        return contracts
    })
    .catch(err => {
        return err
    })
}

//acrescenta um contrato novo à BD
exports.addContract = (contract) => {
    return contracts.create(contract)
    .then(contract => {
        return contract
    })
    .catch(err => {
        return err
    })
}

//elimina da BD o contrato com o identificador id.
exports.deleteContract = (id) => {
    return contracts.findByIdAndDelete(id)
    .then(contract => {
        return contract
    })
    .catch(err => {
        return err
    })
}
