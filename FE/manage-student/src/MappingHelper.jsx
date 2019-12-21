const MappingResponseToModel = response => {
    return response.map(res => {
        const { model } = res;
        return {
            Name: model.Name,
            Address: model.Address,
            Dob: model.Dob
        }
    })
}

const MappingHelper = {
    MappingResponseToModel
}

export default MappingHelper;